import { supported_langs } from '$lib/scripts/stores.js';

export async function entries() {
    const langs = supported_langs;
    return langs.map(lang => ({ lang }));
}