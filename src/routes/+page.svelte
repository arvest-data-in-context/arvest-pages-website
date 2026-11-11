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
  <title>Arvest | Data in Context</title>
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://arvest.app/en" />
</svelte:head>

<div id="top_section">
    <h1>
        Arvest
    </h1>
    <p id="long_description">
      Consult, compare, organize and annotate documents, including images, videos and audio, on a virtual desktop.
    </p>
    <p>
      Redirecting… <a href="{base}/en" hreflang="en">English</a> · <a href="{base}/fr" hreflang="fr">Français</a>
    </p>
</div>