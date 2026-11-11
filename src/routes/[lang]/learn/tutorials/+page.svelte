<script>
    import Seo from '$lib/components/Seo.svelte';
    import LearnVocab from '$lib/data/vocab/learn.json';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';
    import ArticleList from '$lib/components/general_ui/ArticleList.svelte';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    export let data;
</script>

<Seo
    title={BCVocab.tutorials[langVal]}
    description={LearnVocab.tutorials.blurb[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.learn[langVal] },
        { text: BCVocab.tutorials[langVal], href: base + "/" + langVal + "/learn/tutorials" }
      ]}
    />

<header class="page_head">
    <h1>{BCVocab.tutorials[langVal]}</h1>
</header>

<ArticleList articles={data.articles} type="tutorials" section="learn" />
