<script>
    // "Annotate": on a document (a stage photograph), a region is drawn out with the
    // annotation tool; its annotation card comes in beside it, with a tag and a few lines.
    // Their own place (no animation) is the finished annotation.
    import DemoFrame from './DemoFrame.svelte';
    import DemoChrome from './DemoChrome.svelte';
    import KindTile from './KindTile.svelte';
    export let label = "";
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <DemoChrome id="annotate" page={0} side={2} />

        <!-- the document -->
        <rect x="73" y="59" width="340" height="300" rx="7" fill="#000" fill-opacity=".12" />
        <rect x="70" y="56" width="340" height="300" rx="7" fill="#fff" stroke="#000" stroke-width="1.5" />
        <KindTile kind="image" x={78} y={62} size={14} />
        <rect x="98" y="67" width="110" height="4" rx="2" fill="#000" />
        <line x1="70" y1="82" x2="410" y2="82" stroke="#000" stroke-width="1.2" />

        <!-- the stage -->
        <rect x="80" y="90" width="320" height="256" fill="#2a2430" />
        <path d="M80 90h320v26q-80 18-160 0t-160 0z" fill="#7a1f3d" />
        <path d="M80 90h40v256h-40zM360 90h40v256h-40z" fill="#5e1630" />
        <path d="M200 116h80l60 230h-200z" fill="#fff" fill-opacity=".08" />
        <rect x="80" y="300" width="320" height="46" fill="#4a3b2f" />
        <g>
            <circle cx="214" cy="226" r="11" fill="#e9d8c4" />
            <path d="M202 240h24l8 62h-40z" fill="#c9b29b" />
            <circle cx="270" cy="232" r="10" fill="#e9d8c4" />
            <path d="M259 245h22l6 57h-34z" fill="#9fb6c4" />
            <path d="M226 252l32 -6" stroke="#e9d8c4" stroke-width="4" stroke-linecap="round" />
        </g>

        <!-- the annotation tool -->
        <g transform="translate(148 316)">
            <rect x="2" y="2" width="184" height="30" rx="15" fill="#000" fill-opacity=".12" />
            <rect width="184" height="30" rx="15" fill="#fff" stroke="#000" stroke-width="1.3" />
            <rect x="8" y="5" width="20" height="20" rx="10" fill="#800080" />
            <rect x="13" y="10" width="10" height="10" fill="none" stroke="#fff" stroke-width="1.4" />
            {#each [0, 1, 2, 3] as i}
                <circle cx={52 + i * 34} cy="15" r="6" fill="none" stroke="#4d4d4d" stroke-width="1.3" />
            {/each}
        </g>

        <!-- the region drawn -->
        <rect class="region" x="188" y="200" width="112" height="108" fill="#800080" fill-opacity=".14" stroke="#800080" stroke-width="2" />
        <g class="handle">
            <rect x="296" y="304" width="8" height="8" fill="#fff" stroke="#800080" stroke-width="1.5" />
        </g>

        <!-- the link from region to card -->
        <path class="tie" d="M300 230C350 230 380 160 440 150" fill="none" stroke="#800080" stroke-width="1.5" stroke-dasharray="4 4" pathLength="1" />

        <!-- the annotation card -->
        <g class="note">
            <rect x="443" y="83" width="170" height="190" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="440" y="80" width="170" height="190" rx="7" fill="#fff" stroke="#000" stroke-width="1.5" />
            <rect x="440" y="80" width="5" height="190" rx="2" fill="#800080" />
            <circle cx="462" cy="100" r="9" fill="#add8e6" />
            <rect x="478" y="97" width="64" height="4" rx="2" fill="#000" />
            <line x1="440" y1="118" x2="610" y2="118" stroke="#e3dee7" stroke-width="1.2" />
            <g class="tagpill">
                <rect x="454" y="130" width="72" height="18" rx="9" fill="#f4ecf4" stroke="#800080" />
                <rect x="466" y="137.5" width="48" height="3" rx="1.5" fill="#800080" />
            </g>
            <rect x="454" y="162" width="140" height="3.5" rx="1.75" fill="#4d4d4d" class="ln l1" />
            <rect x="454" y="176" width="126" height="3.5" rx="1.75" fill="#4d4d4d" class="ln l2" />
            <rect x="454" y="190" width="134" height="3.5" rx="1.75" fill="#4d4d4d" class="ln l3" />
            <rect x="454" y="204" width="80" height="3.5" rx="1.75" fill="#4d4d4d" class="ln l4" />
            <rect x="454" y="236" width="56" height="20" rx="10" fill="#800080" />
            <rect x="466" y="244.5" width="32" height="3" rx="1.5" fill="#fff" />
        </g>

        <!-- the pointer -->
        <g class="cursor">
            <path d="M0 0v17l4.5-4.2 3 6.8 3-1.3-3-6.6H14z" fill="#000" stroke="#fff" stroke-width="1.2" stroke-linejoin="round" />
        </g>
    </svg>
</DemoFrame>

<style>
    .region {
        transform-box: fill-box;
        transform-origin: left top;
        animation: draw 10s ease-in-out infinite;
    }

    @keyframes draw {
        0%, 8%   { transform: scale(0.02); opacity: 0; }
        10%      { transform: scale(0.02); opacity: 1; }
        30%, 88% { transform: none; opacity: 1; }
        96%, 100% { transform: none; opacity: 0; }
    }

    .handle {
        animation: handle 10s ease-in-out infinite;
    }

    @keyframes handle {
        0%, 8%   { transform: translate(-108px, -104px); opacity: 0; }
        10%      { transform: translate(-108px, -104px); opacity: 1; }
        30%, 36% { transform: none; opacity: 1; }
        40%, 100% { opacity: 0; }
    }

    .cursor {
        transform: translate(304px, 312px);
        animation: point 10s ease-in-out infinite;
    }

    @keyframes point {
        0%       { transform: translate(560px, 380px); }
        8%, 10%  { transform: translate(192px, 204px); }
        30%, 38% { transform: translate(304px, 312px); }
        50%, 88% { transform: translate(520px, 300px); }
        100%     { transform: translate(560px, 380px); }
    }

    .tie {
        stroke-dasharray: 1;
        animation: tie 10s ease-out infinite;
    }

    @keyframes tie {
        0%, 32%   { stroke-dashoffset: 1; opacity: 1; }
        40%, 88%  { stroke-dashoffset: 0; opacity: 1; }
        96%, 100% { stroke-dashoffset: 0; opacity: 0; }
    }

    .note {
        transform-box: fill-box;
        transform-origin: left center;
        animation: note 10s ease-out infinite;
    }

    @keyframes note {
        0%, 36%   { opacity: 0; transform: translateX(-10px) scale(0.96); }
        42%, 88%  { opacity: 1; transform: none; }
        96%, 100% { opacity: 0; }
    }

    .tagpill {
        transform-box: fill-box;
        transform-origin: center;
        animation: tag 10s ease-out infinite;
    }

    @keyframes tag {
        0%, 46%  { transform: scale(0.6); opacity: 0; }
        50%      { transform: scale(1.08); opacity: 1; }
        53%, 100% { transform: none; opacity: 1; }
    }

    .ln {
        transform-box: fill-box;
        transform-origin: left center;
        animation: type 10s linear infinite;
    }
    .l2 { animation-name: type2; }
    .l3 { animation-name: type3; }
    .l4 { animation-name: type4; }

    @keyframes type  { 0%, 52% { transform: scaleX(0); } 58%, 100% { transform: none; } }
    @keyframes type2 { 0%, 58% { transform: scaleX(0); } 64%, 100% { transform: none; } }
    @keyframes type3 { 0%, 64% { transform: scaleX(0); } 70%, 100% { transform: none; } }
    @keyframes type4 { 0%, 70% { transform: scaleX(0); } 74%, 100% { transform: none; } }
</style>
