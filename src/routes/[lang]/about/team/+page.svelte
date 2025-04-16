<script>
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

<svelte:head>
    <title>Arvest | {BCVocab.team[langVal]}</title>
</svelte:head>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal], href: base + "/" + langVal + "/about"},
        { text: BCVocab.team[langVal], href: base + "/" + langVal + "/about/team"}
      ]}
    />

<div class="cont">
    {#each TeamVocab.members as member}
        <TeamCard
            member_data = {member}
        />
    {/each}
</div>

<style>
    .cont{
        padding-bottom: 5em;
    }

    p{
        font-size: 0.5em;
    }
</style>