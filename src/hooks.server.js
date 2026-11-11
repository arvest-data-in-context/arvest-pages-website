// The page's language on <html lang> (app.html "%lang%"), so search engines and screen
// readers read /fr pages as French. Runs when the pages are prerendered.
import { supported_langs } from '$lib/scripts/stores.js';

export async function handle({ event, resolve }) {
    const lang = supported_langs.includes(event.params?.lang) ? event.params.lang : 'en';
    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', lang)
    });
}
