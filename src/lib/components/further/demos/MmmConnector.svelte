<script>
    // mmm's connector: the corpus stays on this computer (left), and Arvest (right) lists
    // its files among the account's documents, each marked with a laptop: nothing is
    // uploaded. mmm's answers come with them as data. The finished picture: the list full.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import DemoChrome from '$lib/components/front_page/demos/DemoChrome.svelte';
    import KindTile from '$lib/components/front_page/demos/KindTile.svelte';
    export let label = "";

    const files = [["image", 80], ["video", 66], ["pdf", 92], ["audio", 72]];
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <DemoChrome id="mmmconn" page={1} side={1} />

        <!-- this computer: the corpus, in its folder -->
        <rect x="62" y="56" width="176" height="316" rx="12" fill="#fff" fill-opacity=".6" stroke="#4d4d4d" stroke-width="1.3" stroke-dasharray="5 5" />
        <g transform="translate(76 68)">
            <rect x="0" y="0" width="22" height="15" rx="2" fill="none" stroke="#4d4d4d" stroke-width="1.3" />
            <path d="M-4 19h30" stroke="#4d4d4d" stroke-width="1.3" stroke-linecap="round" />
        </g>
        <rect x="108" y="74" width="60" height="3.5" rx="1.75" fill="#4d4d4d" />
        {#each files as [kind], i}
            <g>
                <rect x="78" y={104 + i * 62} width="144" height="50" rx="6" fill="#fff" stroke="#000" stroke-width="1.2" />
                <KindTile {kind} x={88} y={114 + i * 62} size={30} />
                <rect x="128" y={122 + i * 62} width="70" height="4" rx="2" fill="#000" />
                <rect x="128" y={132 + i * 62} width="44" height="3" rx="1.5" fill="#9a9a9a" />
            </g>
        {/each}

        <!-- the connector -->
        <path class="flow" d="M238 214H300" />
        <circle cx="269" cy="214" r="13" fill="#fff" stroke="#800080" stroke-width="1.6" />
        <path d="M263 214h12M269 208v12" stroke="#800080" stroke-width="1.6" stroke-linecap="round" class="plug" />

        <!-- Arvest's documents -->
        <rect x="303" y="59" width="314" height="314" rx="8" fill="#000" fill-opacity=".12" />
        <rect x="300" y="56" width="314" height="314" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
        <rect x="316" y="72" width="70" height="4" rx="2" fill="#000" />
        <rect x="520" y="66" width="80" height="18" rx="9" fill="#f4ecf4" stroke="#800080" />
        <rect x="534" y="73.5" width="52" height="3" rx="1.5" fill="#800080" />
        <line x1="300" y1="92" x2="614" y2="92" stroke="#000" stroke-width="1.2" />
        {#each files as [kind, w], i}
            <g class="row r{i}">
                <KindTile {kind} x={316} y={106 + i * 64} size={30} />
                <rect x="358" y={114 + i * 64} width={w + 40} height="4.5" rx="2.25" fill="#000" />
                <rect x="358" y={126 + i * 64} width={w} height="3" rx="1.5" fill="#9a9a9a" />
                <!-- on this computer -->
                <g transform="translate(560 {111 + i * 64})">
                    <rect width="36" height="20" rx="10" fill="#fff" stroke="#ccc" />
                    <rect x="11" y="5" width="13" height="8" rx="1.2" fill="none" stroke="#4d4d4d" stroke-width="1.1" />
                    <path d="M8.5 15.5h18" stroke="#4d4d4d" stroke-width="1.1" stroke-linecap="round" />
                </g>
                <!-- mmm's data -->
                <rect x="358" y={135 + i * 64} width="34" height="12" rx="6" fill="#e8f4f8" />
                <rect x="398" y={135 + i * 64} width="46" height="12" rx="6" fill="#e8f4f8" />
                {#if i < 3}<line x1="300" y1={158 + i * 64} x2="614" y2={158 + i * 64} stroke="#eee9f1" />{/if}
            </g>
        {/each}
    </svg>
</DemoFrame>

<style>
    .flow {
        fill: none;
        stroke: #800080;
        stroke-width: 1.8;
        stroke-dasharray: 5 6;
        animation: march 1s linear infinite;
    }

    @keyframes march {
        to { stroke-dashoffset: -22; }
    }

    .row {
        animation: row 10s ease-out infinite backwards;
    }
    .r0 { animation-delay: 0.6s; }
    .r1 { animation-delay: 1.4s; }
    .r2 { animation-delay: 2.2s; }
    .r3 { animation-delay: 3s; }

    @keyframes row {
        0%   { opacity: 0; transform: translateX(-14px); }
        5%   { opacity: 1; transform: none; }
        86%  { opacity: 1; }
        94%, 100% { opacity: 0; }
    }
</style>
