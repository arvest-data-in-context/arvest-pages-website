<script>
    // The process in time, and out: the activities on a timeline, then the whole graph
    // exported as Linked Art JSON-LD, a network for Gephi and a table of every assertion
    // with its source. The finished picture: the timeline and the three files.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import ToolChrome from './ToolChrome.svelte';
    export let label = "";

    const bars = [
        [70, 150, 0, "#800080"], [130, 120, 1, "#800080"], [210, 90, 2, "#2b7a99"],
        [250, 160, 0, "#800080"], [330, 60, 1, "#2e7d32"], [350, 90, 2, "#800080"],
    ];
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ToolChrome id="lapaexport" mark="lapa" page={2} />

        <!-- the timeline -->
        <rect x="24" y="56" width="452" height="220" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
        {#each [0, 1, 2, 3, 4, 5] as i}
            <line x1={70 + i * 70} y1="72" x2={70 + i * 70} y2="234" stroke="#eee9f1" />
            <rect x={60 + i * 70} y="246" width="22" height="3" rx="1.5" fill="#9a9a9a" />
        {/each}
        <line x1="44" y1="236" x2="456" y2="236" stroke="#000" stroke-width="1.2" />
        {#each bars as [x, w, lane, c], i}
            <g class="bar" style="animation-delay: {0.3 + i * 0.5}s">
                <rect {x} y={92 + lane * 46} width={w} height="28" rx="14" fill={c} fill-opacity=".14" stroke={c} stroke-width="1.4" />
                <rect x={x + 12} y={104.5 + lane * 46} width={Math.min(w - 24, 70)} height="3" rx="1.5" fill={c} />
            </g>
        {/each}
        <line class="now" x1="70" y1="76" x2="70" y2="236" stroke="#800080" stroke-width="2" />

        <!-- the export -->
        <rect x="24" y="296" width="452" height="2" fill="none" />
        <g class="go">
            <rect x="380" y="300" width="96" height="30" rx="15" fill="#800080" />
            <path d="M398 315h18M410 309l6 6-6 6" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="424" y="313.5" width="38" height="3" rx="1.5" fill="#fff" />
        </g>

        <!-- three files -->
        {#each [0, 1, 2] as i}
            <g class="file f{i}">
                <path d="M503 {63 + i * 106}h88l26 26v66a6 6 0 0 1-6 6H509a6 6 0 0 1-6-6z" fill="#000" fill-opacity=".12" />
                <path d="M500 {60 + i * 106}h88l26 26v66a6 6 0 0 1-6 6H506a6 6 0 0 1-6-6z" fill="#fff" stroke="#000" stroke-width="1.4" />
                <path d="M588 {60 + i * 106}v26h26" fill="#f4ecf4" stroke="#000" stroke-width="1.4" />
                {#if i === 0}
                    <!-- JSON-LD -->
                    <path d="M528 92c-7 0-7 4-7 8s0 6-5 6c5 0 5 2 5 6s0 8 7 8M566 92c7 0 7 4 7 8s0 6 5 6c-5 0-5 2-5 6s0 8-7 8" fill="none" stroke="#800080" stroke-width="2" stroke-linecap="round" />
                    <rect x="534" y="101" width="26" height="3" rx="1.5" fill="#800080" />
                    <rect x="534" y="109" width="18" height="3" rx="1.5" fill="#800080" />
                {:else if i === 1}
                    <!-- a network -->
                    <path d="M524 216L548 196L572 214L552 232Z" fill="none" stroke="#2b7a99" stroke-width="1.4" />
                    {#each [[524, 216], [548, 196], [572, 214], [552, 232]] as [x, y]}
                        <circle cx={x} cy={y} r="5" fill="#2b7a99" />
                    {/each}
                {:else}
                    <!-- a table -->
                    <rect x="518" y="292" width="64" height="40" fill="none" stroke="#2e7d32" stroke-width="1.3" />
                    <path d="M518 302h64M518 312h64M518 322h64M540 292v40M562 292v40" stroke="#2e7d32" stroke-width="1" />
                {/if}
            </g>
        {/each}
    </svg>
</DemoFrame>

<style>
    .bar {
        transform-box: fill-box;
        transform-origin: left center;
        animation: bar 12s ease-out infinite backwards;
    }

    @keyframes bar {
        0%   { opacity: 0; transform: scaleX(0.2); }
        4%   { opacity: 1; transform: none; }
        90%  { opacity: 1; }
        97%, 100% { opacity: 0; }
    }

    .now {
        animation: now 12s ease-in-out infinite;
        transform: translateX(370px);
    }

    @keyframes now {
        0%   { transform: none; }
        30%  { transform: translateX(370px); }
        100% { transform: translateX(370px); }
    }

    .go {
        transform-box: fill-box;
        transform-origin: center;
        animation: go 12s ease-out infinite;
    }

    @keyframes go {
        0%, 40%, 46%, 100% { transform: none; }
        43% { transform: scale(0.9); }
    }

    .file {
        animation: file 12s ease-out infinite backwards;
    }
    .f0 { animation-delay: 5.6s; }
    .f1 { animation-delay: 6.1s; }
    .f2 { animation-delay: 6.6s; }

    @keyframes file {
        0%   { opacity: 0; transform: translateX(-20px); }
        4%   { opacity: 1; transform: none; }
        48%  { opacity: 1; }
        52%, 100% { opacity: 1; }
    }
</style>
