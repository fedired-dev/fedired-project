// NIRAX --- A lightweight router

import { EventEmitter } from "eventemitter3";
import type { Component } from "vue";
import { shallowRef } from "vue";
import { safeURIDecode } from "@/scripts/safe-uri-decode";
import { pleaseLogin } from "@/scripts/please-login";

export interface RouteDef {
	path: string;
	component: Component;
	query?: Record<string, string>;
	loginRequired?: boolean;
	name?: string;
	hash?: string;
	globalCacheKey?: string;
	children?: RouteDef[];
}

type ParsedPath = (
	| string
	| {
			name: string;
			startsWith?: string;
			wildcard?: boolean;
			optional?: boolean;
	  }
)[];

export interface Resolved {
	route: RouteDef;
	props: Map<string, string>;
	child?: Resolved;
}

function parsePath(path: string): ParsedPath {
	const res = [] as ParsedPath;

	// biome-ignore lint/style/noParameterAssign: assign it intentionally
	path = path.substring(1);

	for (const part of path.split("/")) {
		if (part.includes(":")) {
			const prefix = part.substring(0, part.indexOf(":"));
			const placeholder = part.substring(part.indexOf(":") + 1);
			const wildcard = placeholder.includes("(*)");
			const optional = placeholder.endsWith("?");
			res.push({
				name: placeholder.replace("(*)", "").replace("?", ""),
				startsWith: prefix !== "" ? prefix : undefined,
				wildcard,
				optional,
			});
		} else if (part.length !== 0) {
			res.push(part);
		}
	}

	return res;
}

export class Router extends EventEmitter<{
	change: (ctx: {
		beforePath: string;
		path: string;
		resolved: Resolved;
		key: string;
	}) => void;
	replace: (ctx: { path: string; key: string }) => void;
	push: (ctx: {
		beforePath: string;
		path: string;
		route: RouteDef | null;
		props: Map<string, string> | null;
		key: string;
	}) => void;
	same: () => void;
}> {
	private routes: RouteDef[];
	public current!: Resolved; // It is assigned in this.navigate
	public currentRef = shallowRef<Resolved>();
	public currentRoute = shallowRef<RouteDef>();
	private currentPath: string;
	private currentKey = Date.now().toString();

	public navHook: ((path: string, flag?: unknown) => boolean) | null = null;

	constructor(routes: Router["routes"], currentPath: Router["currentPath"]) {
		super();

		this.routes = routes;
		this.currentPath = currentPath;
		this.navigate(currentPath, null, false);
	}

	public resolve(_path: string): Resolved | null {
		let queryString: string | null = null;
		let hash: string | null = null;
		let path = _path;
		if (path[0] === "/") path = path.substring(1);
		if (path.includes("#")) {
			hash = path.substring(path.indexOf("#") + 1);
			path = path.substring(0, path.indexOf("#"));
		}
		if (path.includes("?")) {
			queryString = path.substring(path.indexOf("?") + 1);
			path = path.substring(0, path.indexOf("?"));
		}

		if (_DEV_) console.log("Routing: ", path, queryString);

		function check(routes: RouteDef[], _parts: string[]): Resolved | null {
			forEachRouteLoop: for (const route of routes) {
				let parts = [..._parts];
				const props = new Map<string, string>();

				for (const p of parsePath(route.path)) {
					if (typeof p === "string") {
						if (p === parts[0]) {
							parts.shift();
						} else {
							continue forEachRouteLoop;
						}
					} else {
						if (parts[0] == null && !p.optional) {
							continue forEachRouteLoop;
						}
						if (p.wildcard) {
							if (parts.length !== 0) {
								props.set(p.name, safeURIDecode(parts.join("/")));
								parts = [];
							}
							break;
						} else {
							if (p.startsWith) {
								if (parts[0] == null || !parts[0].startsWith(p.startsWith))
									continue forEachRouteLoop;

								props.set(
									p.name,
									safeURIDecode(parts[0].substring(p.startsWith.length)),
								);
								parts.shift();
							} else {
								if (parts[0]) {
									props.set(p.name, safeURIDecode(parts[0]));
								}
								parts.shift();
							}
						}
					}
				}

				if (parts.length === 0) {
					if (route.children) {
						const child = check(route.children, []);
						if (child) {
							return {
								route,
								props,
								child,
							};
						} else {
							continue;
						}
					}

					if (route.hash != null && hash != null) {
						props.set(route.hash, safeURIDecode(hash));
					}

					if (route.query != null && queryString != null) {
						// const queryObject = [
						// 	...new URLSearchParams(queryString).entries(),
						// ].reduce((obj, entry) => ({ ...obj, [entry[0]]: entry[1] }), {});

						const queryObject: Record<string, string> = Object.assign(
							{},
							...[...new URLSearchParams(queryString).entries()].map(
								(entry) => ({ [entry[0]]: entry[1] }),
							),
						);

						for (const q in route.query) {
							const as = route.query[q];
							if (queryObject[q]) {
								props.set(as, safeURIDecode(queryObject[q]));
							}
						}
					}

					return {
						route,
						props,
					};
				} else {
					if (route.children) {
						const child = check(route.children, parts);
						if (child) {
							return {
								route,
								props,
								child,
							};
						} else {
						}
					} else {
					}
				}
			}

			return null;
		}

		const _parts = path.split("/").filter((part) => part.length !== 0);

		return check(this.routes, _parts);
	}

	private navigate(
		path: string,
		key: string | null | undefined,
		emitChange = true,
	) {
		const beforePath = this.currentPath;
		this.currentPath = path;

		const res = this.resolve(this.currentPath);

		if (res == null) {
			throw new Error(`no route found for: ${path}`);
		}

		if (res.route.loginRequired) {
			pleaseLogin("/");
		}

		const isSamePath = beforePath === path;
		// biome-ignore lint/style/noParameterAssign: assign it intentionally
		if (isSamePath && key == null) key = this.currentKey;
		this.current = res;
		this.currentRef.value = res;
		this.currentRoute.value = res.route;
		this.currentKey = res.route.globalCacheKey ?? key ?? path;

		if (emitChange) {
			this.emit("change", {
				beforePath,
				path,
				resolved: res,
				key: this.currentKey,
			});
		}

		return res;
	}

	public getCurrentPath() {
		return this.currentPath;
	}

	public getCurrentKey() {
		return this.currentKey;
	}

	public push(path: string, flag?: unknown) {
		const beforePath = this.currentPath;
		if (path === beforePath) {
			this.emit("same");
			return;
		}
		if (this.navHook) {
			const cancel = this.navHook(path, flag);
			if (cancel) return;
		}
		const res = this.navigate(path, null);
		this.emit("push", {
			beforePath,
			path,
			route: res.route,
			props: res.props,
			key: this.currentKey,
		});
	}

	public replace(path: string, key?: string | null, emitEvent = true) {
		this.navigate(path, key);
		if (emitEvent) {
			this.emit("replace", {
				path,
				key: this.currentKey,
			});
		}
	}
}