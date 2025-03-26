<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import LowerMenu from '$lib/components/general_ui/LowerMenu.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import Articlecard from '$lib/components/general_ui/ArticleCard.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import CommunityVocab from '$lib/data/vocab/community.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    export let data;
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.community[langVal], href: base + "/" + langVal + "/community"}
      ]}
/>

<LowerMenu
    menu_items = {[
        {url : base + "/" + langVal + "/community/projects", label : BCVocab.projects[langVal]},
        {url : base + "/" + langVal + "/community/forum", label : BCVocab.forum[langVal]},
        {url : base + "/" + langVal + "/community/news", label : BCVocab.news[langVal]},
        {url : "https://stage-to-data.huma-num.fr/", label : BCVocab.stage[langVal]}
    ]}
/>

<div class="cont">
    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/community/projects"><h1>{BCVocab.projects[langVal]}</h1></a>
            <p>{CommunityVocab.projects.blurb[langVal]}</p>

            <h2>{CommunityVocab.latest[langVal]}</h2>

            <Articlecard
                article={data.projects[0]}
                type="projects"
            />

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/community/projects"}
                    label = {CommunityVocab.projects.button[langVal]}
                />

                
            </div>
        </div>
    </div>

    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/community/forum"><h1>{BCVocab.forum[langVal]}</h1></a>
            <p>{CommunityVocab.forum.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/community/forum"}
                    label = {CommunityVocab.forum.button[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/community/news"><h1>{BCVocab.news[langVal]}</h1></a>
            <p>{CommunityVocab.blog.blurb[langVal]}</p>

            <h2>{CommunityVocab.latest[langVal]}</h2>

            <Articlecard
                article={data.news[0]}
                type="news"
            />

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/community/news"}
                    label = {CommunityVocab.blog.button[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="https://stage-to-data.huma-num.fr/"><h1>{BCVocab.stage[langVal]}</h1></a>
            <p>{CommunityVocab.stage.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = "https://stage-to-data.huma-num.fr/"
                    label = {CommunityVocab.stage.button[langVal]}
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