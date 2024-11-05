export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DaIBh4CH.js","app":"_app/immutable/entry/app.3K8MbUB1.js","imports":["_app/immutable/entry/start.DaIBh4CH.js","_app/immutable/chunks/entry.CiLKkIKU.js","_app/immutable/chunks/runtime.D1HThq0M.js","_app/immutable/entry/app.3K8MbUB1.js","_app/immutable/chunks/runtime.D1HThq0M.js","_app/immutable/chunks/store.UD6u4FFb.js","_app/immutable/chunks/disclose-version.CUGJFhAs.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
