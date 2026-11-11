<script>
    import Seo from '$lib/components/Seo.svelte';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import CodeBox from '$lib/components/general_ui/CodeBox.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import { INTRO, LINKS, SECTIONS, UI, PACKAGE_EXAMPLES_URL } from '$lib/data/api_docs.js';

    let langVal;
    lang.subscribe(value => {
        langVal = value;
    });
</script>

<Seo
    title={BCVocab.reference[langVal]}
    description={UI.description[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.api[langVal] },
        { text: BCVocab.reference[langVal], href: base + "/" + langVal + "/api/documentation"}
    ]}
/>

<header class="page_head">
    <h1>{BCVocab.reference[langVal]}</h1>
    <p class="lede">{INTRO[langVal]}</p>
</header>

<div class="links">
    {#each LINKS as link}
        <a class="card link_card" href={link.href} target="_blank" rel="noopener">
            <span class="link_title">{link.title[langVal]} <span aria-hidden="true">↗</span></span>
            <span class="link_text">{link.text[langVal]}</span>
        </a>
    {/each}
</div>

<div class="docs">
    <nav class="toc" aria-label={UI.on_this_page[langVal]}>
        <span class="eyebrow">{UI.on_this_page[langVal]}</span>
        <ol>
            {#each SECTIONS as s}
                <li><a href="#{s.id}">{s.title[langVal]}</a></li>
            {/each}
        </ol>
    </nav>

    <div class="sections">
        {#each SECTIONS as s, i}
            <section id={s.id}>
                <h2><span class="num">{String(i + 1).padStart(2, "0")}</span> {s.title[langVal]}</h2>
                <p>{s.text[langVal]}</p>
                <CodeBox code={s.code} filename={s.filename || ""} language={s.language} wrap={false} />
                {#if s.extra}
                    <CodeBox code={s.extra.code} filename={s.extra.filename} language={s.extra.language} wrap={false} />
                {/if}
            </section>
        {/each}

        <p class="more">
            <a href={PACKAGE_EXAMPLES_URL} target="_blank" rel="noopener">{UI.more_examples[langVal]} ↗</a>
        </p>
    </div>
</div>

<style>
    .links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
        gap: 1.25rem;
        margin-bottom: clamp(2rem, 5vw, 3rem);
    }

    .link_card {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        padding: 1.1rem 1.25rem;
        text-decoration: none;
        color: var(--primary-text);
    }

    .link_title {
        font-family: var(--font-display);
        font-size: 1.3rem;
        color: var(--primary);
    }

    .link_text {
        font-size: 0.9rem;
        line-height: 1.5;
        color: var(--secondary-text);
    }

    .docs {
        display: grid;
        grid-template-columns: 13rem minmax(0, 1fr);
        gap: clamp(1.5rem, 4vw, 3rem);
        align-items: start;
    }

    .toc {
        position: sticky;
        top: calc(var(--nav-h) + 1.25rem);
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .toc .eyebrow {
        color: var(--primary);
    }

    .toc ol {
        list-style: none;
        margin: 0;
        padding: 0 0 0 0.9rem;
        border-left: 1.5px solid var(--line-soft);
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
    }

    .toc a {
        font-size: 0.9rem;
        color: var(--secondary-text);
        text-decoration: none;
    }

    .toc a:hover {
        color: var(--primary);
    }

    .sections {
        max-width: 52rem;
    }

    section {
        scroll-margin-top: calc(var(--nav-h) + 1rem);
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid var(--line-soft);
    }

    section > :global(* + *) {
        margin-top: 0.9rem;
    }

    h2 {
        font-size: clamp(1.5rem, 1.25rem + 1vw, 2rem);
    }

    .num {
        font-family: var(--font-ui);
        font-size: 0.9rem;
        color: var(--primary);
        vertical-align: middle;
        margin-right: 0.35rem;
    }

    section p {
        line-height: 1.6;
        max-width: var(--read-max);
    }

    .more a {
        font-family: var(--font-button);
        color: var(--primary);
    }

    @media (max-width: 860px) {
        .docs {
            grid-template-columns: minmax(0, 1fr);
        }
        .toc {
            position: static;
        }
        .toc ol {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.4rem 1rem;
            border-left: none;
            padding: 0;
        }
    }
</style>
