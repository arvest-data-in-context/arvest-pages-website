<script>
    import Seo from '$lib/components/Seo.svelte';
    import { SITE_JSONLD } from '$lib/scripts/seo.js';
    export let data; // PAGE DATA HERE

    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import FeatureCard from '$lib/components/front_page/FeatureCard.svelte';
    import MultiFeatureCard from '$lib/components/front_page/MultiFeatureCard.svelte';
    import MainPresWidget from '$lib/components/front_page/main_pres_widget/MainPresWidget.svelte';
    import Youtube from '$lib/components/articles/Youtube.svelte';
    import DemoDesk from '$lib/components/front_page/demos/DemoDesk.svelte';
    import DemoGather from '$lib/components/front_page/demos/DemoGather.svelte';
    import DemoArrange from '$lib/components/front_page/demos/DemoArrange.svelte';
    import DemoAnnotate from '$lib/components/front_page/demos/DemoAnnotate.svelte';
    import DemoLink from '$lib/components/front_page/demos/DemoLink.svelte';
    import DemoShare from '$lib/components/front_page/demos/DemoShare.svelte';

    import { base } from '$app/paths';

    // Language handling:
    import { lang } from '$lib/scripts/stores.js';
    import PageVocab from '$lib/data/vocab/front_page.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    function handle_scroll_to(e){

        let target_index = "scroll_to" + String(e.detail.current_slide)
        const target = document.getElementById(target_index);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<Seo
    full_title={"Arvest | " + PageVocab.short_description[langVal]}
    description={PageVocab.long_description[langVal]}
    jsonld={SITE_JSONLD}
/>

<!-- <h1>{data.vocab}</h1> -->

<div class="home_col">
    <aside class="card new_version_setion">
        <span class="tag">Beta</span>
        <div class="v2_text">
            <p class="v2_title">{PageVocab.v2.title[langVal]}</p>
            <p>{PageVocab.v2.description[langVal]}</p>
        </div>
        <BigButton
            label = {PageVocab.v2.link[langVal].replace("->", "→")}
            url = {"https://workspace.arvest.app/playground/"}
            kind = "primary"
        />
    </aside>
</div>

<MainPresWidget
    on:scroll_to={(e) => handle_scroll_to(e)}
>
    <div id="top_section">
        <h1>{PageVocab.short_description[langVal]}</h1>
        <p id="long_description">{PageVocab.long_description[langVal]}</p>
        <div class="actions">
            <BigButton
                label = {PageVocab.start_creating[langVal]}
                url = {"https://workspace.arvest.app/"}
                kind = "primary"
                size = "large"
            />
        </div>
    </div>
</MainPresWidget>

<div class="home_col" id="feature_section">
    <!-- Digital desk -->
    <FeatureCard
        title = {PageVocab.features.digital_workspace.title[langVal]}
        description = {PageVocab.features.digital_workspace.desc[langVal]}
        image_url = "{base}/imgs/front_page_content/digital_desk.jpg"
        demo = {DemoDesk}
        image_alt = {"Arvest: " + PageVocab.features.digital_workspace.title[langVal]}
        button_label = {PageVocab.features.digital_workspace.button[langVal]}
        button_url = "{base}/{langVal}/learn/tutorials/01-introduction-and-overview"
        scroll_to_index = 0
        number = {1}
        flip = {false}
    />

    <!-- Multimoda documents -->
    <FeatureCard
        title = {PageVocab.features.create_collections.title[langVal]}
        description = {PageVocab.features.create_collections.desc[langVal]}
        image_url = "{base}/imgs/front_page_content/multimodal_collections.jpg"
        demo = {DemoGather}
        image_alt = {"Arvest: " + PageVocab.features.create_collections.title[langVal]}
        button_label = {PageVocab.features.create_collections.button[langVal]}
        button_url = "{base}/{langVal}/learn/tutorials/02-media"
        scroll_to_index = 1
        number = {2}
        flip = {true}
    />

    <!-- Arrange and compose -->
    <FeatureCard
        title = {PageVocab.features.arrange_and_compose.title[langVal]}
        description = {PageVocab.features.arrange_and_compose.desc[langVal]}
        image_url = "{base}/imgs/front_page_content/configure_project.png"
        demo = {DemoArrange}
        image_alt = {"Arvest: " + PageVocab.features.arrange_and_compose.title[langVal]}
        button_label = {PageVocab.features.arrange_and_compose.button[langVal]}
        button_url = "{base}/{langVal}/learn/tutorials/04-projects"
        scroll_to_index = 2
        number = {3}
        flip = {false}
    />

    <!-- Annotations -->
    <FeatureCard
        title = {PageVocab.features.create_annotations.title[langVal]}
        description = {PageVocab.features.create_annotations.desc[langVal]}
        image_url = "{base}/imgs/front_page_content/annotations.jpg"
        demo = {DemoAnnotate}
        image_alt = {"Arvest: " + PageVocab.features.create_annotations.title[langVal]}
        button_label = {PageVocab.features.create_annotations.button[langVal]}
        button_url = "{base}/{langVal}/learn/tutorials/05-annotations"
        scroll_to_index = 3
        number = {4}
        flip = {true}
    />

    <!-- Link your documents -->
    <FeatureCard
        title = {PageVocab.features.navigate_networks.title[langVal]}
        description = {PageVocab.features.navigate_networks.desc[langVal]}
        image_url = "{base}/imgs/front_page_content/document_networks.png"
        demo = {DemoLink}
        image_alt = {"Arvest: " + PageVocab.features.navigate_networks.title[langVal]}
        button_label = {PageVocab.features.navigate_networks.button[langVal]}
        button_url = "{base}/{langVal}/community/projects/some-examples"
        scroll_to_index = 4
        number = {5}
        flip = {false}
    />

    <!-- Share -->
    <FeatureCard
        title = {PageVocab.features.share.title[langVal]}
        description = {PageVocab.features.share.desc[langVal]}
        image_url = "{base}/imgs/front_page_content/share_project.png"
        demo = {DemoShare}
        image_alt = {"Arvest: " + PageVocab.features.share.title[langVal]}
        button_label = {PageVocab.features.share.button[langVal]}
        button_url = "{base}/{langVal}/community/projects"
        scroll_to_index = 5
        number = {6}
        flip = {true}
    />

    <div class="video">
        <Youtube
            width = "100%"
            youtube_src = "zQOm8V22wI4"
        />
    </div>

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
        button_url_2 = "{base}/{langVal}/api/ml"

        title_3 = {PageVocab.features.secure_data.title[langVal]}
        description_3 = {PageVocab.features.secure_data.desc[langVal]}
        image_url_3 = "{base}/imgs/logos/padlock_logo_cropped.png"
        image_alt_3 = "secure padlock illustration"
        button_label_3 = {PageVocab.features.secure_data.button[langVal]}
        button_url_3 = "{base}/{langVal}/about/infrastructure"
    />
</div>

<style>
    /* The page's column (the table above takes the whole window). */
    .home_col{
        max-width: calc(var(--page-max) + 2 * var(--gutter));
        margin: 0 auto;
        padding: 0 var(--gutter);
    }

    #top_section h1{
        font-size: clamp(2.6rem, 1.8rem + 3.2vw, 4.5rem);
        line-height: 1.02;
    }

    #long_description{
        max-width: 30rem;
        margin-top: 0.9rem;
        font-size: clamp(1rem, 0.95rem + 0.3vw, 1.15rem);
        line-height: 1.5;
        color: var(--primary-text);
    }

    .actions{
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1.5rem;
    }

    /* Arvest v2: a slim card with a purple left edge (as a group's card in the tool). */
    .new_version_setion{
        display: flex;
        align-items: center;
        gap: 0.6rem 1.25rem;
        margin-top: 1rem;
        padding: 0.75rem 1rem 0.75rem 1.1rem;
        border-width: 1.5px;
        border-left: 6px solid var(--primary);
        box-shadow: var(--panel-shadow);
    }

    .v2_text{
        flex: 1;
        min-width: 0;
    }

    .new_version_setion .v2_title{
        font-family: var(--font-display);
        color: var(--primary-text);
        font-size: 1.25rem;
    }

    .new_version_setion p{
        color: var(--secondary-text);
        font-size: 0.88rem;
        line-height: 1.45;
    }

    #feature_section{
        display: flex;
        flex-direction: column;
    }

    .video{
        max-width: 900px;
        width: 100%;
        margin: 2rem auto 0;
    }

    @media (max-width: 760px){
        .new_version_setion{
            flex-wrap: wrap;
            align-items: flex-start;
        }
        .v2_text{
            flex-basis: 100%;
            order: 1;
        }
        .new_version_setion :global(a){
            order: 2;
        }
    }
</style>
