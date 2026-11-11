export const prerender = true;

import { supported_langs } from '$lib/scripts/stores.js';

// const slugs = ["article_1", "article_2", "article_3"]
const modules = import.meta.glob('../../../../../content/news/*/*.svx');

// Get unique slugs based on folder names in the `content/news` directory
function getSlugs() {
    const slugs = new Set();

    for (const path in modules) {
        const match = path.match(/\/news\/([^\/]+)\/[^\/]+\.svx$/);
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

// The languages an article exists in (its <lang>.svx files).
function langsOf(slug) {
    const langs = [];
    for (const path in modules) {
        const m = path.match(/\/news\/([^\/]+)\/([^\/]+)\.svx$/);
        if (m && m[1] === slug) langs.push(m[2]);
    }
    return supported_langs.filter(l => langs.includes(l));
}

export async function load({ params }) {
    const { slug, lang } = params;
    
    try{
        const article = await import(`../../../../../content/news/${slug}/${lang}.svx`);
        const this_slug = slug;
        return { article, this_slug, content_lang: lang, langs: langsOf(slug) };
    }catch(error){
        try{
            const article = await import(`../../../../../content/news/${slug}/en.svx`);
            const this_slug = slug;
            return { article, this_slug, content_lang: "en", langs: langsOf(slug) };
        }catch(error){
            console.log(error)
        }
    }
}