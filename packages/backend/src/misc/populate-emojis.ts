import { In, IsNull } from "typeorm";
import { Emojis } from "@/models/index.js";
import type { Emoji } from "@/models/entities/emoji.js";
import type { Note } from "@/models/entities/note.js";
import { Cache } from "./cache.js";
import { decodeReaction, isSelfHost, toPuny } from "backend-rs";
import { config } from "@/config.js";
import { query } from "@/prelude/url.js";
import { redisClient } from "@/db/redis.js";
import type { NoteEdit } from "@/models/entities/note-edit.js";

const cache = new Cache<Emoji | null>("populateEmojis", 60 * 60 * 12);

/**
 * 添付用絵文字情報
 */
export type PopulatedEmoji = {
	name: string;
	url: string;
	width: number | null;
	height: number | null;
};

function normalizeHost(
	src: string | undefined,
	noteUserHost: string | null,
): string | null {
	// クエリに使うホスト
	const host =
		src === "."
			? null // .はローカルホスト (ここがマッチするのはリアクションのみ)
			: src === undefined
				? noteUserHost // ノートなどでホスト省略表記の場合はローカルホスト (ここがリアクションにマッチすることはない)
				: isSelfHost(src)
					? null // 自ホスト指定
					: src || noteUserHost; // 指定されたホスト || ノートなどの所有者のホスト (こっちがリアクションにマッチすることはない)

	return host == null ? null : toPuny(host);
}

function parseEmojiStr(emojiName: string, noteUserHost: string | null) {
	const match = emojiName.match(/^(\w+)(?:@([\w.-]+))?$/);
	if (!match) return { name: null, host: null };

	const name = match[1];
	return { name, host: normalizeHost(match[2], noteUserHost) };
}

/**
 * 添付用絵文字情報を解決する
 * @param emojiName ノートやユーザープロフィールに添付された、またはリアクションのカスタム絵文字名 (:は含めない, リアクションでローカルホストの場合は@.を付ける (これはdecodeReactionで可能))
 * @param noteUserHost ノートやユーザープロフィールの所有者のホスト
 * @returns 絵文字情報, nullは未マッチを意味する
 */
export async function populateEmoji(
	emojiName: string,
	noteUserHost: string | null,
): Promise<PopulatedEmoji | null> {
	const { name, host } = parseEmojiStr(emojiName, noteUserHost);
	if (name == null) return null;

	const queryOrNull = async () =>
		(await Emojis.findOneBy({
			name,
			host: host ?? IsNull(),
		})) || null;

	const cacheKey = `${name} ${host}`;
	let emoji = await cache.fetch(cacheKey, queryOrNull);

	if (emoji && !(emoji.width && emoji.height)) {
		emoji = await queryOrNull();
		await cache.set(cacheKey, emoji);
	}

	if (emoji == null) return null;

	const isLocal = emoji.host == null;
	const emojiUrl = emoji.publicUrl || emoji.originalUrl; // || emoji.originalUrl してるのは後方互換性のため
	const url = isLocal
		? emojiUrl
		: `${config.url}/proxy/${encodeURIComponent(
				new URL(emojiUrl).pathname,
			)}?${query({ url: emojiUrl })}`;

	return {
		name: emojiName,
		url,
		width: emoji.width,
		height: emoji.height,
	};
}

/**
 * 複数の添付用絵文字情報を解決する (キャシュ付き, 存在しないものは結果から除外される)
 */
export async function populateEmojis(
	emojiNames: string[],
	noteUserHost: string | null,
): Promise<PopulatedEmoji[]> {
	const emojis = await Promise.all(
		emojiNames.map((x) => populateEmoji(x, noteUserHost)),
	);
	return emojis.filter((x): x is PopulatedEmoji => x != null);
}

export function aggregateNoteEditEmojis(
	noteEdits: NoteEdit[],
	sourceHost: string | null,
) {
	let emojis: string[] = [];
	for (const noteEdit of noteEdits) {
		emojis = emojis.concat(noteEdit.emojis);
	}
	emojis = Array.from(new Set(emojis));
	return emojis
		.map((e) => parseEmojiStr(e, sourceHost))
		.filter((x) => x.name != null) as {
		name: string;
		host: string | null;
	}[];
}

export function aggregateNoteEmojis(notes: Note[]) {
	let emojis: { name: string | null; host: string | null }[] = [];
	for (const note of notes) {
		emojis = emojis.concat(
			note.emojis.map((e) => parseEmojiStr(e, note.userHost)),
		);
		if (note.renote) {
			emojis = emojis.concat(
				note.renote.emojis.map((e) => parseEmojiStr(e, note.renote!.userHost)),
			);
			if (note.renote.user) {
				emojis = emojis.concat(
					note.renote.user.emojis.map((e) =>
						parseEmojiStr(e, note.renote!.userHost),
					),
				);
			}
		}
		const customReactions = Object.keys(note.reactions)
			.map((x) => decodeReaction(x))
			.filter((x) => x.name != null) as typeof emojis;
		emojis = emojis.concat(customReactions);
		if (note.user) {
			emojis = emojis.concat(
				note.user.emojis.map((e) => parseEmojiStr(e, note.userHost)),
			);
		}
	}
	return emojis.filter((x) => x.name != null) as {
		name: string;
		host: string | null;
	}[];
}

/**
 * Get the given list of emojis from the database and adds them to the cache
 */
export async function prefetchEmojis(
	emojis: { name: string; host: string | null }[],
): Promise<void> {
	const notCachedEmojis = emojis.filter(
		async (emoji) => !(await cache.get(`${emoji.name} ${emoji.host}`)),
	);
	const emojisQuery: any[] = [];
	const hosts = new Set(notCachedEmojis.map((e) => e.host));
	for (const host of hosts) {
		emojisQuery.push({
			name: In(
				notCachedEmojis.filter((e) => e.host === host).map((e) => e.name),
			),
			host: host ?? IsNull(),
		});
	}
	const _emojis =
		emojisQuery.length > 0
			? await Emojis.find({
					where: emojisQuery,
					select: ["name", "host", "originalUrl", "publicUrl"],
				})
			: [];
	const trans = redisClient.multi();
	for (const emoji of _emojis) {
		cache.set(`${emoji.name} ${emoji.host}`, emoji, trans);
	}
	await trans.exec();
}