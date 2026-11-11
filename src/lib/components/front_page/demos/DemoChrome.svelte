<svelte:options namespace="svg" />

<script>
    // An Arvest window in miniature (640 × 400): the top bar (Arvest, the pages as pills, the
    // current one purple), the side bar's icons, and the canvas's dot grid. Words are drawn
    // as grey lines so the demos read the same in every language.
    export let id = "demo";
    export let page = 0;          // which pill is the current page
    export let side = 0;          // which side icon is chosen
</script>

<defs>
    <pattern id="dots-{id}" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#800080" fill-opacity="0.16" />
    </pattern>
</defs>

<rect x="0" y="0" width="640" height="400" fill="#f7f4f8" />
<rect x="44" y="36" width="596" height="364" fill="url(#dots-{id})" />

<!-- the top bar -->
<rect x="0" y="0" width="640" height="36" fill="#fff" />
<line x1="0" y1="36" x2="640" y2="36" stroke="#000" stroke-width="1.5" />
<g transform="translate(12 9) scale(0.140625)">
    <rect width="128" height="128" rx="28" fill="#800080" />
    <path fill-rule="evenodd" fill="#fff" d="M56 22h16l30 84H86l-6-18H48l-6 18H26zM53 74h22l-11-33z" />
</g>
<text x="36" y="24" class="brand">Arvest</text>
{#each [0, 1, 2] as i}
    <rect x={112 + i * 74} y="10" width="66" height="16" rx="8" fill={i === page ? "#800080" : "none"} />
    <rect x={124 + i * 74} y="16.5" width="42" height="3" rx="1.5" fill={i === page ? "#fff" : "#9a9a9a"} />
{/each}
<rect x="476" y="10" width="54" height="16" rx="8" fill="#fff" stroke="#ccc" />
<circle cx="488" cy="18" r="3.2" fill="#2ecc71" />
<rect x="496" y="16.5" width="26" height="3" rx="1.5" fill="#9a9a9a" />
{#each [0, 1, 2] as i}
    <circle cx={552 + i * 26} cy="18" r="9" fill={i === 0 ? "#f4ecf4" : "#fff"} />
    <circle cx={552 + i * 26} cy="18" r="4.5" fill="none" stroke={i === 0 ? "#800080" : "#4d4d4d"} stroke-width="1.3" />
{/each}

<!-- the side bar -->
<rect x="0" y="36.75" width="44" height="363.25" fill="#fff" />
<line x1="44" y1="36.75" x2="44" y2="400" stroke="#e3dee7" stroke-width="1" />
{#each [0, 1, 2, 3] as i}
    <rect x="8" y={50 + i * 38} width="28" height="28" rx="6" fill={i === side ? "#f4ecf4" : "none"} />
    <rect x="15" y={57 + i * 38} width="14" height="14" rx="2.5" fill="none" stroke={i === side ? "#800080" : "#000"} stroke-width="1.3" />
{/each}

<style>
    .brand {
        font-family: var(--font-display);
        font-size: 17px;
        fill: #800080;
    }
</style>
