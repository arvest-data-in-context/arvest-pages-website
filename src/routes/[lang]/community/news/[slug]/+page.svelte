<script>
    import { base } from '$app/paths';
    import { lang } from '$lib/scripts/stores.js';

    export let data;

    let langVal;
    import BCVocab from '$lib/data/vocab/footer.json';
    import ArticleVocab from '$lib/data/vocab/articles.json';
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

<div class="news_article_div">

    <div class="article_top_image"><img src={base + "/" + data.article.metadata.image} alt="article main illustration"></div>

    <svelte:component this={data.article.default} />

    <div class="metadata">
        <p>{ArticleVocab.author[langVal]}: {data.article.metadata.author}</p>
        <p>{ArticleVocab.date[langVal]}: {data.article.metadata.date}</p>
        <p>{ArticleVocab.tags[langVal]}: </p>
        <ul>
            {#each data.article.metadata.tags as tag}
                <li>- {tag}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .article_top_image{
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
        margin-bottom: 1em;
    }

    .article_top_image img{
        width: 100%;
        height: auto;
        display: block;
    }

    .article_top_image::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px; /* Adjust height as needed for the fade */
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
        pointer-events: none; /* Allows interaction with the image beneath */
    }

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