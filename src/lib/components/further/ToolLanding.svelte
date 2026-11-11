<script>
    // A tool's landing page (Going further): its name and what it is for, Download (coming
    // soon) and its code, its features as animated demos (like Arvest's home page), how it
    // works with Arvest, and its tutorial video at the bottom.
    import { base } from '$app/paths';
    import { lang } from '$lib/scripts/stores.js';
    import Seo from '$lib/components/Seo.svelte';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import FeatureCard from '$lib/components/front_page/FeatureCard.svelte';
    import Youtube from '$lib/components/articles/Youtube.svelte';
    import BCVocab from '$lib/data/vocab/footer.json';
    import { UI } from '$lib/data/tools.js';

    import ExtCollect from './demos/ExtCollect.svelte';
    import ExtSnapshot from './demos/ExtSnapshot.svelte';
    import ExtSite from './demos/ExtSite.svelte';
    import MmmRead from './demos/MmmRead.svelte';
    import MmmConnector from './demos/MmmConnector.svelte';
    import MmmGraph from './demos/MmmGraph.svelte';
    import LapaSource from './demos/LapaSource.svelte';
    import LapaGraph from './demos/LapaGraph.svelte';
    import LapaExport from './demos/LapaExport.svelte';

    const DEMOS = { ExtCollect, ExtSnapshot, ExtSite, MmmRead, MmmConnector, MmmGraph, LapaSource, LapaGraph, LapaExport };

    export let tool;

    let langVal;
    lang.subscribe(value => { langVal = value; });
</script>

<Seo
    title={tool.name[langVal] + " · " + tool.tagline[langVal]}
    description={tool.intro[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.further[langVal] },
        { text: BCVocab[tool.key][langVal], href: base + "/" + langVal + tool.path }
    ]}
/>

<header class="hero">
    <span class="eyebrow">{BCVocab.further[langVal]}</span>
    <h1>{tool.name[langVal]}</h1>
    <p class="tagline">{tool.tagline[langVal]}</p>
    <p class="intro">{tool.intro[langVal]}</p>
    <ul class="tags badges">
        {#each tool.badges as b}<li class="tag">{b[langVal]}</li>{/each}
    </ul>
    <div class="actions">
        <span class="download" aria-disabled="true">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v8M4.5 6.5L8 10l3.5-3.5M3 13h10" /></svg>
            {UI.download[langVal]}
            <span class="soon">{UI.coming_soon[langVal]}</span>
        </span>
        <BigButton label={UI.github[langVal] + " ↗"} url={tool.github} kind="quiet" />
    </div>
    <p class="hint">{tool.key === "extension" ? UI.releases_ext[langVal] : UI.releases[langVal]}</p>
</header>

<div class="features">
    {#each tool.features as f, i}
        <FeatureCard
            title={f.title[langVal]}
            description={f.text[langVal]}
            demo={DEMOS[f.demo]}
            image_alt={tool.name[langVal] + ": " + f.title[langVal]}
            button_label=""
            number={i + 1}
            flip={i % 2 === 1}
        />
    {/each}
</div>

<aside class="card with_arvest">
    <span class="eyebrow">{UI.with_arvest[langVal]}</span>
    <p>{tool.with_arvest[langVal]}</p>
    <BigButton label={UI.see_ecosystem[langVal] + " →"} url="{base}/{langVal}/ecosystem" kind="primary" />
</aside>

<section class="tutorial" aria-labelledby="tutorial_title">
    <h2 id="tutorial_title">{UI.tutorial[langVal]}</h2>
    {#if tool.video}
        <Youtube youtube_src={tool.video} width="100%" title={UI.tutorial[langVal] + " · " + tool.name[langVal]} />
    {:else}
        <div class="video_soon framed">
            <svg viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="30" />
                <path d="M26 21v22l18-11z" />
            </svg>
            <p>{UI.video_soon[langVal]}</p>
        </div>
    {/if}
</section>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
        max-width: 50rem;
        padding: clamp(0.5rem, 2vw, 1.5rem) 0 clamp(1.5rem, 4vw, 2.5rem);
    }

    .eyebrow {
        color: var(--primary);
    }

    h1 {
        font-size: clamp(2.6rem, 1.8rem + 3.2vw, 4.5rem);
        line-height: 1.02;
    }

    .tagline {
        font-family: var(--font-display);
        font-size: clamp(1.4rem, 1.1rem + 1.2vw, 2rem);
        line-height: 1.2;
        color: var(--primary);
    }

    .intro {
        color: var(--secondary-text);
        line-height: 1.6;
        max-width: var(--read-max);
    }

    .badges {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.75rem;
        margin-top: 0.4rem;
    }

    .download {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.6em 0.75em 0.6em 1.2em;
        border-radius: 999px;
        background: var(--primary);
        color: var(--on-primary);
        font-family: var(--font-ui-regular);
        font-size: 1rem;
        opacity: 0.55;
        cursor: not-allowed;
    }

    .download svg {
        width: 1em;
        height: 1em;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .soon {
        padding: 0.15em 0.6em;
        border-radius: 999px;
        background: #fff;
        color: var(--primary);
        font-size: 0.8rem;
    }

    .with_arvest {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
        margin: clamp(1.5rem, 4vw, 2.5rem) 0;
        padding: clamp(1.1rem, 2.5vw, 1.75rem);
        border-left: 6px solid var(--primary);
    }

    .with_arvest p {
        max-width: var(--read-max);
        line-height: 1.6;
    }

    .tutorial {
        padding-top: clamp(1.5rem, 4vw, 2.5rem);
        border-top: 1px solid var(--line-soft);
    }

    .tutorial h2 {
        font-size: clamp(1.6rem, 1.3rem + 1.2vw, 2.2rem);
        margin-bottom: 1rem;
    }

    .video_soon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        aspect-ratio: 16 / 9;
        max-width: 960px;
        background: var(--dot-grid);
        background-image: radial-gradient(rgba(128, 0, 128, 0.14) 1px, transparent 1px);
        background-size: 18px 18px;
        text-align: center;
        padding: 1rem;
    }

    .video_soon svg {
        width: clamp(3rem, 8vw, 4.5rem);
        height: auto;
    }

    .video_soon circle {
        fill: #fff;
        stroke: var(--primary);
        stroke-width: 2;
    }

    .video_soon path {
        fill: var(--primary);
    }

    .video_soon p {
        color: var(--secondary-text);
    }
</style>
