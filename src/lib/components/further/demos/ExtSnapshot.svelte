<script>
    // A snapshot: the page is captured top to bottom (the purple line), and becomes one
    // tall canvas in a IIIF manifest, with an annotation over each image, video and block
    // of text, each linking to the original. The finished picture: every annotation drawn.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import ToolChrome from './ToolChrome.svelte';
    export let label = "";

    // what the page holds: [x, y, w, h, kind]
    const blocks = [
        [40, 72, 300, 6, "title"],
        [40, 92, 140, 96, "image"],
        [196, 92, 144, 96, "video"],
        [40, 204, 300, 40, "text"],
        [40, 258, 300, 40, "text"],
        [40, 312, 140, 70, "image"],
        [196, 312, 144, 70, "text"],
    ];
    // the canvas: the page at 0.56, at (420, 72)
    const S = 0.56, OX = 420 - 40 * S, OY = 80 - 72 * S;
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ToolChrome id="snapshot" kind="browser" ext_on />

        <!-- the page -->
        {#each blocks as [x, y, w, h, k]}
            {#if k === "title"}
                <rect {x} {y} width="160" height={h} rx="3" fill="#000" />
            {:else if k === "image"}
                <rect {x} {y} width={w} height={h} fill="#d7ecf3" />
                <path d="M{x} {y + h}l{w * 0.35} {-h * 0.45} {w * 0.25} {h * 0.25} {w * 0.4} {h * 0.2}z" fill="#7aa7b8" />
            {:else if k === "video"}
                <rect {x} {y} width={w} height={h} fill="#26232c" />
                <path d="M{x + w / 2 - 8} {y + h / 2 - 11}v22l18-11z" fill="#fff" fill-opacity=".85" />
            {:else}
                {#each Array(Math.floor(h / 13)) as _, i}
                    <rect {x} y={y + 4 + i * 13} width={w - (i % 2) * 40} height="3" rx="1.5" fill="#bdbdbd" />
                {/each}
            {/if}
        {/each}
        <g class="scan">
            <rect x="30" y="64" width="330" height="18" fill="#800080" fill-opacity=".08" />
            <line x1="30" y1="82" x2="360" y2="82" stroke="#800080" stroke-width="2" />
        </g>

        <!-- the manifest: one tall canvas -->
        <g class="canvas">
            <rect x="407" y="67" width="200" height="210" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="404" y="64" width="200" height="210" rx="7" fill="#fff" stroke="#000" stroke-width="1.5" />
            <g transform="translate({OX} {OY}) scale({S})">
                {#each blocks as [x, y, w, h, k]}
                    <rect {x} {y} width={k === "title" ? 160 : w} height={h} fill={k === "image" ? "#d7ecf3" : k === "video" ? "#26232c" : k === "title" ? "#000" : "#e6e6e6"} />
                {/each}
            </g>
            {#each blocks.slice(1) as [x, y, w, h, k], i}
                <rect class="anno a{i}" x={OX + x * S - 2} y={OY + y * S - 2} width={w * S + 4} height={h * S + 4} rx="2"
                      fill="#800080" fill-opacity=".1" stroke={k === "text" ? "#2b7a99" : "#800080"} stroke-width="1.5" stroke-dasharray={k === "text" ? "3 2" : "none"} />
            {/each}
        </g>
        <!-- its tags -->
        <g class="tags">
            {#each [["#800080", 64], ["#2b7a99", 52], ["#800080", 58]] as [c, w], i}
                <rect x={404 + [0, 72, 132][i]} y="290" width={w} height="18" rx="9" fill="#fff" stroke={c} />
                <rect x={416 + [0, 72, 132][i]} y="297.5" width={w - 24} height="3" rx="1.5" fill={c} />
            {/each}
        </g>
    </svg>
</DemoFrame>

<style>
    .scan {
        animation: scan 10s linear infinite;
    }

    @keyframes scan {
        0%   { transform: translateY(0); opacity: 1; }
        35%  { transform: translateY(300px); opacity: 1; }
        38%, 100% { transform: translateY(300px); opacity: 0; }
    }

    .canvas {
        transform-box: fill-box;
        transform-origin: left center;
        animation: canvas 10s ease-out infinite;
    }

    @keyframes canvas {
        0%, 30%  { opacity: 0; transform: translateX(-16px); }
        38%, 94% { opacity: 1; transform: none; }
        100%     { opacity: 0; }
    }

    .anno {
        animation: anno 10s ease-out infinite backwards;
    }
    .a0 { animation-delay: 4s; }
    .a1 { animation-delay: 4.4s; }
    .a2 { animation-delay: 4.8s; }
    .a3 { animation-delay: 5.2s; }
    .a4 { animation-delay: 5.6s; }
    .a5 { animation-delay: 6s; }

    @keyframes anno {
        0%   { opacity: 0; }
        4%   { opacity: 1; }
        100% { opacity: 1; }
    }

    .tags {
        animation: tags 10s ease-out infinite;
    }

    @keyframes tags {
        0%, 70%  { opacity: 0; transform: translateY(4px); }
        76%, 94% { opacity: 1; transform: none; }
        100%     { opacity: 0; }
    }
</style>
