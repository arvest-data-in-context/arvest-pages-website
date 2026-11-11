// Where the site lives and what it is called, for search engines and link previews
// (Seo.svelte, sitemap.xml). arvest.app is the gh-pages branch's CNAME.
export { supported_langs } from '$lib/scripts/stores.js';

export const SITE_URL = "https://arvest.app";
export const SITE_NAME = "Arvest";
export const DEFAULT_IMAGE = "og-image.png";   // 1200×630, in static/

// The site and who makes it: on the home page.
export const SITE_JSONLD = [
    {
        "@type": "WebSite",
        "@id": SITE_URL + "/#website",
        url: SITE_URL + "/",
        name: SITE_NAME,
        alternateName: "Arvest — Data in Context",
        inLanguage: ["en", "fr"],
        publisher: { "@id": SITE_URL + "/#organization" },
    },
    {
        "@type": "Organization",
        "@id": SITE_URL + "/#organization",
        name: SITE_NAME,
        url: SITE_URL + "/",
        logo: SITE_URL + "/favicon.png",
        sameAs: ["https://github.com/ARVEST-APP", "https://stage-to-data.huma-num.fr/"],
    },
    {
        "@type": "WebApplication",
        name: SITE_NAME,
        url: "https://workspace.arvest.app/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any (web browser)",
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        publisher: { "@id": SITE_URL + "/#organization" },
    },
];
