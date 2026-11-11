<script>
    // A list of articles (news, projects, tutorials) with a search box, the tags as filter
    // chips and the order (newest or oldest first). The search and the tag are kept in the
    // address (?q=…&tag=…) so a filtered list can be linked to; the tags on an article
    // link to its list filtered by that tag.
    import { onMount } from 'svelte';
    import { lang } from '$lib/scripts/stores.js';
    import ArticleCard from '$lib/components/general_ui/ArticleCard.svelte';
    import ArticleVocab from '$lib/data/vocab/articles.json';

    export let articles = [];
    export let type = "news";
    export let section = "community";

    let langVal;
    lang.subscribe(value => { langVal = value; });

    let query = "";
    let tag = "";
    let newest = true;
    let ready = false;

    // the tags, most used first
    $: all_tags = Object.entries(
        articles.flatMap(a => a.tags || []).reduce((n, t) => ({ ...n, [t]: (n[t] || 0) + 1 }), {})
    ).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([t]) => t);

    const fold = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

    $: words = fold(query).split(/\s+/).filter(Boolean);
    $: shown = articles
        .filter(a => !tag || (a.tags || []).includes(tag))
        .filter(a => {
            const hay = fold([a.title, a.description, a.author, ...(a.tags || [])].join(" "));
            return words.every(w => hay.includes(w));
        })
        .sort((a, b) => (newest ? 1 : -1) * (new Date(b.date) - new Date(a.date)));

    $: count_text = shown.length === 1
        ? ArticleVocab.results_one[langVal]
        : ArticleVocab.results_many[langVal].replace("{n}", shown.length);

    onMount(() => {
        const p = new URLSearchParams(location.search);
        query = p.get("q") || "";
        tag = p.get("tag") || "";
        ready = true;
    });

    // keep the address in step, without adding to the history
    $: if (ready) {
        const p = new URLSearchParams();
        if (query) p.set("q", query);
        if (tag) p.set("tag", tag);
        const qs = p.toString();
        history.replaceState(history.state, "", location.pathname + (qs ? "?" + qs : ""));
    }
</script>

<div class="toolbar card" role="search">
    <label class="search">
        <span class="visually_hidden">{ArticleVocab.search[langVal]}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="M13 13l4.5 4.5" /></svg>
        <input type="search" bind:value={query} placeholder={ArticleVocab.search_placeholder[langVal]} autocomplete="off">
    </label>

    <div class="segmented" role="group" aria-label={ArticleVocab.sort[langVal]}>
        <button type="button" class:on={newest} aria-pressed={newest} on:click={() => (newest = true)}>{ArticleVocab.newest[langVal]}</button>
        <button type="button" class:on={!newest} aria-pressed={!newest} on:click={() => (newest = false)}>{ArticleVocab.oldest[langVal]}</button>
    </div>

    {#if all_tags.length}
        <div class="chips" role="group" aria-label={ArticleVocab.filter_by_tag[langVal]}>
            <button type="button" class="chip" class:on={!tag} aria-pressed={!tag} on:click={() => (tag = "")}>{ArticleVocab.all_tags[langVal]}</button>
            {#each all_tags as t}
                <button type="button" class="chip" class:on={tag === t} aria-pressed={tag === t} on:click={() => (tag = tag === t ? "" : t)}>{t}</button>
            {/each}
        </div>
    {/if}
</div>

<p class="count" aria-live="polite">
    {count_text}
    {#if query || tag}
        <button type="button" class="clear" on:click={() => { query = ""; tag = ""; }}>{ArticleVocab.clear[langVal]}</button>
    {/if}
</p>

{#if shown.length}
    <div class="card_grid">
        {#each shown as article (article.slug)}
            <ArticleCard {article} {type} {section} />
        {/each}
    </div>
{:else}
    <p class="none">{ArticleVocab.none[langVal]}</p>
{/if}

<style>
    .toolbar {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 0.9rem 1rem;
        align-items: center;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .search {
        position: relative;
        display: block;
        min-width: 0;
    }

    .search svg {
        position: absolute;
        left: 0.9rem;
        top: 50%;
        width: 1.1rem;
        height: 1.1rem;
        transform: translateY(-50%);
        fill: none;
        stroke: var(--secondary-text);
        stroke-width: 1.8;
        stroke-linecap: round;
        pointer-events: none;
    }

    input {
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        font: inherit;
        font-size: 1rem;
        padding: 0.65rem 1rem 0.65rem 2.6rem;
        border: 1.5px solid var(--primary-text);
        border-radius: 999px;
        background: #fff;
        color: var(--primary-text);
    }

    input:focus-visible {
        outline: 3px solid var(--secundary);
        outline-offset: 1px;
    }

    .chips {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
    }

    .chip {
        font: inherit;
        font-size: 0.85rem;
        padding: 0.3rem 0.8rem;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: #fff;
        color: var(--primary-text);
        cursor: pointer;
    }

    .chip:hover {
        border-color: var(--primary);
        color: var(--primary);
    }

    .chip.on {
        background: var(--primary);
        border-color: var(--primary);
        color: #fff;
    }

    .count {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.9rem;
        color: var(--secondary-text);
        margin: 0 0 1rem;
    }

    .clear {
        font: inherit;
        font-size: 0.85rem;
        background: none;
        border: none;
        padding: 0;
        color: var(--primary);
        text-decoration: underline;
        cursor: pointer;
    }

    .none {
        padding: 2rem 0;
        color: var(--secondary-text);
    }

    .visually_hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }

    @media (max-width: 640px) {
        .toolbar {
            grid-template-columns: minmax(0, 1fr);
        }
    }
</style>
