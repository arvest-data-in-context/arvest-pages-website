export const prerender = true;

import { supported_langs } from '$lib/scripts/stores.js';

// const slugs = ["article_1", "article_2", "article_3"]
const modules = import.meta.glob('../../../../../content/tutorials/*/*.svx');

// Get unique slugs based on folder names in the `content/news` directory
function getSlugs() {
    const slugs = new Set();

    for (const path in modules) {
        const match = path.match(/\/tutorials\/([^\/]+)\/[^\/]+\.svx$/);
        if (match) {
            slugs.add(match[1]); // Add only the folder name as slug
        }
    }

    return Array.from(slugs);
}

export async function entries() {
    const slugs = getSlugs();
    const paths = [];

    for (const slug of slugs) {
        for (const lang of supported_langs) {
            paths.push({ slug, lang });
        }
    }

    return paths;
}

export async function load({ params }) {
    const { slug, lang } = params;
    
    try{
        const article = await import(`../../../../../content/tutorials/${slug}/${lang}.svx`);
        const this_slug = slug;
        return { article, this_slug };
    }catch(error){
        try{
            const article = await import(`../../../../../content/tutorials/${slug}/en.svx`);
            const this_slug = slug;
            return { article, this_slug };
        }catch(error){
            console.log(error)
        }
    }
}