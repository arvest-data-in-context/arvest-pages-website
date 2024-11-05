export const prerender = true;

import PageVocab from '$lib/data/vocab/vocab.json';

export async function load({ params }) {
    const { lang } = params;

    const this_slug = lang;

    const vocab = PageVocab[lang]["title"];

    return { this_slug, vocab }
}