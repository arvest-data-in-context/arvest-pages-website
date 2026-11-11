<script>
    // The Arvest ecosystem in one picture (640 × 400, the demos' style). Above, online:
    // the web, the browser extension, Arvest at the centre, the people it is shared with.
    // Below, on your computer: a corpus, mmm, the LA-PA editor and its exports. The flows:
    // the web into Arvest through the extension; files into mmm, and mmm and Arvest both
    // ways (connector, metadata); Arvest's manifests into LA-PA as sources; LA-PA out as
    // Linked Art. "focus" lights one tool and its flows.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import KindTile from '$lib/components/front_page/demos/KindTile.svelte';

    export let label = "";
    export let focus = "";      // "", arvest, extension, mmm, lapa
    export let id = "eco";

    $: on = (part) => !focus || focus === part;
    $: f_ext = !focus || focus === "extension" || focus === "arvest";
    $: f_mmm = !focus || focus === "mmm" || focus === "arvest";
    $: f_lapa = !focus || focus === "lapa" || focus === "arvest";
    $: f_share = !focus || focus === "arvest";
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class:focused={!!focus}>
        <defs>
            <pattern id="dots-{id}" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#800080" fill-opacity="0.16" />
            </pattern>
        </defs>
        <rect width="640" height="400" fill="#f7f4f8" />
        <rect width="640" height="400" fill="url(#dots-{id})" />

        <!-- the two places: online, and this computer -->
        <rect x="10" y="12" width="620" height="200" rx="14" fill="#fff" fill-opacity=".45" stroke="#add8e6" stroke-width="1.6" />
        <path d="M30 34a8 8 0 0 1 15-4 6 6 0 0 1 8 6 5 5 0 0 1-2 9H31a6 6 0 0 1-1-11z" fill="#e8f4f8" stroke="#2b7a99" stroke-width="1.3" />
        <rect x="10" y="230" width="620" height="160" rx="14" fill="#fff" fill-opacity=".45" stroke="#4d4d4d" stroke-width="1.3" stroke-dasharray="5 5" />
        <g transform="translate(26 244)">
            <rect x="2" y="0" width="22" height="14" rx="2" fill="none" stroke="#4d4d4d" stroke-width="1.3" />
            <path d="M-2 18h30" stroke="#4d4d4d" stroke-width="1.3" stroke-linecap="round" />
        </g>

        <!-- the flows -->
        <path class="flow" class:live={f_ext} d="M104 110H128" />
        <path class="flow" class:live={f_ext} d="M238 110H280" />
        <path class="flow" class:live={f_share} d="M500 118H530" />
        <path class="flow" class:live={f_mmm} d="M134 324H160" />
        <path class="flow" class:live={f_mmm} d="M240 260C240 230 330 230 330 196" />
        <path class="flow back" class:live={f_mmm} d="M262 260C262 236 350 236 350 196" />
        <path class="flow" class:live={f_lapa} d="M440 196C440 228 432 230 432 260" />
        <path class="flow" class:live={f_lapa} d="M500 324H530" />

        <!-- the web -->
        <g class="part" class:on={on("extension")}>
            <rect x="27" y="73" width="77" height="77" rx="8" fill="#000" fill-opacity=".1" />
            <rect x="24" y="70" width="80" height="80" rx="8" fill="#fff" stroke="#000" stroke-width="1.3" />
            <g fill="none" stroke="#2b7a99" stroke-width="1.5">
                <circle cx="64" cy="110" r="22" />
                <ellipse cx="64" cy="110" rx="9" ry="22" />
                <path d="M42 110h44M46 98h36M46 122h36" />
            </g>
        </g>

        <!-- the browser extension -->
        <g class="part" class:on={on("extension")}>
            <rect x="131" y="73" width="107" height="77" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="128" y="70" width="107" height="77" rx="7" fill="#fff" stroke="#000" stroke-width="1.4" />
            <rect x="128.75" y="70.75" width="105.5" height="18" rx="6" fill="#eceaee" />
            <rect x="138" y="76" width="66" height="7" rx="3.5" fill="#fff" />
            <g transform="translate(212 74) scale(0.078125)">
                <rect width="128" height="128" rx="28" fill="#800080" />
                <path fill-rule="evenodd" fill="#fff" d="M56 22h16l30 84H86l-6-18H48l-6 18H26zM53 74h22l-11-33z" />
            </g>
            <rect x="160" y="96" width="70" height="44" rx="4" fill="#fff" stroke="#000" stroke-width="1.1" class="popup" />
            <KindTile kind="image" x={164} y={100} size={14} />
            <KindTile kind="video" x={164} y={120} size={14} />
            <rect x="182" y="105" width="28" height="3" rx="1.5" fill="#9a9a9a" />
            <rect x="182" y="125" width="22" height="3" rx="1.5" fill="#9a9a9a" />
            <circle cx="220" cy="107" r="5" fill="#800080" />
            <circle cx="220" cy="127" r="5" fill="#800080" />
        </g>

        <!-- Arvest, at the centre -->
        <g class="part" class:on={on("arvest")}>
            <rect x="283" y="39" width="220" height="160" rx="9" fill="#000" fill-opacity=".14" />
            <rect x="280" y="36" width="220" height="160" rx="9" fill="#fff" stroke="#800080" stroke-width="2.5" class="glow" />
            <line x1="280" y1="62" x2="500" y2="62" stroke="#000" stroke-width="1.2" />
            <g transform="translate(288 42) scale(0.109375)">
                <rect width="128" height="128" rx="28" fill="#800080" />
                <path fill-rule="evenodd" fill="#fff" d="M56 22h16l30 84H86l-6-18H48l-6 18H26zM53 74h22l-11-33z" />
            </g>
            <text x="309" y="56" class="brand">Arvest</text>
            <rect x="372" y="43" width="44" height="12" rx="6" fill="#800080" />
            <rect x="422" y="47.5" width="30" height="3" rx="1.5" fill="#9a9a9a" />
            <rect x="280.75" y="62.75" width="218.5" height="132.5" fill="url(#dots-{id})" />
            <g class="card c1">
                <rect x="294" y="76" width="84" height="62" rx="4" fill="#fff" stroke="#000" stroke-width="1.1" />
                <rect x="299" y="81" width="74" height="42" fill="#d7ecf3" />
                <path d="M299 123l20-16 14 10 12-8 28 14z" fill="#7aa7b8" />
            </g>
            <g class="card c2">
                <rect x="400" y="84" width="86" height="56" rx="4" fill="#fff" stroke="#000" stroke-width="1.1" />
                <rect x="405" y="89" width="76" height="36" fill="#26232c" />
                <path d="M438 99v16l13-8z" fill="#fff" fill-opacity=".8" />
            </g>
            <g class="card c3">
                <rect x="330" y="150" width="96" height="36" rx="4" fill="#fff8e1" stroke="#000" stroke-width="1.1" />
                <rect x="338" y="160" width="76" height="3" rx="1.5" fill="#4d4d4d" />
                <rect x="338" y="169" width="60" height="3" rx="1.5" fill="#4d4d4d" />
            </g>
            <path d="M378 107C390 107 388 112 400 112" fill="none" stroke="#800080" stroke-width="1.4" />
            <path d="M336 138C336 146 360 144 362 150" fill="none" stroke="#800080" stroke-width="1.4" />
        </g>

        <!-- everyone it is shared with -->
        <g class="part" class:on={on("arvest")}>
            <rect x="533" y="83" width="86" height="72" rx="8" fill="#000" fill-opacity=".1" />
            <rect x="530" y="80" width="86" height="72" rx="8" fill="#fff" stroke="#000" stroke-width="1.3" />
            {#each [0, 1, 2] as i}
                <circle cx={550 + i * 23} cy="106" r="7" fill="#add8e6" stroke="#000" stroke-width="1.1" />
                <path d="M{538 + i * 23} 136c0-10 5-15 12-15s12 5 12 15z" fill="#add8e6" stroke="#000" stroke-width="1.1" />
            {/each}
        </g>

        <!-- a corpus on this computer -->
        <g class="part" class:on={on("mmm")}>
            <path d="M44 292h26l6 7h52v58H44z" fill="#f2b84b" fill-opacity=".35" stroke="#8a5a00" stroke-width="1.3" />
            <KindTile kind="pdf" x={54} y={308} size={18} />
            <KindTile kind="audio" x={78} y={308} size={18} />
            <KindTile kind="video" x={102} y={308} size={18} />
            <KindTile kind="image" x={54} y={332} size={18} />
            <KindTile kind="text" x={78} y={332} size={18} />
        </g>

        <!-- mmm -->
        <g class="part" class:on={on("mmm")}>
            <rect x="163" y="263" width="140" height="112" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="160" y="260" width="140" height="112" rx="7" fill="#fff" stroke="#000" stroke-width="1.4" />
            <rect x="168" y="267" width="16" height="16" rx="4" fill="#800080" />
            <rect x="171.5" y="271" width="5" height="6.5" rx="1" fill="#fff" />
            <path d="M178.5 274.5h3M178.5 277h3M178.5 279.5h2.5" stroke="#fff" stroke-width="1.1" stroke-linecap="round" />
            <rect x="190" y="273" width="30" height="4" rx="2" fill="#000" />
            <line x1="160" y1="290" x2="300" y2="290" stroke="#000" stroke-width="1.1" />
            {#each [0, 1, 2] as i}
                <g class="ans a{i}">
                    <rect x="170" y={300 + i * 22} width="120" height="16" rx="3" fill="#f7f4f8" />
                    <rect x="176" y={306 + i * 22} width={[60, 80, 50][i]} height="3.5" rx="1.75" fill="#4d4d4d" />
                    <circle cx="281" cy={308 + i * 22} r="4" fill="#2e7d32" />
                </g>
            {/each}
        </g>

        <!-- the LA-PA editor -->
        <g class="part" class:on={on("lapa")}>
            <rect x="363" y="263" width="140" height="112" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="360" y="260" width="140" height="112" rx="7" fill="#fff" stroke="#000" stroke-width="1.4" />
            <rect x="368" y="267" width="16" height="16" rx="4" fill="#800080" />
            <path d="M372 271l6.5 3.5-5.5 4" fill="none" stroke="#fff" stroke-width="1.1" />
            <circle cx="372" cy="271" r="1.8" fill="#fff" />
            <circle cx="378.5" cy="274.5" r="1.8" fill="#fff" />
            <circle cx="373" cy="278.5" r="1.8" fill="#fff" />
            <rect x="390" y="273" width="40" height="4" rx="2" fill="#000" />
            <line x1="360" y1="290" x2="500" y2="290" stroke="#000" stroke-width="1.1" />
            <path d="M400 330L430 306L466 324L440 352Z M430 306L440 352" fill="none" stroke="#9a9a9a" stroke-width="1.2" />
            {#each [[400, 330, "#2b7a99"], [430, 306, "#800080"], [466, 324, "#2e7d32"], [440, 352, "#8a5a00"]] as [x, y, c], i}
                <circle class="node n{i}" cx={x} cy={y} r="7" fill={c} stroke="#fff" stroke-width="1.4" />
            {/each}
        </g>

        <!-- its exports: Linked Art -->
        <g class="part" class:on={on("lapa")}>
            <path d="M530 292h60l20 20v48a5 5 0 0 1-5 5h-70a5 5 0 0 1-5-5z" fill="#fff" stroke="#000" stroke-width="1.3" />
            <path d="M590 292v20h20" fill="#f4ecf4" stroke="#000" stroke-width="1.3" />
            <path d="M554 318c-6 0-6 4-6 7s0 5-4 5c4 0 4 2 4 5s0 7 6 7M582 318c6 0 6 4 6 7s0 5 4 5c-4 0-4 2-4 5s0 7-6 7" fill="none" stroke="#800080" stroke-width="1.8" stroke-linecap="round" />
            <rect x="559" y="327" width="18" height="3" rx="1.5" fill="#800080" />
            <rect x="559" y="334" width="12" height="3" rx="1.5" fill="#800080" />
        </g>
    </svg>
</DemoFrame>

<style>
    .brand {
        font-family: var(--font-display);
        font-size: 15px;
        fill: #800080;
    }

    .part {
        transition: opacity 0.3s;
    }

    .focused .part:not(.on) {
        opacity: 0.25;
    }

    .flow {
        fill: none;
        stroke: #ccc;
        stroke-width: 1.8;
        stroke-dasharray: 5 6;
    }

    .flow.live {
        stroke: #800080;
        stroke-opacity: 0.75;
        animation: flow 1.2s linear infinite;
    }

    .flow.back.live {
        stroke: #2b7a99;
        animation-direction: reverse;
    }

    @keyframes flow {
        to { stroke-dashoffset: -22; }
    }

    .glow {
        animation: glow 2.6s ease-in-out infinite;
    }

    @keyframes glow {
        50% { stroke-width: 4; stroke-opacity: 0.6; }
    }

    .card {
        transform-box: fill-box;
        transform-origin: center;
        animation: card 9s ease-out infinite backwards;
    }
    .c2 { animation-delay: 0.6s; }
    .c3 { animation-delay: 1.2s; }

    @keyframes card {
        0%   { opacity: 0; transform: scale(0.9); }
        5%   { opacity: 1; transform: none; }
        92%  { opacity: 1; }
        100% { opacity: 0; }
    }

    .ans {
        animation: ans 6s ease-out infinite backwards;
    }
    .a1 { animation-delay: 0.8s; }
    .a2 { animation-delay: 1.6s; }

    @keyframes ans {
        0%   { opacity: 0; transform: translateX(-6px); }
        6%   { opacity: 1; transform: none; }
        90%  { opacity: 1; }
        100% { opacity: 0; }
    }

    .node {
        transform-box: fill-box;
        transform-origin: center;
        animation: node 3s ease-in-out infinite;
    }
    .n1 { animation-delay: 0.4s; }
    .n2 { animation-delay: 0.8s; }
    .n3 { animation-delay: 1.2s; }

    @keyframes node {
        0%, 100% { transform: none; }
        50% { transform: scale(1.25); }
    }

    .popup {
        animation: none;
    }
</style>
