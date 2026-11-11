<script>
    import Seo from '$lib/components/Seo.svelte';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import InfraDiagram from '$lib/components/infrastructure/InfraDiagram.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import { INTRO, DIAGRAM_ALT, PARTS, UI } from '$lib/data/infrastructure.js';
    let langVal;
    lang.subscribe(value => {
        langVal = value;
    });

    $: href = (link) => (link.internal ? `${base}/${langVal}${link.url}` : link.url);
</script>

<Seo
    title={BCVocab.about_arvest[langVal]}
    description={UI.description[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal] },
        { text: BCVocab.about_arvest[langVal], href: base + "/" + langVal + "/about/infrastructure"}
    ]}
/>

<header class="page_head">
    <h1>{BCVocab.about_arvest[langVal]}</h1>
    <p class="lede">{INTRO[langVal]}</p>
</header>

<figure class="overview">
    <InfraDiagram id="overview" label={DIAGRAM_ALT[langVal]} />
    <figcaption>
        <ol class="legend">
            {#each PARTS as p, i}
                <li><a href="#{p.part}"><span class="dot">{i + 1}</span>{p.title[langVal]}</a></li>
            {/each}
        </ol>
    </figcaption>
</figure>

{#each PARTS as p, i}
    <section class="part" class:flip={i % 2 === 1} id={p.part}>
        <div class="text">
            <span class="eyebrow"><span class="dot">{i + 1}</span></span>
            <h2>{p.title[langVal]}</h2>
            <p>{p.text[langVal]}</p>
            {#if p.links.length}
                <ul class="links">
                    {#each p.links as link}
                        <li>
                            <a href={href(link)} target={link.internal ? undefined : "_blank"} rel={link.internal ? undefined : "noopener"}>
                                {link.label[langVal]}{#if !link.internal}<span aria-hidden="true"> ↗</span>{/if}
                            </a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
        <InfraDiagram id={p.part} focus={p.part} label={p.title[langVal]} />
    </section>
{/each}

<aside class="card source">
    <p>{UI.source[langVal]}</p>
    <BigButton label="GitHub ↗" url="https://github.com/ARVEST-APP" kind="primary" />
</aside>

<style>
    .overview {
        margin: 0 0 clamp(2rem, 5vw, 3rem);
    }

    .overview :global(.demo) {
        max-width: 960px;
        margin-inline: auto;
    }

    .legend {
        list-style: none;
        margin: 1.1rem auto 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        max-width: 960px;
    }

    .legend a {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.3rem 0.85rem 0.3rem 0.35rem;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: #fff;
        font-size: 0.9rem;
        color: var(--primary-text);
        text-decoration: none;
    }

    .legend a:hover {
        border-color: var(--primary);
        color: var(--primary);
    }

    .dot {
        display: inline-grid;
        place-items: center;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: 1.5px solid var(--primary);
        color: var(--primary);
        font-family: var(--font-button);
        font-size: 0.85rem;
        line-height: 1;
    }

    .part {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
        gap: clamp(1.5rem, 4vw, 3.5rem);
        align-items: center;
        padding: clamp(2rem, 5vw, 3rem) 0;
        border-top: 1px solid var(--line-soft);
        scroll-margin-top: calc(var(--nav-h) + 1rem);
    }

    .flip {
        grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
    }

    .flip .text {
        order: 2;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.7rem;
    }

    .text .dot {
        background: var(--primary);
        color: #fff;
    }

    h2 {
        font-size: clamp(1.6rem, 1.3rem + 1.2vw, 2.2rem);
    }

    .text p {
        color: var(--secondary-text);
        line-height: 1.6;
    }

    .links {
        list-style: none;
        margin: 0.2rem 0 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .links a {
        display: inline-block;
        padding: 0.3rem 0.85rem;
        border: 1.5px solid var(--primary-text);
        border-radius: 999px;
        font-family: var(--font-button);
        font-size: 0.85rem;
        color: var(--primary-text);
        text-decoration: none;
        background: #fff;
    }

    .links a:hover {
        border-color: var(--primary);
        color: var(--primary);
    }

    .source {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.25rem 1.5rem;
        margin-top: 1rem;
    }

    .source p {
        font-family: var(--font-display);
        font-size: 1.4rem;
    }

    @media (max-width: 860px) {
        .part,
        .flip {
            grid-template-columns: minmax(0, 1fr);
            gap: 1.25rem;
        }
        .flip .text {
            order: 0;
        }
    }
</style>
