export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","icon/contract.svg","icon/giveaway.svg","icon/tournament.svg","icon/upgrade.svg","icon/users.svg","img/logo.svg","img/steam.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.M2GxbAGG.js",app:"_app/immutable/entry/app.RSl-3LNS.js",imports:["_app/immutable/entry/start.M2GxbAGG.js","_app/immutable/chunks/DiKGQlZ2.js","_app/immutable/chunks/rtMzFTh2.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/entry/app.RSl-3LNS.js","_app/immutable/chunks/rtMzFTh2.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/B-lTs2j3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
