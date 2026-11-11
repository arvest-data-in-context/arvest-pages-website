<script>
    // mmm's answers as data: the files of the corpus as points (here, by date and length),
    // grouped in clusters; a point opens its file. The finished picture: the clusters and
    // one file shown.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import KindTile from '$lib/components/front_page/demos/KindTile.svelte';
    import ToolChrome from './ToolChrome.svelte';
    export let label = "";

    // a small, fixed scatter in three clusters
    const clusters = [
        { c: "#800080", cx: 170, cy: 270, pts: [[150, 260], [168, 284], [186, 262], [160, 296], [196, 280], [176, 250], [140, 280]] },
        { c: "#2b7a99", cx: 330, cy: 170, pts: [[310, 160], [332, 150], [350, 176], [318, 186], [344, 196], [300, 178], [362, 160]] },
        { c: "#2e7d32", cx: 480, cy: 250, pts: [[470, 240], [492, 232], [500, 262], [462, 268], [484, 280], [512, 246]] },
    ];
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ToolChrome id="mmmgraph" mark="mmm" page={2} />

        <!-- axes -->
        <rect x="40" y="52" width="560" height="320" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
        <path d="M80 340H576M80 340V76" stroke="#000" stroke-width="1.3" />
        {#each [0, 1, 2, 3, 4] as i}
            <line x1={80 + i * 120} y1="340" x2={80 + i * 120} y2="345" stroke="#000" />
            <line x1="75" y1={340 - i * 64} x2="80" y2={340 - i * 64} stroke="#000" />
            <line x1="80" y1={340 - i * 64} x2="576" y2={340 - i * 64} stroke="#eee9f1" />
        {/each}
        <rect x="300" y="354" width="60" height="3" rx="1.5" fill="#9a9a9a" />

        {#each clusters as cl, k}
            <ellipse class="hull h{k}" cx={cl.cx} cy={cl.cy} rx="56" ry="42" fill={cl.c} fill-opacity=".07" stroke={cl.c} stroke-width="1.4" stroke-dasharray="5 4" />
            {#each cl.pts as [x, y], i}
                <circle class="pt" style="animation-delay: {0.2 + k * 0.9 + i * 0.12}s" cx={x} cy={y} r="6" fill={cl.c} fill-opacity=".8" stroke="#fff" stroke-width="1.2" />
            {/each}
        {/each}

        <!-- one point chosen, its file -->
        <g class="pick">
            <circle cx="350" cy="176" r="11" fill="none" stroke="#000" stroke-width="1.6" />
            <path d="M360 168L404 120" stroke="#000" stroke-width="1.2" />
            <rect x="407" y="71" width="150" height="96" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="404" y="68" width="150" height="96" rx="7" fill="#fff" stroke="#000" stroke-width="1.5" />
            <KindTile kind="image" x={412} y={76} size={18} />
            <rect x="436" y="82" width="80" height="4" rx="2" fill="#000" />
            <rect x="412" y="102" width="56" height="52" fill="#d7ecf3" />
            <path d="M412 154l20-20 14 10 22-18v28z" fill="#7aa7b8" />
            <rect x="476" y="106" width="64" height="3" rx="1.5" fill="#9a9a9a" />
            <rect x="476" y="116" width="52" height="3" rx="1.5" fill="#9a9a9a" />
            <rect x="476" y="134" width="60" height="16" rx="8" fill="#800080" />
            <rect x="488" y="140.5" width="36" height="3" rx="1.5" fill="#fff" />
        </g>
    </svg>
</DemoFrame>

<style>
    .pt {
        transform-box: fill-box;
        transform-origin: center;
        animation: pt 12s ease-out infinite backwards;
    }

    @keyframes pt {
        0%   { opacity: 0; transform: scale(0); }
        3%   { opacity: 1; transform: none; }
        92%  { opacity: 1; }
        100% { opacity: 0; }
    }

    .hull {
        animation: hull 12s ease-out infinite;
    }
    .h1 { animation-delay: 0.3s; }
    .h2 { animation-delay: 0.6s; }

    @keyframes hull {
        0%, 32%  { opacity: 0; }
        38%, 92% { opacity: 1; }
        100%     { opacity: 0; }
    }

    .pick {
        animation: pick 12s ease-out infinite;
    }

    @keyframes pick {
        0%, 50%  { opacity: 0; transform: translateY(6px); }
        56%, 90% { opacity: 1; transform: none; }
        96%, 100% { opacity: 0; }
    }
</style>
