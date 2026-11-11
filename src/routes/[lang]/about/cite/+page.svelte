<script>
    import Seo from '$lib/components/Seo.svelte';
    import AboutVocab from '$lib/data/vocab/about.json';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import CodeBox from '$lib/components/general_ui/CodeBox.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import CiteVocab from '$lib/data/vocab/cite.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<Seo
    title={BCVocab.cite[langVal]}
    description={AboutVocab.cite.blurb[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal] },
        { text: BCVocab.cite[langVal], href: base + "/" + langVal + "/about/cite"}
      ]}
    />

<header class="page_head">
    <h1>{CiteVocab.main.title[langVal]}</h1>
    <p class="lede">{CiteVocab.main.desc[langVal]}</p>
</header>

<div class="prose">

    <div>
        <h2>{CiteVocab.jdh.title[langVal]}</h2>
        <div>{@html CiteVocab.jdh.desc[langVal]}</div>
        <div class="button_resizer">
            <BigButton
                url = {CiteVocab.jdh.link}
                label = {"Link"}
                kind = "secondary"
            />
        </div>
        <CodeBox 
            code = {CiteVocab.jdh.reference[langVal]}
        />
    </div>
</div>

<style>
    .prose h2{
        padding-top: 0;
    }
    .button_resizer{
        padding: 0.25rem 0 1.25rem;
    }
</style>