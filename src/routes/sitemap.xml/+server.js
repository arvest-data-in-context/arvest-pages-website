// sitemap.xml, written when the site is built: every page in each language, with the
// same page in the other languages (hreflang). Articles appear in the languages they
// are written in (an English-only tutorial is not listed under /fr: that page points
// search engines to the English one).
import { SITE_URL, supported_langs } from '$lib/scripts/seo.js';

export const prerender = true;

// Pages under /<lang>. Left out: the sections' own addresses (they forward to their first
// page) and the placeholders (documentation, forum), which ask not to be indexed.
const PAGES = [
    '', '/community/projects', '/community/news',
    '/learn/tutorials', '/learn/iiif',
    '/api/ml', '/api/documentation',
    '/ecosystem', '/browser-extension', '/mmm', '/lapa-editor',
    '/about/infrastructure', '/about/team', '/about/cite',
    '/about/accessibility', '/about/credits', '/about/contact'
];

const SECTIONS = {
    news: { path: '/community/news', files: import.meta.glob('/src/content/news/*/*.svx', { eager: true }) },
    projects: { path: '/community/projects', files: import.meta.glob('/src/content/projects/*/*.svx', { eager: true }) },
    tutorials: { path: '/learn/tutorials', files: import.meta.glob('/src/content/tutorials/*/*.svx', { eager: true }) }
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function entry(rest, langs, lastmod, priority) {
    const def = langs.includes('en') ? 'en' : langs[0];
    const alternates = langs.length > 1
        ? langs.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${esc(SITE_URL + '/' + l + rest)}"/>`).join('\n') +
          `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(SITE_URL + '/' + def + rest)}"/>`
        : '';
    return langs.map(l => [
        '  <url>',
        `    <loc>${esc(SITE_URL + '/' + l + rest)}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
        alternates,
        `    <priority>${priority}</priority>`,
        '  </url>'
    ].filter(Boolean).join('\n')).join('\n');
}

export function GET() {
    const urls = PAGES.map(p => entry(p, supported_langs, '', p === '' ? '1.0' : '0.7'));

    for (const { path, files } of Object.values(SECTIONS)) {
        const bySlug = {};
        for (const [file, mod] of Object.entries(files)) {
            const m = file.match(/\/([^/]+)\/([^/]+)\.svx$/);
            if (!m || !supported_langs.includes(m[2])) continue;
            (bySlug[m[1]] ||= { langs: [], date: '' }).langs.push(m[2]);
            const date = mod.metadata?.date;
            if (date && /^\d{4}-\d{2}-\d{2}$/.test(date) && date > bySlug[m[1]].date) bySlug[m[1]].date = date;
        }
        for (const [slug, { langs, date }] of Object.entries(bySlug)) {
            urls.push(entry(`${path}/${slug}`, supported_langs.filter(l => langs.includes(l)), date, '0.5'));
        }
    }

    const body = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
        urls.join('\n') + '\n</urlset>\n';

    return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
