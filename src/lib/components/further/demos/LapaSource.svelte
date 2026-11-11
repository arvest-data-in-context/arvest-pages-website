<script>
    // A sourced assertion: an entity (a person) and its properties, each one tied to the
    // document that attests it: a rehearsal photo, a PDF schedule, a web page, a IIIF
    // manifest. No fact without a trace. The finished picture: every property sourced.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import KindTile from '$lib/components/front_page/demos/KindTile.svelte';
    import ToolChrome from './ToolChrome.svelte';
    export let label = "";

    const docs = [["image", 70], ["pdf", 150], ["text", 230], ["video", 310]];
    const props = [[96, 120], [140, 90], [184, 130], [228, 100], [272, 110]];
    const ties = [[0, 0], [1, 1], [2, 0], [3, 2], [4, 3]];   // property → document
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ToolChrome id="lapasource" mark="lapa" page={0} />

        <!-- the sources -->
        {#each docs as [kind, y], i}
            <g>
                <rect x="27" y={y - 23} width="140" height="52" rx="6" fill="#000" fill-opacity=".12" />
                <rect x="24" y={y - 26} width="140" height="52" rx="6" fill="#fff" stroke="#000" stroke-width="1.3" />
                <KindTile {kind} x={34} y={y - 14} size={28} />
                <rect x="72" y={y - 8} width="76" height="4" rx="2" fill="#000" />
                <rect x="72" y={y + 2} width="50" height="3" rx="1.5" fill="#9a9a9a" />
            </g>
        {/each}

        <!-- the ties -->
        {#each ties as [p, d], i}
            <path class="tie t{i}" d="M164 {docs[d][1]}C230 {docs[d][1]} 236 {props[p][0] + 64} 300 {props[p][0] + 64}" fill="none" stroke="#800080" stroke-width="1.6" pathLength="1" />
        {/each}

        <!-- the entity -->
        <rect x="303" y="59" width="314" height="314" rx="8" fill="#000" fill-opacity=".12" />
        <rect x="300" y="56" width="314" height="314" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
        <circle cx="330" cy="88" r="15" fill="#add8e6" stroke="#000" stroke-width="1.2" />
        <circle cx="330" cy="83" r="5" fill="#fff" />
        <path d="M321 97c1-6 5-8 9-8s8 2 9 8" fill="#fff" />
        <rect x="356" y="80" width="120" height="5" rx="2.5" fill="#000" />
        <rect x="356" y="92" width="60" height="3" rx="1.5" fill="#2b7a99" />
        <line x1="300" y1="116" x2="614" y2="116" stroke="#e3dee7" stroke-width="1.2" />
        {#each props as [y, w], i}
            <g>
                <rect x="316" y={y + 32} width="56" height="3" rx="1.5" fill="#9a9a9a" />
                <rect x="316" y={y + 42} width={w} height="4" rx="2" fill="#000" />
                <g class="src s{i}">
                    <rect x="520" y={y + 30} width="78" height="20" rx="10" fill="#f4ecf4" stroke="#800080" />
                    <path d="M532 {y + 36}h6v8h-6zM540 {y + 36}l4 4-4 4" fill="none" stroke="#800080" stroke-width="1.2" stroke-linejoin="round" />
                    <rect x="552" y={y + 38.5} width="36" height="3" rx="1.5" fill="#800080" />
                </g>
                {#if i < 4}<line x1="316" y1={y + 58} x2="598" y2={y + 58} stroke="#eee9f1" />{/if}
            </g>
        {/each}
    </svg>
</DemoFrame>

<style>
    .tie {
        stroke-dasharray: 1;
        animation: tie 12s ease-out infinite backwards;
    }

    @keyframes tie {
        0%   { stroke-dashoffset: 1; }
        5%   { stroke-dashoffset: 0; }
        86%  { opacity: 1; }
        94%, 100% { stroke-dashoffset: 0; opacity: 0; }
    }

    .src {
        transform-box: fill-box;
        transform-origin: center;
        animation: src 12s ease-out infinite backwards;
    }

    @keyframes src {
        0%   { opacity: 0; transform: scale(0.6); }
        3%   { opacity: 1; transform: scale(1.1); }
        5%   { transform: none; }
        86%  { opacity: 1; }
        94%, 100% { opacity: 0; }
    }

    .t0 { animation-delay: 0.6s; }  .s0 { animation-delay: 1.2s; }
    .t1 { animation-delay: 1.8s; }  .s1 { animation-delay: 2.4s; }
    .t2 { animation-delay: 3s; }    .s2 { animation-delay: 3.6s; }
    .t3 { animation-delay: 4.2s; }  .s3 { animation-delay: 4.8s; }
    .t4 { animation-delay: 5.4s; }  .s4 { animation-delay: 6s; }
</style>
