<script>
    import Seo from '$lib/components/Seo.svelte';
    import CommunityVocab from '$lib/data/vocab/community.json';
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

<Seo
    title={BCVocab.forum[langVal]}
    description={CommunityVocab.forum.blurb[langVal]}
    noindex
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.community[langVal] },
        { text: BCVocab.forum[langVal], href: base + "/" + langVal + "/community/forum"}
      ]}
    />


<header class="page_head">
    <h1>{BCVocab.forum[langVal]}</h1>
</header>

<div class="prose">
    <p>{PlaceholderVocab.discourse.part_1[langVal]} <a href="https://www.discourse.org">discourse</a> {PlaceholderVocab.discourse.part_2[langVal]}</p>
</div>
