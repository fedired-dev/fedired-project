export const notificationTypes = [
	"follow",
	"mention",
	"reply",
	"renote",
	"quote",
	"reaction",
	"pollVote",
	"pollEnded",
	"receiveFollowRequest",
	"followRequestAccepted",
	"groupInvited",
	"app",
] as const;

export const noteVisibilities = [
	"public",
	"home",
	"followers",
	"specified",
] as const;

export const mutedNoteReasons = ["word", "manual", "spam", "other"] as const;

export const ffVisibility = ["public", "followers", "private"] as const;

export const permissions = [
	"read:account",
	"write:account",
	"read:blocks",
	"write:blocks",
	"read:drive",
	"write:drive",
	"read:favorites",
	"write:favorites",
	"read:following",
	"write:following",
	"read:messaging",
	"write:messaging",
	"read:mutes",
	"write:mutes",
	"write:notes",
	"read:notifications",
	"write:notifications",
	"read:reactions",
	"write:reactions",
	"write:votes",
	"read:pages",
	"write:pages",
	"write:page-likes",
	"read:page-likes",
	"read:user-groups",
	"write:user-groups",
	"read:channels",
	"write:channels",
	"read:gallery",
	"write:gallery",
	"read:gallery-likes",
	"write:gallery-likes",
];

export const languages = [
	"ach",
	"ady",
	"af",
	"ak",
	"ar",
	"az",
	"bg",
	"bn",
	"br",
	"ca",
	"cak",
	"cs",
	"cy",
	"da",
	"de",
	"dsb",
	"el",
	"en",
	"eo",
	"es",
	"et",
	"eu",
	"fa",
	"ff",
	"fi",
	"fo",
	"fr",
	"ga",
	"gd",
	"gl",
	"gv",
	"he",
	"hi",
	"hr",
	"hsb",
	"ht",
	"hu",
	"hy",
	"id",
	"is",
	"it",
	"ja",
	"km",
	"kl",
	"kab",
	"kn",
	"ko",
	"kw",
	"la",
	"lb",
	"lt",
	"lv",
	"mai",
	"mk",
	"ml",
	"mr",
	"ms",
	"mt",
	"my",
	"no",
	"nb",
	"ne",
	"nl",
	"oc",
	"pa",
	"pl",
	"pt",
	"ro",
	"ru",
	"sh",
	"sk",
	"sl",
	"sq",
	"sr",
	"su",
	"sv",
	"sw",
	"ta",
	"te",
	"tg",
	"th",
	"fil",
	"tlh",
	"tr",
	"uk",
	"ur",
	"uz",
	"vi",
	"yi",
	"zh",
] as const;

export const instanceSortParam = [
	"+pubSub",
	"-pubSub",
	"+notes",
	"-notes",
	"+users",
	"-users",
	"+following",
	"-following",
	"+followers",
	"-followers",
	"+caughtAt",
	"-caughtAt",
	"+lastCommunicatedAt",
	"-lastCommunicatedAt",
	"+driveUsage",
	"-driveUsage",
	"+driveFiles",
	"-driveFiles",
] as const;