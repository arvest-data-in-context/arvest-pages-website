<script>
    // "Navigate networks of documents": documents around a central one are tied to it by
    // links that draw themselves in, each with a name in a pill; the hub glows as they reach
    // it. Their own place (no animation) is the whole network.
    import DemoFrame from './DemoFrame.svelte';
    import DemoChrome from './DemoChrome.svelte';
    import KindTile from './KindTile.svelte';
    export let label = "";

    // the hub, and the documents round it
    const hub = { x: 342, y: 218 };
    const docs = [
        { kind: "image", x: 120, y: 96,  c: [210, 120] },
        { kind: "video", x: 520, y: 92,  c: [460, 110] },
        { kind: "audio", x: 110, y: 300, c: [200, 330] },
        { kind: "pdf",   x: 540, y: 316, c: [470, 340] },
        { kind: "text",  x: 330, y: 70,  c: [300, 130] },
    ];
    const W = 92, H = 48;
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <DemoChrome id="link" page={1} side={3} />

        <!-- the links, under the cards -->
        {#each docs as d, i}
            <path class="link k{i}" d="M{d.x} {d.y}Q{d.c[0]} {d.c[1]} {hub.x} {hub.y}" fill="none" stroke="#800080" stroke-width="1.8" stroke-opacity=".7" pathLength="1" />
        {/each}

        <!-- the documents -->
        {#each docs as d, i}
            <g class="doc o{i}">
                <rect x={d.x - W / 2 + 2} y={d.y - H / 2 + 2} width={W} height={H} rx="6" fill="#000" fill-opacity=".12" />
                <rect x={d.x - W / 2} y={d.y - H / 2} width={W} height={H} rx="6" fill="#fff" stroke="#000" stroke-width="1.4" />
                <KindTile kind={d.kind} x={d.x - W / 2 + 8} y={d.y - 12} size={24} />
                <rect x={d.x - W / 2 + 40} y={d.y - 7} width="40" height="4" rx="2" fill="#000" />
                <rect x={d.x - W / 2 + 40} y={d.y + 3} width="28" height="3" rx="1.5" fill="#9a9a9a" />
            </g>
        {/each}

        <!-- the names of the links, half way along -->
        {#each docs as d, i}
            {@const mx = 0.25 * d.x + 0.5 * d.c[0] + 0.25 * hub.x}
            {@const my = 0.25 * d.y + 0.5 * d.c[1] + 0.25 * hub.y}
            <g class="name n{i}">
                <rect x={mx - 22} y={my - 9} width="44" height="18" rx="9" fill="#fff" stroke="#800080" stroke-width="1.2" />
                <rect x={mx - 12} y={my - 1.5} width="24" height="3" rx="1.5" fill="#800080" />
            </g>
        {/each}

        <!-- the central document -->
        <circle class="pulse" cx={hub.x} cy={hub.y} r="62" fill="#800080" fill-opacity=".12" />
        <g>
            <rect x={hub.x - 62} y={hub.y - 38} width="128" height="80" rx="8" fill="#000" fill-opacity=".14" />
            <rect x={hub.x - 64} y={hub.y - 40} width="128" height="80" rx="8" fill="#fff" stroke="#800080" stroke-width="2.5" />
            <KindTile kind="image" x={hub.x - 54} y={hub.y - 32} size={14} />
            <rect x={hub.x - 34} y={hub.y - 27} width="60" height="4" rx="2" fill="#000" />
            <rect x={hub.x - 54} y={hub.y - 12} width="108" height="44" fill="#d7ecf3" />
            <path d="M{hub.x - 54} {hub.y + 32}l30-26 22 18 18-12 38 20z" fill="#7aa7b8" />
        </g>
    </svg>
</DemoFrame>

<style>
    .link {
        stroke-dasharray: 1;
        animation: link 11s ease-out infinite backwards;
    }
    .k0 { animation-delay: 0.6s; }
    .k1 { animation-delay: 1.3s; }
    .k2 { animation-delay: 2s; }
    .k3 { animation-delay: 2.7s; }
    .k4 { animation-delay: 3.4s; }

    @keyframes link {
        0%   { stroke-dashoffset: 1; opacity: 1; }
        8%   { stroke-dashoffset: 0; }
        82%  { stroke-dashoffset: 0; opacity: 1; }
        90%, 100% { stroke-dashoffset: 0; opacity: 0; }
    }

    .doc {
        transform-box: fill-box;
        transform-origin: center;
        animation: doc 11s ease-out infinite backwards;
    }
    .o0 { animation-delay: 0.2s; }
    .o1 { animation-delay: 0.9s; }
    .o2 { animation-delay: 1.6s; }
    .o3 { animation-delay: 2.3s; }
    .o4 { animation-delay: 3s; }

    @keyframes doc {
        0%   { opacity: 0; transform: scale(0.85); }
        5%   { opacity: 1; transform: none; }
        84%  { opacity: 1; transform: none; }
        92%, 100% { opacity: 0; transform: scale(0.95); }
    }

    .name {
        transform-box: fill-box;
        transform-origin: center;
        animation: name 11s ease-out infinite backwards;
    }
    .n0 { animation-delay: 1.4s; }
    .n1 { animation-delay: 2.1s; }
    .n2 { animation-delay: 2.8s; }
    .n3 { animation-delay: 3.5s; }
    .n4 { animation-delay: 4.2s; }

    @keyframes name {
        0%   { opacity: 0; transform: scale(0.6); }
        4%   { opacity: 1; transform: scale(1.08); }
        6%   { transform: none; }
        76%  { opacity: 1; }
        84%, 100% { opacity: 0; }
    }

    .pulse {
        transform-box: fill-box;
        transform-origin: center;
        animation: pulse 2.4s ease-out infinite;
    }

    @keyframes pulse {
        from { transform: scale(0.8); opacity: 1; }
        to   { transform: scale(1.35); opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
        .pulse { display: none; }
    }
</style>
