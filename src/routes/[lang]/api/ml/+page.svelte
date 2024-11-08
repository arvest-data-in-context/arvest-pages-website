<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
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
    

    <p>This page is currently under construction. Please return soon for more content.</p>
</div>

<style>
    .cont{
        padding-bottom: 5em;
    }

    p{
        font-size: 0.5em;
    }
</style>