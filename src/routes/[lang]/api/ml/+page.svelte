<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import MLVocab from '$lib/data/vocab/api-ml.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.api[langVal], href: base + "/" + langVal + "/api"},
        { text: BCVocab.ml[langVal], href: base + "/" + langVal + "/api/ml"}
      ]}
    />

<div class="cont">
    <div>
        <div class="tutorial_link_wrap">
            <a class="tut-link-ml" href="{base}/{langVal}/learn/tutorials/{MLVocab.tutorials.speech_recognition.url}">
                <div class="tutorial_link">
                    <img src="{base}/{MLVocab.tutorials.speech_recognition.image}" alt="speech recognition screenshot"/>
                    <p>{MLVocab.tutorials.speech_recognition.title[langVal]}</p>
                </div>
            </a>

            <a class="tut-link-ml" href="{base}/{langVal}/learn/tutorials/{MLVocab.tutorials.embedding.url}">
                <div class="tutorial_link">
                    <img src="{base}/{MLVocab.tutorials.embedding.image}" alt="embedding screenshot"/>
                    <p>{MLVocab.tutorials.embedding.title[langVal]}</p>
                </div>
            </a>

            <a class="tut-link-ml" href="{base}/{langVal}/learn/tutorials/{MLVocab.tutorials.video_decompo.url}">
                <div class="tutorial_link">
                    <img src="{base}/{MLVocab.tutorials.video_decompo.image}" alt="video decomposition screenshot"/>
                    <p>{MLVocab.tutorials.video_decompo.title[langVal]}</p>
                </div>
            </a>

            <a class="tut-link-ml" href="{base}/{langVal}/learn/tutorials/{MLVocab.tutorials.network_analysis.url}">
                <div class="tutorial_link">
                    <img src="{base}/{MLVocab.tutorials.network_analysis.image}" alt="network analysis screenshot"/>
                    <p>{MLVocab.tutorials.network_analysis.title[langVal]}</p>
                </div>
            </a>
        </div>
    </div>

    <p>{MLVocab.description[langVal]}</p>

    <h3>{MLVocab.title[langVal]}</h3>
</div>

<style>
    .tutorial_link_wrap{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0.5em;
        width: 100%;
        margin-bottom: 0.5em;
    }

    .tutorial_link{
        width: 100%;
    }

    .tutorial_link:hover{
        cursor: pointer;
    }

    .tutorial_link img{
        width: 100%;
        margin-bottom: 0.1em;
    }

    .tutorial_link p{
        width: 100%;
        font-size: 0.3em;
        text-decoration: underline;
    }
    


    .cont{
        padding-bottom: 5em;
    }


    p{
        margin-top: 1em;
        font-size: 0.4em;
        color: var(--secondary-text);
        font-family: 'Input-Mono-Narrow-Thin', monospace;
    }


    h3{
        font-size: 0.8em;
        margin-bottom: 0.3em;
        margin-top: 1em;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        .tutorial_link_wrap{
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        .tutorial_link_wrap{
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        .tutorial_link_wrap{
            grid-template-columns: 1fr 1fr;
        }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        .tutorial_link_wrap{
            grid-template-columns: 1fr 1fr;
        }
    }
</style>