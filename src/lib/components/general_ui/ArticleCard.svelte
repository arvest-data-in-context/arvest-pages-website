<script>
    // A news item, project or tutorial as a card (docs/design.md, "Things to browse"):
    // its picture (16:10), its title, a grey line, then the date and tags.
    // "compact": a row, for the latest item inside a section's card.
    import { base } from '$app/paths';
    import { lang } from '$lib/scripts/stores.js';

    export let article;
    export let type = "news";            // news, projects or tutorials
    export let section = "community";    // community or learn
    export let compact = false;

    let langVal;
    lang.subscribe(value => {
        langVal = value;
    });

    $: href = `${base}/${langVal}/${section}/${type}/${article.slug}`;
</script>

<a class="card article_card" class:compact {href}>
    <div class="thumb">
        <img src="{base}/{article.image}" alt="" loading="lazy">
    </div>

    <div class="text_part">
        <h3>{article.title}</h3>
        {#if article.description}
            <p class="desc">{article.description}</p>
        {/if}

        <div class="meta">
            {#if article.date}<time datetime={article.date}>{article.date}</time>{/if}
            {#each article.tags || [] as tag}
                <span class="tag">{tag}</span>
            {/each}
        </div>
    </div>
</a>

<style>
    .article_card {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }

    .thumb {
        aspect-ratio: 16 / 10;
        border-bottom: 1.5px solid var(--primary-text);
        background: var(--dot-grid);
        overflow: hidden;
    }

    .thumb img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text_part {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1;
        padding: 0.9rem 1rem 1rem;
    }

    h3 {
        font-size: 1.25rem;
    }

    .desc {
        color: var(--secondary-text);
        font-size: 0.92rem;
        line-height: 1.45;
    }

    .meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.4rem;
        margin-top: auto;
        padding-top: 0.25rem;
        font-size: 0.82rem;
        color: var(--secondary-text);
    }

    time {
        margin-right: 0.25rem;
    }

    /* The row form: a small picture at the left. */
    .compact {
        flex-direction: row;
        border-width: 1.5px;
        box-shadow: var(--panel-shadow);
    }

    .compact .thumb {
        flex: none;
        width: clamp(84px, 24%, 140px);
        aspect-ratio: auto;
        border-bottom: none;
        border-right: 1.5px solid var(--primary-text);
    }

    .compact .text_part {
        padding: 0.7rem 0.85rem;
        gap: 0.35rem;
    }

    .compact h3 {
        font-size: 1.1rem;
    }

    .compact .desc {
        font-size: 0.85rem;
    }
</style>
