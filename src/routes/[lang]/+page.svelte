<script>
    export let data; // PAGE DATA HERE

    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import FeatureCard from '$lib/components/front_page/FeatureCard.svelte';
    import MultiFeatureCard from '$lib/components/front_page/MultiFeatureCard.svelte';
    import MainPresWidget from '$lib/components/front_page/main_pres_widget/MainPresWidget.svelte';

    import { base } from '$app/paths';

    // Language handling:
    import { lang } from '$lib/scripts/stores.js';
    import PageVocab from '$lib/data/vocab/front_page.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<!-- <h1>{data.vocab}</h1> -->

<div id="top_section">
    <h1>
        {PageVocab.short_description[langVal]}
    </h1>
    <p id="long_description">
        {PageVocab.long_description[langVal]}
    </p>
    <div id="main_button_resizer">
    <BigButton
        label = {PageVocab.start_creating[langVal]}
        url = {"https://arvest-dev.tetras-libre.fr/"}
    />
    </div>
</div>

<MainPresWidget />

<div id="feature_section">
    <FeatureCard
        title = {PageVocab.features.create_collections.title[langVal]}
        description = {PageVocab.features.create_collections.desc[langVal]}
        image_url = "{base}/imgs/front_page_content/multimodal_collections.png"
        image_alt = "multimodal collections screenshot"
        button_label = {PageVocab.features.create_collections.button[langVal]}
        button_url = "{base}/{langVal}/about"
    />
    <FeatureCard
        title = {PageVocab.features.create_annotations.title[langVal]}
        description = {PageVocab.features.create_annotations.desc[langVal]}
        image_url = "{base}/imgs/front_page_content/annotations.png"
        image_alt = "annotations screenshot"
        button_label = {PageVocab.features.create_annotations.button[langVal]}
        button_url = "{base}/{langVal}/about"
    />
    <FeatureCard
        title = {PageVocab.features.navigate_networks.title[langVal]}
        description = {PageVocab.features.navigate_networks.desc[langVal]}
        image_url = "{base}/imgs/front_page_content/document_networks.png"
        image_alt = "document networks screenshot"
        button_label = {PageVocab.features.navigate_networks.button[langVal]}
        button_url = "{base}/{langVal}/about"
    />

    <MultiFeatureCard
        title_1 = {PageVocab.features.iiif_compliant.title[langVal]}
        description_1 = {PageVocab.features.iiif_compliant.desc[langVal]}
        image_url_1 = "{base}/imgs/logos/iiif_logo_cropped.png"
        image_alt_1 = "iiif logo illustration"
        button_label_1 = {PageVocab.features.iiif_compliant.button[langVal]}
        button_url_1 = "{base}/{langVal}/learn/iiif"

        title_2 = {PageVocab.features.ml_workflows.title[langVal]}
        description_2 = {PageVocab.features.ml_workflows.desc[langVal]}
        image_url_2 = "{base}/imgs/logos/ml_logo_cropped.png"
        image_alt_2 = "machine learning illustration"
        button_label_2 = {PageVocab.features.ml_workflows.button[langVal]}
        button_url_2 = "{base}/{langVal}/api"

        title_3 = {PageVocab.features.secure_data.title[langVal]}
        description_3 = {PageVocab.features.secure_data.desc[langVal]}
        image_url_3 = "{base}/imgs/logos/padlock_logo_cropped.png"
        image_alt_3 = "secure padlock illustration"
        button_label_3 = {PageVocab.features.secure_data.button[langVal]}
        button_url_3 = "{base}/{langVal}/about/arvest"
    />
</div>

<style>
    h1{
        color: var(--primary-text);
        font-size: 2em;
        padding-bottom: 0.2em;
        width: 60%;
    }

    #long_description{
        color: var(--secondary-text);
        padding-bottom: 1em;
    }

    #top_section{
        padding-top: 3em;
        padding-bottom: 3em;
        gap: 1em;
        width: 80%;
    }

    #main_demo_image{
        margin-top: 2em;
        width: 100%;
        border-radius: 5px;
    }

    #main_button_resizer{
        font-size: 1em;
    }


    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        h1{
            font-size: 2em;
        }
        #long_description{
            font-size: 1em;
        }
        #main_button_resizer{
            font-size: 1em;
        }
        #top_section{
            padding-top: 3em;
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        h1{
            font-size: 2em;
        }
        #long_description{
            font-size: 1em;
        }
        #main_button_resizer{
            font-size: 1em;
        }
        #top_section{
            padding-top: 1em;
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        h1{
            font-size: 2em;
        }
        #long_description{
            font-size: 0.7em;
        }
        #main_button_resizer{
            font-size: 1em;
        }
        #top_section{
            padding-top: 2em;
        }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        h1{
            font-size: 1em;
        }
        #long_description{
            font-size: 0.5em;
        }
        #main_button_resizer{
            font-size: 0.7em;
        }
        #top_section{
            padding-top: 3em;
        }
    }
</style>