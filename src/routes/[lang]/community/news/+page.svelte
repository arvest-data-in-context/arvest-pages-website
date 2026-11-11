<script>
    import Seo from '$lib/components/Seo.svelte';
    import CommunityVocab from '$lib/data/vocab/community.json';
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
    title={BCVocab.news[langVal]}
    description={CommunityVocab.blog.blurb[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.community[langVal] },
        { text: BCVocab.news[langVal], href: base + "/" + langVal + "/community/news" }
      ]}
    />

<header class="page_head">
    <h1>{BCVocab.news[langVal]}</h1>
</header>

<ArticleList articles={data.articles} type="news" section="community" />
