<script>
    import { base } from '$app/paths';
    import { lang } from '$lib/scripts/stores.js';

    export let data;

    let langVal;
    import BCVocab from '$lib/data/vocab/footer.json';
    lang.subscribe(value => {
        langVal = value;
    });

    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.community[langVal], href: base + "/" + langVal + "/community"},
        { text: BCVocab.news[langVal], href: base + "/" + langVal + "/community/news" },
        { text: data.article.metadata.title, href: base + "/" + langVal + "/community/news/" + data.this_slug }
      ]}
/>

<!-- <h1>slug page</h1>
<h2>{data.article.metadata.title}</h2>

<svelte:component this={data.article.default} /> -->

<div class="news_article_div">
    <svelte:component this={data.article.default} />

    <div class="metadata">
        <p>Author: {data.article.metadata.author}</p>
        <p>Date: {data.article.metadata.date}</p>
        <p>Tags: </p>
        <ul>
            {#each data.article.metadata.tags as tag}
                <li>- {tag}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .metadata{
        margin-top: 2em;
        padding: 0.3em;
        background-color: rgb(236, 236, 236);
    }

    .metadata p{
        font-size: 0.3em;
        color: var(--primary-text);
        font-family: 'Input-Mono-Narrow-Thin', monospace;
    }

    .metadata li{
        font-size: 0.3em;
        color: var(--primary-text);
        font-family: 'Input-Mono-Narrow-Thin', monospace;
    }
</style>