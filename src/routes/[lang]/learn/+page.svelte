<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import LowerMenu from '$lib/components/general_ui/LowerMenu.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import TutorialCard from '$lib/components/general_ui/TutorialCard.svelte';
    import { base } from '$app/paths';

    import Youtube from '$lib/components/articles/Youtube.svelte';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import LearnVocab from '$lib/data/vocab/learn.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    export let data;
</script>

<svelte:head>
    <title>Arvest | {BCVocab.learn[langVal]}</title>
</svelte:head>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.learn[langVal], href: base + "/" + langVal + "/learn"}
      ]}
/>

<LowerMenu
    menu_items = {[
        {url : base + "/" + langVal + "/learn/tutorials", label : BCVocab.tutorials[langVal]},
        {url : base + "/" + langVal + "/learn/iiif", label : BCVocab.iiif[langVal]}
    ]}
/>

<Youtube
    width = "75%"
    youtube_src = "zQOm8V22wI4"
/>

<div class="cont">
    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/learn/tutorials"><h1>{BCVocab.tutorials[langVal]}</h1></a>
            <p>{LearnVocab.tutorials.blurb[langVal]}</p>

            <h2>{LearnVocab.latest[langVal]}</h2>

            <TutorialCard
                article={data.tutorials[0]}
            />

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/learn/tutorials"}
                    label = {LearnVocab.tutorials.button[langVal]}
                />

                
            </div>
        </div>
    </div>

    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/learn/iiif"><h1>{BCVocab.iiif[langVal]}</h1></a>
            <p>{LearnVocab.iiif.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/learn/iiif"}
                    label = {LearnVocab.iiif.button[langVal]}
                />
            </div>
        </div>
    </div>
</div>

<style>
    .inner_part{
        width: 100%;
    }
    .inner_part p {
        color: var(--secondary-text);
    }
    .inner_part a {
        width: 100%;
    }
    .cont{
        padding-bottom: 3em;
        width: 100%;
    }

    .section_div{
        padding-top: 1em;
        padding-bottom: 1em;
        display: flex;
        gap: 0.5em;
        width: 100%;
    }

    .section_div img{
        width: 100px;
    }

    p{
        font-size: 0.4em;
        padding-bottom: 1em;
    }

    a{
        text-decoration: none;
        color: black;
        width: min-content;
        display: flex;
    }

    a:hover{
        color: grey;
    }

    h1{
        padding-bottom: 0.4em;
        width: fit-content;
        font-size: 0.7em;
    }
    h2{
        font-size: 0.4em;
        padding-bottom: 0.5em;
        width: fit-content;
    }

    .button_resizer{
        font-size: 0.5em;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        .section_div img{
        width: 100px;
    }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        .section_div img{
        width: 100px;
    }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        .section_div img{
        width: 100px;
    }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        .section_div img{
        width: 50px;
    }
    }
</style>