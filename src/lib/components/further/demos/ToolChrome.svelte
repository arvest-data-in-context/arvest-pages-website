<svelte:options namespace="svg" />

<script>
    // A window in miniature (640 × 400) for the tools around Arvest. "browser": a web
    // browser (address bar, the extension's button at its right). "app": one of the local
    // tools, which run in the browser too but on this computer: its square mark, its pages
    // as pills (the current one purple), a "local" light. Words are grey lines, as in the
    // home page's demos.
    export let id = "tool";
    export let kind = "app";        // app | browser
    export let page = 0;
    export let pages = 3;
    export let mark = "mmm";        // mmm | lapa: the square's drawing
    export let ext_on = false;      // browser: the extension's button lit
</script>

<defs>
    <pattern id="dots-{id}" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#800080" fill-opacity="0.16" />
    </pattern>
</defs>

<rect x="0" y="0" width="640" height="400" fill="#f7f4f8" />

{#if kind === "browser"}
    <!-- tabs and address bar -->
    <rect x="0" y="0" width="640" height="56" fill="#eceaee" />
    <circle cx="16" cy="14" r="4.5" fill="#ff5f57" />
    <circle cx="30" cy="14" r="4.5" fill="#febc2e" />
    <circle cx="44" cy="14" r="4.5" fill="#28c840" />
    <path d="M64 28V12a6 6 0 0 1 6-6h120a6 6 0 0 1 6 6v16z" fill="#fff" />
    <rect x="76" y="14" width="80" height="3.5" rx="1.75" fill="#9a9a9a" />
    <rect x="0" y="28" width="640" height="28" fill="#fff" />
    <rect x="44" y="33" width="470" height="18" rx="9" fill="#f1eff3" />
    <rect x="58" y="40.5" width="150" height="3" rx="1.5" fill="#9a9a9a" />
    <path d="M14 42h12M14 42l5-5M14 42l5 5" fill="none" stroke="#4d4d4d" stroke-width="1.4" stroke-linecap="round" />
    <!-- the extension's button: the purple A -->
    <rect x="540" y="32" width="20" height="20" rx="5" fill={ext_on ? "#f4ecf4" : "none"} class="ext" />
    <g transform="translate(543 35) scale(0.109375)">
        <rect width="128" height="128" rx="28" fill="#800080" />
        <path fill-rule="evenodd" fill="#fff" d="M56 22h16l30 84H86l-6-18H48l-6 18H26zM53 74h22l-11-33z" />
    </g>
    <circle cx="582" cy="42" r="7" fill="none" stroke="#9a9a9a" stroke-width="1.3" />
    <circle cx="608" cy="42" r="2" fill="#9a9a9a" />
    <line x1="0" y1="56" x2="640" y2="56" stroke="#000" stroke-width="1.5" />
    <rect x="0" y="56.75" width="640" height="343.25" fill="#fff" />
{:else}
    <rect x="0" y="36" width="640" height="364" fill="url(#dots-{id})" />
    <rect x="0" y="0" width="640" height="36" fill="#fff" />
    <line x1="0" y1="36" x2="640" y2="36" stroke="#000" stroke-width="1.5" />
    <g transform="translate(12 8)">
        <rect width="20" height="20" rx="5" fill="#800080" />
        {#if mark === "mmm"}
            <!-- documents read into answers -->
            <rect x="4" y="5" width="6" height="8" rx="1" fill="#fff" />
            <path d="M12 9h4M12 12h4M12 15h3" stroke="#fff" stroke-width="1.4" stroke-linecap="round" />
        {:else}
            <!-- a little graph -->
            <path d="M6 6L14 10L7 15" fill="none" stroke="#fff" stroke-width="1.3" />
            <circle cx="6" cy="6" r="2.2" fill="#fff" />
            <circle cx="14" cy="10" r="2.2" fill="#fff" />
            <circle cx="7" cy="15" r="2.2" fill="#fff" />
        {/if}
    </g>
    <rect x="40" y="16" width="46" height="4" rx="2" fill="#000" />
    {#each Array(pages) as _, i}
        <rect x={104 + i * 70} y="10" width="62" height="16" rx="8" fill={i === page ? "#800080" : "none"} />
        <rect x={116 + i * 70} y="16.5" width="38" height="3" rx="1.5" fill={i === page ? "#fff" : "#9a9a9a"} />
    {/each}
    <!-- on this computer: a laptop and a green light -->
    <rect x="540" y="10" width="86" height="16" rx="8" fill="#fff" stroke="#ccc" />
    <circle cx="552" cy="18" r="3.2" fill="#2ecc71" />
    <rect x="561" y="13.5" width="12" height="8" rx="1.2" fill="none" stroke="#4d4d4d" stroke-width="1.1" />
    <path d="M558.5 23.5h17" stroke="#4d4d4d" stroke-width="1.1" stroke-linecap="round" />
    <rect x="582" y="16.5" width="34" height="3" rx="1.5" fill="#9a9a9a" />
{/if}
