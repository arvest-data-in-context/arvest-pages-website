<svelte:options namespace="svg" />

<script>
    // What a document is, as the tool's KindIcon: a line icon on a small tile tinted with its
    // kind's hue. Drawn in a 24 × 24 box at (x, y), scaled to `size`.
    export let kind = "image";   // image, video, audio, text, pdf
    export let x = 0;
    export let y = 0;
    export let size = 24;

    const hues = {
        image: ["#e4f2f7", "#2b7a99"],
        video: ["#f3e6f3", "#800080"],
        audio: ["#e6f4ea", "#2e7d32"],
        text: ["#fff3d6", "#8a5a00"],
        pdf: ["#fdeeee", "#b3261e"]
    };
    $: [bg, ink] = hues[kind] || hues.image;
</script>

<g transform="translate({x} {y}) scale({size / 24})">
    <rect width="24" height="24" rx="5" fill={bg} />
    <g fill="none" stroke={ink} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        {#if kind === "image"}
            <rect x="5" y="6" width="14" height="12" rx="1.5" />
            <path d="M6 16l4-4 3 3 2-2 3 3" />
            <circle cx="15" cy="9.5" r="1.2" />
        {:else if kind === "video"}
            <rect x="5" y="6" width="14" height="12" rx="1.5" />
            <path d="M10.5 9.5v5l4-2.5z" fill={ink} />
        {:else if kind === "audio"}
            <path d="M5 12h1.5M8 9v6M10.5 7v10M13 10v4M15.5 8v8M18 11v2" />
        {:else if kind === "text"}
            <path d="M6 7.5h12M6 10.5h12M6 13.5h12M6 16.5h7" />
        {:else}
            <path d="M7 5h7l4 4v10H7z" />
            <path d="M14 5v4h4M9.5 13h6M9.5 16h4" />
        {/if}
    </g>
</g>
