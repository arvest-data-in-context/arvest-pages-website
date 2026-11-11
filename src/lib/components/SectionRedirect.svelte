<script>
    // A section's old address (/en/community…): the sections have no page of their own any
    // more (their pages are in the top bar's menus), so this one sends to the section's first
    // page. Static hosting has no server redirect: a refresh, a client-side goto, and a link.
    // Search engines are told not to index it and where the page now is (canonical).
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { SITE_URL } from '$lib/scripts/seo.js';
    import { SECTION_HOME } from '$lib/scripts/nav.js';

    export let section = "community";

    $: lang = $page.params.lang || "en";
    $: target = `${base}/${lang}${SECTION_HOME[section]}`;

    onMount(() => {
        goto(target, { replaceState: true });
    });
</script>

<svelte:head>
    <title>Arvest</title>
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="{SITE_URL}/{lang}{SECTION_HOME[section]}" />
    <meta http-equiv="refresh" content="0; url={target}" />
</svelte:head>

<p class="moved"><a href={target}>{SITE_URL.replace("https://", "")}/{lang}{SECTION_HOME[section]}</a></p>

<style>
    .moved {
        padding: 2rem 0;
        color: var(--secondary-text);
    }
    .moved a {
        color: var(--primary);
    }
</style>
