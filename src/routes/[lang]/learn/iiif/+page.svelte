<script>
    import Seo from '$lib/components/Seo.svelte';
    import LearnVocab from '$lib/data/vocab/learn.json';
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

<Seo
    title={BCVocab.iiif[langVal]}
    description={LearnVocab.iiif.blurb[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.learn[langVal] },
        { text: BCVocab.iiif[langVal], href: base + "/" + langVal + "/learn/iiif"}
      ]}
    />

<header class="page_head title_part_iiif">
    <img src="{base}/imgs/logos/iiif_logo_cropped.png" alt="" width="96"/>
    <div>
        <h1>{IIIFVocab.title[langVal]}</h1>
        <div class="button_resizer">
            <BigButton
                url = {"https://iiif.io/"}
                label = {IIIFVocab.link[langVal]}
                kind = "secondary"
            />
        </div>
    </div>
</header>

<div class="prose">
    {@html IIIFVocab.description[langVal]}

    <h2>{IIIFVocab.manifest_lesson.title[langVal]}</h2>

    {@html IIIFVocab.manifest_lesson.description[langVal]}
</div>

<style>
    .title_part_iiif{
        display: flex;
        align-items: center;
        gap: 1.25rem;
    }

    .title_part_iiif img{
        flex: none;
        width: clamp(64px, 14vw, 96px);
        height: auto;
    }

    .button_resizer{
        margin-top: 0.75rem;
    }
</style>
