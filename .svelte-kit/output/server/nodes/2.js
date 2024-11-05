import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CuLxeAay.js","_app/immutable/chunks/disclose-version.CUGJFhAs.js","_app/immutable/chunks/runtime.D1HThq0M.js"];
export const stylesheets = [];
export const fonts = [];
