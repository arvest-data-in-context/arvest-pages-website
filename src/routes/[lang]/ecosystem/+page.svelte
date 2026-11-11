<script>
    import Seo from '$lib/components/Seo.svelte';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import EcoDiagram from '$lib/components/further/EcoDiagram.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import { INTRO, DIAGRAM_ALT, ROWS, UI } from '$lib/data/ecosystem.js';

    let langVal;
    lang.subscribe(value => { langVal = value; });
</script>

<Seo
    title={BCVocab.ecosystem[langVal]}
    description={UI.description[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.further[langVal] },
        { text: BCVocab.ecosystem[langVal], href: base + "/" + langVal + "/ecosystem" }
    ]}
/>

<header class="page_head">
    <h1>{BCVocab.ecosystem[langVal]}</h1>
    <p class="lede">{INTRO[langVal]}</p>
</header>

<figure class="overview">
    <EcoDiagram id="overview" label={DIAGRAM_ALT[langVal]} />
    <figcaption class="key">
        <span><i class="online"></i>{UI.online[langVal]}</span>
        <span><i class="local"></i>{UI.local[langVal]}</span>
    </figcaption>
</figure>

<div class="table_wrap card">
    <table>
        <caption>{UI.table_caption[langVal]}</caption>
        <thead>
            <tr>
                <th scope="col">{UI.tool[langVal]}</th>
                <th scope="col">{UI.where[langVal]}</th>
                <th scope="col">{UI.who[langVal]}</th>
                <th scope="col">{UI.status[langVal]}</th>
            </tr>
        </thead>
        <tbody>
            {#each ROWS as r}
                <tr class:main={r.part === "arvest"}>
                    <th scope="row"><a href={r.href ? `${base}/${langVal}${r.href}` : `#${r.part}`}>{r.name[langVal]}</a></th>
                    <td>{r.where[langVal]}</td>
                    <td>{r.who[langVal]}</td>
                    <td><span class="status" class:ok={r.available}>{r.status[langVal]}</span></td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

{#each ROWS as r, i}
    <section class="tool" class:flip={i % 2 === 1} id={r.part}>
        <div class="text">
            <span class="eyebrow">{r.where[langVal]}</span>
            <h2>{r.name[langVal]}</h2>
            <p>{r.text[langVal]}</p>
            <span class="flows_title">{UI.flows[langVal]}</span>
            <ul class="flows">
                {#each r.flows[langVal] as f}<li>{f}</li>{/each}
            </ul>
            {#if r.href}
                <BigButton label={UI.discover[langVal] + " →"} url="{base}/{langVal}{r.href}" kind="quiet" />
            {:else}
                <BigButton label={UI.open_arvest[langVal] + " ↗"} url="https://workspace.arvest.app/" kind="primary" />
            {/if}
        </div>
        <EcoDiagram id={r.part} focus={r.part} label={r.name[langVal]} />
    </section>
{/each}

<style>
    .overview {
        margin: 0 0 clamp(1.5rem, 4vw, 2.5rem);
    }

    .overview :global(.demo) {
        max-width: 960px;
        margin-inline: auto;
    }

    .key {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem 1.5rem;
        margin-top: 0.9rem;
        font-size: 0.9rem;
        color: var(--secondary-text);
    }

    .key span {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .key i {
        display: inline-block;
        width: 1.6rem;
        height: 1rem;
        border-radius: 5px;
    }

    .key .online {
        border: 1.6px solid var(--secundary);
        background: #fff;
    }

    .key .local {
        border: 1.3px dashed var(--secondary-text);
        background: #fff;
    }

    .table_wrap {
        overflow-x: auto;
        margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
        padding: 0.25rem 0;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.95rem;
    }

    caption {
        text-align: left;
        padding: 0.9rem 1.25rem 0.5rem;
        font-family: var(--font-display);
        font-size: 1.3rem;
    }

    th,
    td {
        text-align: left;
        padding: 0.7rem 1.25rem;
        border-top: 1px solid var(--line-soft);
        vertical-align: top;
    }

    thead th {
        font-family: var(--font-ui);
        font-size: 0.8rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--secondary-text);
        font-weight: normal;
    }

    tbody th a {
        font-family: var(--font-button);
        color: var(--primary);
    }

    tr.main {
        background: var(--primary-tint);
    }

    .status {
        display: inline-block;
        padding: 0.15em 0.7em;
        border-radius: 999px;
        border: 1px solid var(--line);
        font-size: 0.85rem;
        white-space: nowrap;
    }

    .status.ok {
        border-color: #2e7d32;
        color: #2e7d32;
    }

    .tool {
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

    .eyebrow {
        color: var(--primary);
    }

    h2 {
        font-size: clamp(1.6rem, 1.3rem + 1.2vw, 2.2rem);
    }

    .text p {
        color: var(--secondary-text);
        line-height: 1.6;
    }

    .flows_title {
        font-size: 0.8rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--secondary-text);
        margin-top: 0.3rem;
    }

    .flows {
        list-style: none;
        margin: 0 0 0.4rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .flows li {
        position: relative;
        padding-left: 1.3rem;
        font-size: 0.92rem;
    }

    .flows li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.55em;
        width: 0.8rem;
        border-top: 2px dashed var(--primary);
    }

    @media (max-width: 860px) {
        .tool,
        .flip {
            grid-template-columns: minmax(0, 1fr);
            gap: 1.25rem;
        }
        .flip .text {
            order: 0;
        }
    }
</style>
