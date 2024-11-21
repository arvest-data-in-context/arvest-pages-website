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
        { text: BCVocab.community[langVal], href: base + "/" + langVal + "/community"},
        { text: BCVocab.forum[langVal], href: base + "/" + langVal + "/community/forum"}
      ]}
    />


<div class="cont">
    <p>{PlaceholderVocab.discourse.part_1[langVal]} <a href="https://www.discourse.org">discourse</a> {PlaceholderVocab.discourse.part_2[langVal]}</p>
</div>

<style>
    .cont{
        padding-bottom: 5em;
    }

    p{
        font-size: 0.5em;
    }
</style>