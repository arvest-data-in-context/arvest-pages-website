<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import IIIFVocab from '$lib/data/vocab/iiif.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.learn[langVal], href: base + "/" + langVal + "/learn"},
        { text: BCVocab.iiif[langVal], href: base + "/" + langVal + "/learn/iiif"}
      ]}
    />

<div class="cont">
    <div class="title_part_iiif">
        <img src="{base}/imgs/logos/iiif_logo_cropped.png" alt="iiif illustrated logo"/>
        <div>
            <h2>{IIIFVocab.title[langVal]}</h2>
            
            <div class="button_resizer">
                <BigButton
                    url = {"https://iiif.io/"}
                    label = {IIIFVocab.link[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="lower_part">
        {@html IIIFVocab.description[langVal]}

        <h3>{IIIFVocab.manifest_lesson.title[langVal]}</h3>

        {@html IIIFVocab.manifest_lesson.description[langVal]}
    </div>
</div>

<style>

    .lower_part{
        margin-top: 1em;
        width: 80%;
    }

    h3{
        margin-top: 1em;
        font-size: 0.8em;
        margin-bottom: 1em;
    }

    .title_part_iiif{
        display: flex;
        gap: 1em;
    }

    .button_resizer{
        margin-top: 0.3em;
        font-size: 0.5em;
    }

    .cont{
        padding-bottom: 5em;
    }

    h2{
        font-size: 0.8em;
    }

    img{
        width: 100px;
        height: auto;
    }

    p{
        font-size: 0.5em;
    }
</style>