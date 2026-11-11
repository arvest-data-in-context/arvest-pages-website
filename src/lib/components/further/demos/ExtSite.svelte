<script>
    // A whole site: the extension follows the links from the first page, page after page
    // (as deep and as many as you set), and each page becomes a canvas of the same
    // manifest, filling the strip below. The finished picture: the site, all captured.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import ToolChrome from './ToolChrome.svelte';
    export let label = "";

    const nodes = [
        [320, 100, -1],
        [180, 170, 0], [320, 170, 0], [460, 170, 0],
        [130, 236, 1], [230, 236, 1], [410, 236, 3], [510, 236, 3],
    ];
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ToolChrome id="site" kind="browser" ext_on />

        {#each nodes as [x, y, parent], i}
            {#if parent >= 0}
                <path class="edge e{i}" d="M{nodes[parent][0]} {nodes[parent][1] + 18}C{nodes[parent][0]} {y - 20} {x} {nodes[parent][1] + 30} {x} {y - 18}" fill="none" stroke="#800080" stroke-width="1.5" stroke-opacity=".6" pathLength="1" />
            {/if}
        {/each}
        {#each nodes as [x, y], i}
            <g class="page n{i}">
                <rect x={x - 26} y={y - 18} width="52" height="36" rx="4" fill="#fff" stroke={i === 0 ? "#800080" : "#000"} stroke-width={i === 0 ? 2 : 1.2} />
                <rect x={x - 20} y={y - 12} width="22" height="14" fill="#d7ecf3" />
                <rect x={x + 6} y={y - 11} width="14" height="2.5" rx="1.25" fill="#9a9a9a" />
                <rect x={x + 6} y={y - 5} width="12" height="2.5" rx="1.25" fill="#9a9a9a" />
                <rect x={x - 20} y={y + 7} width="40" height="2.5" rx="1.25" fill="#ccc" />
            </g>
        {/each}

        <!-- the manifest's canvases, and the job's progress -->
        <rect x="40" y="282" width="560" height="96" rx="8" fill="#f7f4f8" stroke="#000" stroke-width="1.3" />
        {#each nodes as _, i}
            <g class="thumb c{i}">
                <rect x={56 + i * 66} y="294" width="54" height="66" rx="3" fill="#fff" stroke="#000" stroke-width="1.1" />
                <rect x={61 + i * 66} y="299" width="44" height="22" fill="#d7ecf3" />
                {#each [0, 1, 2] as j}
                    <rect x={61 + i * 66} y={327 + j * 8} width={44 - j * 10} height="2.5" rx="1.25" fill="#ccc" />
                {/each}
            </g>
        {/each}
        <rect x="56" y="366" width="528" height="4" rx="2" fill="#e3dee7" />
        <rect class="progress" x="56" y="366" width="528" height="4" rx="2" fill="#800080" />
    </svg>
</DemoFrame>

<style>
    .page,
    .thumb {
        transform-box: fill-box;
        transform-origin: center;
        animation: appear 12s ease-out infinite backwards;
    }

    @keyframes appear {
        0%   { opacity: 0; transform: scale(0.8); }
        3%   { opacity: 1; transform: none; }
        90%  { opacity: 1; }
        100% { opacity: 0; }
    }

    .edge {
        stroke-dasharray: 1;
        animation: edge 12s ease-out infinite backwards;
    }

    @keyframes edge {
        0%   { stroke-dashoffset: 1; }
        4%   { stroke-dashoffset: 0; }
        90%  { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 0; }
    }

    .n0, .c0 { animation-delay: 0.2s; }
    .e1, .n1 { animation-delay: 0.9s; } .c1 { animation-delay: 1.3s; }
    .e2, .n2 { animation-delay: 1.6s; } .c2 { animation-delay: 2s; }
    .e3, .n3 { animation-delay: 2.3s; } .c3 { animation-delay: 2.7s; }
    .e4, .n4 { animation-delay: 3s; }   .c4 { animation-delay: 3.4s; }
    .e5, .n5 { animation-delay: 3.7s; } .c5 { animation-delay: 4.1s; }
    .e6, .n6 { animation-delay: 4.4s; } .c6 { animation-delay: 4.8s; }
    .e7, .n7 { animation-delay: 5.1s; } .c7 { animation-delay: 5.5s; }

    .progress {
        transform-box: fill-box;
        transform-origin: left center;
        animation: progress 12s linear infinite;
    }

    @keyframes progress {
        0%   { transform: scaleX(0.01); }
        48%, 90% { transform: none; }
        100% { transform: scaleX(0.01); }
    }
</style>
