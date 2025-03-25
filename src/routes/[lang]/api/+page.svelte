<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import LowerMenu from '$lib/components/general_ui/LowerMenu.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import APIVocab from '$lib/data/vocab/api.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    export let data;
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.api[langVal], href: base + "/" + langVal + "/api"}
      ]}
/>

<LowerMenu
    menu_items = {[
        {url : base + "/" + langVal + "/api/ml", label : BCVocab.ml[langVal]},
        {url : base + "/" + langVal + "/api/documentation", label : BCVocab.reference[langVal]},
        {url : "https://github.com/ARVEST-APP", label : BCVocab.git[langVal]}
    ]}
/>

<div class="cont">
    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/api/ml"><h1>{BCVocab.ml[langVal]}</h1></a>
            <p>{APIVocab.ml.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/api/ml"}
                    label = {APIVocab.ml.button[langVal]}
                />

                
            </div>
        </div>
    </div>

    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="{base}/{langVal}/api/documentation"><h1>{BCVocab.reference[langVal]}</h1></a>
            <p>{APIVocab.documentation.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = {base + "/" + langVal + "/api/documentation"}
                    label = {APIVocab.documentation.button[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="section_div">
        <img src={base + "/imgs/squares/trame.png"} alt="checked squares">

        <div class="inner_part">
            <a href="https://github.com/ARVEST-APP"><h1>{BCVocab.git[langVal]}</h1></a>
            <p>{APIVocab.git.blurb[langVal]}</p>

            <div class="button_resizer">
                <BigButton
                    url = {"https://github.com/ARVEST-APP"}
                    label = {APIVocab.git.button[langVal]}
                />
            </div>
        </div>
    </div>
</div>

<style>
    .inner_part{
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