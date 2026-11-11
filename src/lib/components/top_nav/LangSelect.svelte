<script>
    // The language: one choice among two, a segmented pill (docs/design.md: ".segmented").
    import { lang, supported_langs } from '$lib/scripts/stores.js';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';

    let setLang;
    lang.subscribe(value => {
        setLang = value;
    });

    const names = { en: "English", fr: "Français" };

    function choose(to) {
        if (to === setLang) return;
        lang.set(to);

        // Same page, other language: /en/learn → /fr/learn.
        let clean = $page.url.pathname.replace(base, "");
        let final = clean.slice(3);
        goto(base + "/" + to + final, { replaceState: true });
    }
</script>

<div class="segmented" role="group" aria-label="Language">
    {#each supported_langs as l}
        <button
            type="button"
            class:on={setLang === l}
            aria-pressed={setLang === l}
            title={names[l]}
            lang={l}
            on:click={() => choose(l)}
        >{l.toUpperCase()}</button>
    {/each}
</div>
