<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import LowerMenu from '$lib/components/general_ui/LowerMenu.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import AboutVocab from '$lib/data/vocab/about.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    export let data;
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal], href: base + "/" + langVal + "/about"}
      ]}
/>

<LowerMenu
    menu_items = {[
        {url : base + "/" + langVal + "/about/infrastructure", label : BCVocab.about_arvest[langVal]},
        {url : base + "/" + langVal + "/about/team", label : BCVocab.team[langVal]},
        {url : base + "/" + langVal + "/about/accessibility", label : BCVocab.accessibility[langVal]},
        {url : base + "/" + langVal + "/about/credits", label : BCVocab.credits[langVal]}
    ]}
/>

<div class="cont">
    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/about/infrastructure"><h1>{BCVocab.about_arvest[langVal]}</h1></a>
            <p>{AboutVocab.about_arvest.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/about/infrastructure"}
                    label = {AboutVocab.about_arvest.button[langVal]}
                />

                
            </div>
        </div>
    </div>

    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/about/team"><h1>{BCVocab.team[langVal]}</h1></a>
            <p>{AboutVocab.team.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/about/team"}
                    label = {AboutVocab.team.button[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/about/accessibility"><h1>{BCVocab.accessibility[langVal]}</h1></a>
            <p>{AboutVocab.accessibility.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/about/accessibility"}
                    label = {AboutVocab.accessibility.button[langVal]}
                />

                
            </div>
        </div>
    </div>

    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/about/credits"><h1>{BCVocab.credits[langVal]}</h1></a>
            <p>{AboutVocab.credits.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/about/credits"}
                    label = {AboutVocab.credits.button[langVal]}
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