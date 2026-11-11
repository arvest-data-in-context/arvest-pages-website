<script>
    // mmm reading a folder: each file of a mixed folder goes to a model (local, or Claude)
    // and comes back as a structured answer: a title, a description, the people named.
    // The finished picture: every file read, its answer shown.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import KindTile from '$lib/components/front_page/demos/KindTile.svelte';
    import ToolChrome from './ToolChrome.svelte';
    export let label = "";

    const files = [["text", 70], ["image", 88], ["video", 64], ["pdf", 92], ["audio", 76], ["image", 58]];
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ToolChrome id="mmmread" mark="mmm" page={1} />

        <!-- the folder -->
        <rect x="23" y="55" width="200" height="320" rx="8" fill="#000" fill-opacity=".12" />
        <rect x="20" y="52" width="200" height="320" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
        <path d="M34 68h14l4 4h22v12H34z" fill="#f2b84b" fill-opacity=".5" stroke="#8a5a00" stroke-width="1.1" />
        <rect x="84" y="74" width="70" height="4" rx="2" fill="#000" />
        <line x1="20" y1="94" x2="220" y2="94" stroke="#e3dee7" stroke-width="1.2" />
        {#each files as [kind, w], i}
            <g>
                <KindTile {kind} x={34} y={106 + i * 44} size={26} />
                <rect x="70" y={114 + i * 44} width={w} height="4" rx="2" fill="#000" />
                <rect x="70" y={124 + i * 44} width={w - 26} height="3" rx="1.5" fill="#9a9a9a" />
                <g class="done d{i}">
                    <circle cx="200" cy={119 + i * 44} r="8" fill="#2e7d32" />
                    <path d="M196 {119 + i * 44}l3 3 5-6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
        {/each}

        <!-- to the model and back -->
        <path class="flow" d="M222 212H274" />
        <path class="flow" d="M346 212H398" />
        <g class="model">
            <circle cx="310" cy="212" r="34" fill="#fff" stroke="#800080" stroke-width="2" />
            <circle class="ring" cx="310" cy="212" r="34" fill="none" stroke="#800080" stroke-width="2" />
            <!-- a little network: the model -->
            {#each [[296, 198], [324, 198], [296, 226], [324, 226], [310, 212]] as [x, y]}
                <path d="M{x} {y}L310 212" stroke="#800080" stroke-width="1.2" />
            {/each}
            {#each [[296, 198], [324, 198], [296, 226], [324, 226]] as [x, y]}
                <circle cx={x} cy={y} r="4.5" fill="#f4ecf4" stroke="#800080" stroke-width="1.3" />
            {/each}
            <circle cx="310" cy="212" r="6" fill="#800080" />
        </g>

        <!-- the answer -->
        <g class="answer">
            <rect x="403" y="91" width="218" height="244" rx="8" fill="#000" fill-opacity=".12" />
            <rect x="400" y="88" width="218" height="244" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
            <KindTile kind="video" x={414} y={102} size={22} />
            <rect x="444" y="109" width="90" height="4.5" rx="2.25" fill="#000" />
            <line x1="400" y1="134" x2="618" y2="134" stroke="#e3dee7" stroke-width="1.2" />
            {#each [0, 1, 2] as j}
                <rect x="414" y={148 + j * 40} width="40" height="3" rx="1.5" fill="#800080" fill-opacity=".7" />
                <rect class="field f{j}" x="414" y={158 + j * 40} width={[170, 186, 120][j]} height="3.5" rx="1.75" fill="#4d4d4d" />
                <rect class="field f{j}" x="414" y={167 + j * 40} width={[120, 150, 0][j]} height="3.5" rx="1.75" fill="#4d4d4d" />
            {/each}
            <rect x="414" y="268" width="56" height="3" rx="1.5" fill="#800080" fill-opacity=".7" />
            {#each [[414, 58], [478, 70], [554, 48]] as [x, w], j}
                <g class="chip c{j}">
                    <rect {x} y="280" width={w} height="20" rx="10" fill="#e8f4f8" stroke="#2b7a99" />
                    <circle cx={x + 11} cy="290" r="4" fill="#2b7a99" />
                    <rect x={x + 20} y="288.5" width={w - 30} height="3" rx="1.5" fill="#2b7a99" />
                </g>
            {/each}
        </g>
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

    .ring {
        transform-box: fill-box;
        transform-origin: center;
        animation: ring 2s ease-out infinite;
    }

    @keyframes ring {
        from { transform: scale(1); opacity: 0.8; }
        to   { transform: scale(1.5); opacity: 0; }
    }

    .done {
        transform-box: fill-box;
        transform-origin: center;
        animation: done 12s ease-out infinite backwards;
    }
    .d0 { animation-delay: 0.8s; }
    .d1 { animation-delay: 2s; }
    .d2 { animation-delay: 3.2s; }
    .d3 { animation-delay: 4.4s; }
    .d4 { animation-delay: 5.6s; }
    .d5 { animation-delay: 6.8s; }

    @keyframes done {
        0%   { opacity: 0; transform: scale(0.4); }
        3%   { opacity: 1; transform: none; }
        84%  { opacity: 1; }
        92%, 100% { opacity: 0; }
    }

    .answer {
        animation: answer 12s ease-out infinite;
    }

    @keyframes answer {
        0%, 20%  { opacity: 0; transform: translateX(-10px); }
        26%, 90% { opacity: 1; transform: none; }
        100%     { opacity: 0; }
    }

    .field {
        transform-box: fill-box;
        transform-origin: left center;
        animation: type 12s linear infinite backwards;
    }
    .f0 { animation-delay: 3s; }
    .f1 { animation-delay: 3.8s; }
    .f2 { animation-delay: 4.6s; }

    @keyframes type {
        0%   { transform: scaleX(0); }
        6%   { transform: none; }
        100% { transform: none; }
    }

    .chip {
        transform-box: fill-box;
        transform-origin: center;
        animation: chip 12s ease-out infinite backwards;
    }
    .c0 { animation-delay: 5.6s; }
    .c1 { animation-delay: 6s; }
    .c2 { animation-delay: 6.4s; }

    @keyframes chip {
        0%   { opacity: 0; transform: scale(0.6); }
        3%   { opacity: 1; transform: none; }
        100% { opacity: 1; }
    }
</style>
