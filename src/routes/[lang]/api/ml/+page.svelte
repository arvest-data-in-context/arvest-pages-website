<script>
    import Seo from '$lib/components/Seo.svelte';
    import APIVocab from '$lib/data/vocab/api.json';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import MLVocab from '$lib/data/vocab/api-ml.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<Seo
    title={BCVocab.ml[langVal]}
    description={APIVocab.ml.blurb[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.api[langVal] },
        { text: BCVocab.ml[langVal], href: base + "/" + langVal + "/api/ml"}
      ]}
    />

<header class="page_head">
    <h1>{BCVocab.ml[langVal]}</h1>
    <p class="lede">{APIVocab.ml.blurb[langVal]}.</p>
    <BigButton label={APIVocab.documentation.button[langVal] + " →"} url="{base}/{langVal}/api/documentation" kind="primary" />
</header>

<div class="tutorial_link_wrap">
        <a class="card tut_card" href="{base}/{langVal}/learn/tutorials/{MLVocab.tutorials.speech_recognition.url}">
            <img src="{base}/{MLVocab.tutorials.speech_recognition.image}" alt="speech recognition screenshot" loading="lazy"/>
            <span>{MLVocab.tutorials.speech_recognition.title[langVal]}</span>
        </a>
        <a class="card tut_card" href="{base}/{langVal}/learn/tutorials/{MLVocab.tutorials.embedding.url}">
            <img src="{base}/{MLVocab.tutorials.embedding.image}" alt="embedding screenshot" loading="lazy"/>
            <span>{MLVocab.tutorials.embedding.title[langVal]}</span>
        </a>
        <a class="card tut_card" href="{base}/{langVal}/learn/tutorials/{MLVocab.tutorials.video_decompo.url}">
            <img src="{base}/{MLVocab.tutorials.video_decompo.image}" alt="video decomposition screenshot" loading="lazy"/>
            <span>{MLVocab.tutorials.video_decompo.title[langVal]}</span>
        </a>
        <a class="card tut_card" href="{base}/{langVal}/learn/tutorials/{MLVocab.tutorials.network_analysis.url}">
            <img src="{base}/{MLVocab.tutorials.network_analysis.image}" alt="network analysis screenshot" loading="lazy"/>
            <span>{MLVocab.tutorials.network_analysis.title[langVal]}</span>
        </a>
</div>

<div class="prose">
    <p>{MLVocab.tutorials.description[langVal]}</p>

    <h2>{MLVocab.title[langVal]}</h2>
    {@html MLVocab.description[langVal]}

    <h2>{MLVocab.ml_notebooks.title[langVal]}</h2>
    {@html MLVocab.ml_notebooks.description[langVal]}
</div>

<style>
    .tutorial_link_wrap{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 210px), 1fr));
        gap: 1.25rem;
        margin-bottom: 2rem;
    }

    .tut_card{
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .tut_card img{
        display: block;
        width: 100%;
        aspect-ratio: 16 / 10;
        object-fit: cover;
        border-bottom: 1.5px solid var(--primary-text);
    }

    .tut_card span{
        padding: 0.7rem 0.85rem 0.8rem;
        font-family: var(--font-display);
        font-size: 1.15rem;
        line-height: 1.2;
    }
</style>
