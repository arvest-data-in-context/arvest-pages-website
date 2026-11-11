<script>
    // One article (news, project or tutorial). The head: its kind, title, summary, author,
    // date and tags beside its picture, shown whole (never cropped). Then the text in a
    // reading column, and a way back to the list.
    import { base } from '$app/paths';
    import { lang } from '$lib/scripts/stores.js';
    import Seo from '$lib/components/Seo.svelte';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import BCVocab from '$lib/data/vocab/footer.json';
    import ArticleVocab from '$lib/data/vocab/articles.json';

    export let data;
    export let section = "community";   // community or learn
    export let type = "news";           // news, projects or tutorials

    let langVal;
    lang.subscribe(value => { langVal = value; });

    $: meta = data.article.metadata;
    $: list_href = `${base}/${langVal}/${section}/${type}`;
    $: date_text = meta.date
        ? new Date(meta.date + "T12:00:00").toLocaleDateString(langVal === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric" })
        : "";
</script>

<Seo
    title={meta.title}
    description={meta.description}
    image={meta.image}
    image_alt={meta.title}
    type="article"
    published={meta.date}
    author={meta.author}
    langs={data.langs}
    content_lang={data.content_lang}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab[section][langVal] },
        { text: BCVocab[type][langVal], href: list_href },
        { text: meta.title, href: list_href + "/" + data.this_slug }
    ]}
/>

<article class="article" lang={data.content_lang}>
    <header class="head" class:no_image={!meta.image}>
        {#if meta.image}
            <figure class="head_image framed">
                <img src="{base}/{meta.image}" alt="" width="1600" height="900">
            </figure>
        {/if}
        <div class="head_box card">
            <span class="eyebrow">{BCVocab[type][langVal]}</span>
            <h1>{meta.title}</h1>
            {#if meta.description}<p class="lede">{meta.description}</p>{/if}
            <div class="meta">
                {#if meta.author}<span class="who">{meta.author}</span>{/if}
                {#if date_text}<time datetime={meta.date}>{date_text}</time>{/if}
            </div>
            {#if meta.tags?.length}
                <ul class="tags" aria-label={ArticleVocab.tags[langVal]}>
                    {#each meta.tags as tag}
                        <li><a class="tag" href="{list_href}?tag={encodeURIComponent(tag)}">{tag}</a></li>
                    {/each}
                </ul>
            {/if}
            {#if data.content_lang !== langVal && ArticleVocab.only_en[langVal]}
                <p class="hint">{ArticleVocab.only_en[langVal]}</p>
            {/if}
        </div>
    </header>

    <div class="body news_article_div">
        <svelte:component this={data.article.default} />
    </div>

    <footer class="article_foot">
        <a class="back" href={list_href}>← {BCVocab[type][langVal]}</a>
    </footer>
</article>

<style>
    /* the picture across the column, whole (only very tall ones are cut), and the title in
       a card laid over its lower left corner */
    .head {
        position: relative;
        margin-bottom: clamp(2rem, 5vw, 3rem);
    }

    .head_image {
        margin: 0;
        overflow: hidden;
        background: #fff;
    }

    .head_image img {
        display: block;
        width: 100%;
        height: auto;
        max-height: 70vh;
        object-fit: cover;
    }

    .head_box {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
        max-width: 42rem;
        margin: clamp(-9rem, -12vw, -3rem) 0 0 clamp(1rem, 3vw, 2.5rem);
        padding: clamp(1.1rem, 2.5vw, 1.75rem);
        background: #fff;
    }

    .no_image .head_box {
        margin: 0;
    }

    .eyebrow {
        color: var(--primary);
    }

    h1 {
        font-size: clamp(2rem, 1.5rem + 2vw, 3rem);
        line-height: 1.1;
    }

    .lede {
        margin: 0;
    }

    .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem 1rem;
        font-size: 0.9rem;
        color: var(--secondary-text);
    }

    .who {
        color: var(--primary-text);
    }

    .meta > * + *::before {
        content: "·";
        margin-right: 1rem;
        color: var(--secondary-text);
    }

    .tags {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a.tag {
        text-decoration: none;
    }

    a.tag:hover {
        background: var(--primary);
        color: #fff;
    }


    .body {
        max-width: var(--read-max);
        margin-inline: auto;
    }

    /* videos and embedded projects take the whole reading column */
    .body :global(.widget_cont) {
        width: 100% !important;
    }

    .article_foot {
        max-width: var(--read-max);
        margin: 2.5rem auto 0;
        padding-top: 1.25rem;
        border-top: 1px solid var(--line-soft);
    }

    .back {
        font-family: var(--font-button);
        color: var(--primary);
        text-decoration: none;
    }

    .back:hover {
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        .head_box {
            margin: -2rem 0.6rem 0;
        }
    }
</style>
