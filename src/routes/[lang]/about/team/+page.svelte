<script>
    import Seo from '$lib/components/Seo.svelte';
    import SeoVocab from '$lib/data/vocab/seo.json';
    import AboutVocab from '$lib/data/vocab/about.json';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import TeamCard from '$lib/components/cards/TeamCard.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import TeamVocab from '$lib/data/vocab/team.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<Seo
    title={BCVocab.team[langVal]}
    description={SeoVocab.team[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal] },
        { text: BCVocab.team[langVal], href: base + "/" + langVal + "/about/team"}
      ]}
    />

<header class="page_head">
    <h1>{BCVocab.team[langVal]}</h1>
</header>

<div class="team">
    {#each TeamVocab.members as member}
        <TeamCard
            member_data = {member}
        />
    {/each}
</div>

<style>
    .team{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 860px;
    }
</style>
