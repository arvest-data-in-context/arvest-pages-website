<script>
    import { base } from '$app/paths';
    export let article;
    import { onMount } from 'svelte';
    let img_cont;


    import { lang } from '$lib/scripts/stores.js';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    onMount(() => {

        let img_url = "url('" + base + "/" + article.image + "')";
        img_cont.style.backgroundImage = img_url;
        img_cont.style.backgroundSize = "cover";
        img_cont.style.backgroundPosition = "center"; 

    });
</script>

<div class="cont">
    <a class="article_card" href={base}{`/${langVal}/learn/tutorials/${article.slug}`}>
       
        <div class="image_container" bind:this={img_cont}></div>
        
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
</div>

<style>
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
        font-size: 0.2em;
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
        font-size: 0.3em;
    }

    .article_card{
        margin-top: 0.1em;
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
        font-size: 0.3em;
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