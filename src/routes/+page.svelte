<script>
    import { supported_langs } from '$lib/scripts/stores.js';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
  
    onMount(() => {
      const defaultLang = 'en';
      const browserLang = navigator.language.split('-')[0];
      const lang = supported_langs.includes(browserLang) ? browserLang : defaultLang;
      window.location.href = `${base}/${lang}`;
    });
</script>

<svelte:head>
  <title>Arvest</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<p>Redirect... </p>