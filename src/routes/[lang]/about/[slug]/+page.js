export const prerender = true;

import { supported_langs } from '$lib/scripts/stores.js';

const slugs = ["page_1", "page_2"]

export async function entries() {
    const paths = [];

    for (const slug of slugs) {
        for (const lang of supported_langs) {
            paths.push({ slug, lang });
        }
    }

    return paths;
}