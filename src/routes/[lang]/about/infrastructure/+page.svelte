<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import PlaceholderVocab from '$lib/data/vocab/placeholder.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal], href: base + "/" + langVal + "/about"},
        { text: BCVocab.about_arvest[langVal], href: base + "/" + langVal + "/about/infrastructure"}
      ]}
    />

<div class="cont">
    <p>{PlaceholderVocab.under_construction[langVal]}</p>
</div>

<style>
    .cont{
        padding-bottom: 5em;
    }

    p{
        font-size: 0.5em;
    }
</style>