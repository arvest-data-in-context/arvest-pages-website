<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    export let data;

    console.log(data.articles);
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.community[langVal], href: base + "/" + langVal + "/community"},
        { text: BCVocab.news[langVal], href: base + "/" + langVal + "/community/news" }
      ]}
    />

<div class="cont">
    

    {#each data.articles as article}
    <div class="article_card">
        <a href={base}{`/${langVal}/community/news/${article.slug}`} >
            <h2>{article.title}</h2>
            <p class="desc">{article.description}</p>
            
            <div class="lower_part">
                <p>{article.date}</p>
            
                {#each article.tags as tag}
                    <p class="tag_box">{tag}</p>
                {/each}
            </div>
            
            
        </a>
    </div>
    {/each}
</div>

<style>
    .cont{
        padding-bottom: 3em;
    }

    .lower_part{
        display: flex;
        flex-wrap: wrap;
        gap: 0.3em;
        font-size: 0.8em;
        height: 100%;
        align-items: center;
        align-content: center;
    }

    .desc{
        padding-bottom: 0.5em;
    }

    .tag_box{
        background-color: rgb(122, 211, 134);
        height: 100%;
        padding: 0.4em;
        border-radius: 4px;
        color: white;
    }

    p{
        font-size: 0.5em;
        color: var(--secondary-text);
        font-size: 0.5em;
    }

    .article_card{
        margin-top: 1em;
        margin-bottom: 1em;
        padding-top: 0.3em;
        padding-bottom: 0.3em;
        transition-duration: 500ms;
    }

    .article_card:hover{
        background-color: rgb(239, 239, 239);
    }

    a{
        text-decoration: none;
        
    }

    a:hover{
        background-color: rgb(233, 233, 233);
    }

    h2{
        color: var(--primary-text);
        font-size: 0.8em;
        padding-bottom: 0.3em;
    }
</style>