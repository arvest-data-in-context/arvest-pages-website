<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import ContactVocab from '$lib/data/vocab/contact.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<svelte:head>
    <title>Arvest | {BCVocab.contact[langVal]}</title>
</svelte:head>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.community[langVal], href: base + "/" + langVal + "/community"},
        { text: BCVocab.contact[langVal], href: base + "/" + langVal + "/community/contact"}
      ]}
    />


<div class="cont">
    <h2>{ContactVocab.general.title[langVal]}</h2>
    <p>{@html ContactVocab.general.content[langVal]}</p>

    <h2>{ContactVocab.bugs.title[langVal]}</h2>
    <p>{@html ContactVocab.bugs.content[langVal]}</p>
</div>

<style>
    .cont{
        padding-bottom: 5em;
        margin-top: 2em;
    }

    p{
        font-size: 0.5em;
        width: 75%;
        margin-bottom: 3em;
    }

    h2{
        font-size: 0.8em;
        margin-bottom: 0.5em;
    }
</style>