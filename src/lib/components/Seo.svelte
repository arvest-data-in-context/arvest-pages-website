<script>
    // What search engines and link previews read about a page: its title and description,
    // its one address (canonical), the same page in the other languages (hreflang),
    // Open Graph / Twitter cards, and structured data (JSON-LD).
    // Addresses are absolute and built from the route, never from `base` (relative once built).
    import { page } from '$app/stores';
    import { SITE_URL, SITE_NAME, DEFAULT_IMAGE, supported_langs } from '$lib/scripts/seo.js';

    export let title = "";              // the page's own title; " | Arvest" is added
    export let full_title = "";         // or the whole title, as is (the home page)
    export let description = "";
    export let image = DEFAULT_IMAGE;   // a path in static/, or an absolute URL
    export let image_alt = "";
    export let type = "website";        // website or article
    export let published = "";          // articles: YYYY-MM-DD
    export let author = "";
    export let langs = supported_langs; // languages this page exists in (an article may be English only)
    export let content_lang = "";       // the language of what is shown, when not the page's
    export let jsonld = null;           // extra structured data (object or array)
    export let noindex = false;

    // "/[lang]/community/news/[slug]" + params → "/community/news/arvest-launch"
    $: rest = ($page.route.id || "")
        .replace(/^\/\[lang\]/, "")
        .replace(/\[(\w+)\]/g, (_, k) => $page.params[k] ?? "");
    $: lang = $page.params.lang || "en";
    $: shown_lang = content_lang || lang;
    // Shown in a language this page does not have (an English article under /fr):
    // the canonical address is that language's page.
    $: canonical_lang = langs.includes(lang) ? lang : (langs.includes(shown_lang) ? shown_lang : langs[0]);
    $: canonical = SITE_URL + "/" + canonical_lang + rest;
    $: abs_image = /^https?:/.test(image) ? image : SITE_URL + "/" + image.replace(/^\//, "");
    $: page_title = full_title || (title ? `${title} | ${SITE_NAME}` : SITE_NAME);
    $: clean_description = (description || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().slice(0, 300);
    $: og_locale = { en: "en_GB", fr: "fr_FR" };

    $: graph = [
        {
            "@type": type === "article" ? "Article" : "WebPage",
            "@id": canonical,
            url: canonical,
            name: title || full_title,
            ...(type === "article" ? { headline: title } : {}),
            description: clean_description || undefined,
            inLanguage: shown_lang,
            image: abs_image,
            isPartOf: { "@id": SITE_URL + "/#website" },
            ...(published ? { datePublished: published } : {}),
            ...(author ? { author: { "@type": "Person", name: author } } : {}),
            ...(type === "article" ? { publisher: { "@id": SITE_URL + "/#organization" } } : {}),
        },
        ...(jsonld ? (Array.isArray(jsonld) ? jsonld : [jsonld]) : []),
    ];

    // JSON inside <script>: "<" escaped so text can never close the tag.
    $: ld_script = '<script type="application/ld+json">' +
        JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") +
        "</" + "script>";
</script>

<svelte:head>
    <title>{page_title}</title>
    {#if clean_description}<meta name="description" content={clean_description} />{/if}
    {#if noindex}
        <meta name="robots" content="noindex, follow" />
    {:else}
        <meta name="robots" content="index, follow, max-image-preview:large" />
    {/if}
    <link rel="canonical" href={canonical} />

    {#if langs.length > 1}
        {#each langs as l}
            <link rel="alternate" hreflang={l} href={SITE_URL + "/" + l + rest} />
        {/each}
        <link rel="alternate" hreflang="x-default" href={SITE_URL + "/" + (langs.includes("en") ? "en" : langs[0]) + rest} />
    {/if}

    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title || full_title || SITE_NAME} />
    {#if clean_description}<meta property="og:description" content={clean_description} />{/if}
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={abs_image} />
    {#if image_alt}<meta property="og:image:alt" content={image_alt} />{/if}
    <meta property="og:locale" content={og_locale[shown_lang] || "en_GB"} />
    {#each langs.filter(l => l !== shown_lang) as l}
        <meta property="og:locale:alternate" content={og_locale[l]} />
    {/each}
    {#if type === "article" && published}<meta property="article:published_time" content={published} />{/if}
    {#if type === "article" && author}<meta property="article:author" content={author} />{/if}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title || full_title || SITE_NAME} />
    {#if clean_description}<meta name="twitter:description" content={clean_description} />{/if}
    <meta name="twitter:image" content={abs_image} />

    {@html ld_script}
</svelte:head>
