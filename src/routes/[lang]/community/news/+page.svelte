<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    export let data;

    onMount(() => {
        const cards = document.getElementsByClassName("image_container");
        for(let i = 0; i < cards.length; i++){
            let idx = Number(cards[i].id.split("img_cont_")[1]);
            let img_url = "url('" + base + "/" + data.articles[idx].image + "')";
            cards[i].style.backgroundImage = img_url;
            cards[i].style.backgroundSize = "cover";
            cards[i].style.backgroundPosition = "center"; 
        }
    });
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.community[langVal], href: base + "/" + langVal + "/community"},
        { text: BCVocab.news[langVal], href: base + "/" + langVal + "/community/news" }
      ]}
    />

<div class="cont">
    {#each data.articles as article, index}
    <a class="article_card" href={base}{`/${langVal}/community/news/${article.slug}`}>
       
        <div class="image_container" id="img_cont_{index}"></div>
        
        <div class="text_part">
            <h2>{article.title}</h2>
            <p class="desc">{article.description}</p>
            
            <div class="lower_part">
                <p>{article.date}</p>

                {#each article.tags as tag}
                    <p class="tag_box">{tag}</p>
                {/each}
            </div>
        </div>
    </a>
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
        font-size: 0.5em;
        /* height: 100%; */
        align-items: center;
        align-content: center;
    }

    .desc{
        padding-bottom: 0.5em;
        font-size: 0.4em;
    }

    .tag_box{
        background-color: rgb(122, 211, 134);
        /* height: 100%; */
        height: fit-content;
        padding: 0.2em;
        border-radius: 4px;
        color: white;
    }

    p{
        font-size: 0.5em;
        color: var(--secondary-text);
        font-size: 0.5em;
    }

    .article_card{
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        transition-duration: 500ms;
        border: black dashed 1px;
        border-radius: 5px;
        display: flex;
        align-items: stretch;
        height: 100%;
    }

    .text_part{
        padding: 0.3em;
        flex-grow: 1;
    }

    .image_container {
        width: 10%;
        flex-shrink: 0;
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
        font-size: 0.5em;
        padding-bottom: 0.3em;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        .image_container {width: 10%;}
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        .image_container {width: 10%;}
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        .image_container {width: 15%;}
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        .image_container {width: 20%;}
    }
</style>