<script>
    import Seo from '$lib/components/Seo.svelte';
    import SeoVocab from '$lib/data/vocab/seo.json';
    import AboutVocab from '$lib/data/vocab/about.json';
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

<Seo
    title={BCVocab.contact[langVal]}
    description={SeoVocab.contact[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal] },
        { text: BCVocab.contact[langVal], href: base + "/" + langVal + "/about/contact"}
      ]}
    />


<header class="page_head">
    <h1>{BCVocab.contact[langVal]}</h1>
</header>

<div class="prose">
    <h2>{ContactVocab.general.title[langVal]}</h2>
    <div>{@html ContactVocab.general.content[langVal]}</div>

    <h2>{ContactVocab.bugs.title[langVal]}</h2>
    <div>{@html ContactVocab.bugs.content[langVal]}</div>
</div>

<style>
    .prose h2:first-child{
        padding-top: 0;
    }
</style>