<script>
    // The graph as it is built: people, activities (rehearsals, meetings), places, objects
    // and the source documents, each type its colour, linked as the assertions are made.
    // The finished picture: the whole graph.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import ToolChrome from './ToolChrome.svelte';
    export let label = "";

    const colour = { person: "#2b7a99", activity: "#800080", place: "#2e7d32", object: "#8a5a00", doc: "#4d4d4d" };
    const nodes = [
        [320, 210, "activity", 16],
        [200, 140, "person", 12], [220, 290, "person", 12], [450, 150, "person", 12],
        [470, 290, "place", 13], [150, 220, "object", 10], [330, 100, "activity", 12],
        [560, 210, "activity", 11], [100, 320, "doc", 9], [380, 330, "doc", 9], [560, 90, "doc", 9], [110, 100, "doc", 9],
    ];
    const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [6, 1], [6, 3], [7, 3], [7, 4], [2, 8], [0, 9], [7, 10], [1, 11], [5, 2]];
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ToolChrome id="lapagraph" mark="lapa" page={1} />

        {#each edges as [a, b], i}
            <path class="edge" style="animation-delay: {0.4 + i * 0.35}s" d="M{nodes[a][0]} {nodes[a][1]}L{nodes[b][0]} {nodes[b][1]}" stroke="#9a9a9a" stroke-width="1.4" pathLength="1" />
        {/each}
        {#each nodes as [x, y, type, r], i}
            <g class="node" style="animation-delay: {i * 0.3}s">
                {#if type === "doc"}
                    <rect x={x - r} y={y - r * 1.2} width={r * 2} height={r * 2.4} rx="2" fill="#fff" stroke={colour.doc} stroke-width="1.5" />
                    <path d="M{x - r / 2} {y - 3}h{r}M{x - r / 2} {y + 2}h{r}" stroke={colour.doc} stroke-width="1.1" />
                {:else}
                    <circle cx={x} cy={y} r={r + 4} fill={colour[type]} fill-opacity=".14" />
                    <circle cx={x} cy={y} {r} fill={colour[type]} stroke="#fff" stroke-width="1.5" />
                {/if}
            </g>
        {/each}

        <!-- the legend: the types' colours -->
        <rect x="24" y="352" width="300" height="30" rx="15" fill="#fff" stroke="#ccc" />
        {#each Object.values(colour) as c, i}
            <circle cx={42 + i * 58} cy="367" r="6" fill={c} />
            <rect x={52 + i * 58} y="365.5" width="28" height="3" rx="1.5" fill="#9a9a9a" />
        {/each}
    </svg>
</DemoFrame>

<style>
    .node {
        transform-box: fill-box;
        transform-origin: center;
        animation: node 12s ease-out infinite backwards;
    }

    @keyframes node {
        0%   { opacity: 0; transform: scale(0.3); }
        3%   { opacity: 1; transform: scale(1.12); }
        5%   { transform: none; }
        88%  { opacity: 1; }
        96%, 100% { opacity: 0; }
    }

    .edge {
        stroke-dasharray: 1;
        animation: edge 12s ease-out infinite backwards;
    }

    @keyframes edge {
        0%   { stroke-dashoffset: 1; }
        4%   { stroke-dashoffset: 0; }
        88%  { opacity: 1; }
        96%, 100% { stroke-dashoffset: 0; opacity: 0; }
    }
</style>
