<script>
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

<svelte:head>
    <title>Arvest | {BCVocab.cite[langVal]}</title>
</svelte:head>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal], href: base + "/" + langVal + "/about"},
        { text: BCVocab.cite[langVal], href: base + "/" + langVal + "/about/cite"}
      ]}
    />

<div class="cont">
    <h1>{CiteVocab.main.title[langVal]}</h1>
    <p>
        {CiteVocab.main.desc[langVal]}
    </p>

    <div>
        <h2>{CiteVocab.jdh.title[langVal]}</h2>
        <p>{@html CiteVocab.jdh.desc[langVal]}</p>
        <div class="button_resizer">
            <BigButton
                url = {CiteVocab.jdh.link}
                label = {"Link"}
            />
        </div>
        <CodeBox 
            code = {CiteVocab.jdh.reference[langVal]}
        />
    </div>
</div>

<style>
    .cont{
        padding-bottom: 5em;
    }
    h1{
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }
    p{
        font-size: 0.6em;
    }

    h2{
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        font-size: 0.8em;
    }
    .button_resizer{
        padding-top: 1em;
        font-size: 0.7em;
        padding-bottom: 1em;
    }
</style>