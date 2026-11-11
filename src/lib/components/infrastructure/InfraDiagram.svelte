<script>
    // How Arvest is built, in one picture (640 × 400, the demos' frame and style): where
    // documents come from (1), the app in the browser (2), the API (3), what is kept at
    // Huma-Num (4), and what goes out: scripts and shared links (5). The numbers match the
    // page's sections; "focus" lights one part and dims the rest. No words inside, so the
    // picture reads the same in every language.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';

    export let label = "";
    export let focus = "";      // "", sources, app, api, store, share
    export let id = "infra";

    $: on = (part) => !focus || focus === part;
    // the flows of each part
    $: f_sources = on("sources") || on("app");
    $: f_app = on("app") || on("api");
    $: f_store = on("store") || on("api");
    $: f_scripts = on("api");
    $: f_share = on("share");

    const sources = [
        { y: 44,  icon: "library" },
        { y: 120, icon: "play" },
        { y: 196, icon: "link" },
        { y: 272, icon: "laptop" },
    ];
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

        <!-- Huma-Num: the API and what it keeps -->
        <g class="part" class:on={on("api") || on("store")}>
            <rect x="172" y="172" width="296" height="214" rx="14" fill="#fff" fill-opacity=".55" stroke="#4d4d4d" stroke-width="1.2" stroke-dasharray="5 5" />
            <!-- a little server mark in its corner -->
            <g transform="translate(184 184)">
                <rect width="22" height="8" rx="2" fill="none" stroke="#4d4d4d" stroke-width="1.2" />
                <rect y="11" width="22" height="8" rx="2" fill="none" stroke="#4d4d4d" stroke-width="1.2" />
                <circle cx="17" cy="4" r="1.4" fill="#2ecc71" class="blink" />
                <circle cx="17" cy="15" r="1.4" fill="#2ecc71" class="blink b2" />
            </g>
        </g>

        <!-- the flows (under everything) -->
        {#each sources as s, i}
            <path class="flow" class:live={f_sources} d="M128 {s.y + 28}C164 {s.y + 28} 160 {87 + (i - 1.5) * 14} 196 {87 + (i - 1.5) * 14}" />
        {/each}
        <path class="flow" class:live={f_app} d="M306 150V196" />
        <path class="flow back" class:live={f_app} d="M334 196V150" />
        <path class="flow" class:live={f_store} d="M296 244C296 266 232 266 232 290" />
        <path class="flow" class:live={f_store} d="M320 244V290" />
        <path class="flow" class:live={f_store} d="M344 244C344 266 408 266 408 290" />
        <path class="flow back" class:live={f_scripts} d="M512 220H392" />
        <path class="flow" class:live={f_share} d="M442 326H512" />

        <!-- 1 · documents from elsewhere -->
        <g class="part" class:on={on("sources")}>
            {#each sources as s, i}
                <g class="tile t{i}">
                    <rect x="27" y={s.y + 3} width="101" height="56" rx="8" fill="#000" fill-opacity=".12" />
                    <rect x="24" y={s.y} width="101" height="56" rx="8" fill="#fff" stroke="#000" stroke-width="1.4" />
                    <g transform="translate(46 {s.y + 14})" fill="none" stroke="#800080" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                        {#if s.icon === "library"}
                            <path d="M2 10L14 3l12 7M4 11v13M10 11v13M18 11v13M24 11v13M1 26h26" />
                        {:else if s.icon === "play"}
                            <rect x="1" y="3" width="26" height="22" rx="5" />
                            <path d="M11 9v10l8-5z" fill="#800080" />
                        {:else if s.icon === "link"}
                            <path d="M12 16a6 6 0 0 0 8.5 0l4-4a6 6 0 0 0-8.5-8.5l-1.5 1.5" />
                            <path d="M16 12a6 6 0 0 0-8.5 0l-4 4a6 6 0 0 0 8.5 8.5l1.5-1.5" />
                        {:else}
                            <rect x="4" y="4" width="20" height="14" rx="2" />
                            <path d="M0 23h28" />
                        {/if}
                    </g>
                    <rect x="84" y={s.y + 22} width="30" height="4" rx="2" fill="#9a9a9a" />
                    <rect x="84" y={s.y + 31} width="20" height="3" rx="1.5" fill="#ccc" />
                </g>
            {/each}
        </g>

        <!-- 2 · the app, in a browser -->
        <g class="part" class:on={on("app")}>
            <rect x="199" y="27" width="248" height="126" rx="9" fill="#000" fill-opacity=".12" />
            <rect x="196" y="24" width="248" height="126" rx="9" fill="#fff" stroke="#000" stroke-width="1.5" />
            <line x1="196" y1="48" x2="444" y2="48" stroke="#000" stroke-width="1.2" />
            <g transform="translate(204 30) scale(0.09375)">
                <rect width="128" height="128" rx="28" fill="#800080" />
                <path fill-rule="evenodd" fill="#fff" d="M56 22h16l30 84H86l-6-18H48l-6 18H26zM53 74h22l-11-33z" />
            </g>
            <rect x="226" y="34" width="44" height="12" rx="6" fill="#800080" />
            <rect x="276" y="38.5" width="30" height="3" rx="1.5" fill="#9a9a9a" />
            <rect x="196.75" y="48.75" width="246.5" height="100.5" rx="0" fill="url(#dots-{id})" />
            <g class="pop a1">
                <rect x="212" y="62" width="88" height="66" rx="5" fill="#fff" stroke="#000" stroke-width="1.2" />
                <rect x="218" y="70" width="76" height="44" fill="#d7ecf3" />
                <path d="M218 114l22-18 14 10 12-8 28 16z" fill="#7aa7b8" />
            </g>
            <g class="pop a2">
                <rect x="338" y="70" width="90" height="62" rx="5" fill="#fff" stroke="#000" stroke-width="1.2" />
                <rect x="344" y="78" width="78" height="40" fill="#26232c" />
                <path d="M378 90v16l13-8z" fill="#fff" fill-opacity=".8" />
            </g>
            <path class="draw" d="M300 95C318 95 320 101 338 101" fill="none" stroke="#800080" stroke-width="1.6" pathLength="1" />
        </g>

        <!-- 3 · the API -->
        <g class="part" class:on={on("api")}>
            <rect x="253" y="199" width="140" height="48" rx="24" fill="#000" fill-opacity=".12" />
            <rect x="250" y="196" width="140" height="48" rx="24" fill="#fff" stroke="#800080" stroke-width="2" class="glow" />
            <path d="M296 208c-6 0-6 4-6 7s0 5-4 5c4 0 4 2 4 5s0 7 6 7M344 208c6 0 6 4 6 7s0 5 4 5c-4 0-4 2-4 5s0 7-6 7" fill="none" stroke="#800080" stroke-width="2" stroke-linecap="round" />
            <rect x="304" y="214" width="32" height="3.5" rx="1.75" fill="#000" />
            <rect x="304" y="223" width="22" height="3" rx="1.5" fill="#9a9a9a" />
        </g>

        <!-- 4 · what Huma-Num keeps: the database, the files and manifests, PeerTube -->
        <g class="part" class:on={on("store")}>
            {#each [[232, "db"], [320, "files"], [408, "video"]] as [cx, kind]}
                <g>
                    <path d="M{cx - 32} 300v44c0 7 14 12 32 12s32-5 32-12v-44" fill="#fff" stroke="#000" stroke-width="1.4" />
                    <ellipse cx={cx} cy="300" rx="32" ry="10" fill="#f4ecf4" stroke="#000" stroke-width="1.4" />
                    {#if kind === "db"}
                        <path d="M{cx - 32} 318c0 7 14 12 32 12s32-5 32-12" fill="none" stroke="#ccc" stroke-width="1.2" />
                        <path d="M{cx - 32} 334c0 7 14 12 32 12s32-5 32-12" fill="none" stroke="#ccc" stroke-width="1.2" />
                    {:else if kind === "files"}
                        <g class="sink">
                            <rect x={cx - 10} y="316" width="20" height="25" rx="2" fill="#fff" stroke="#800080" stroke-width="1.4" />
                            <path d="M{cx - 5} 324h10M{cx - 5} 329h10M{cx - 5} 334h6" stroke="#800080" stroke-width="1.2" />
                        </g>
                    {:else}
                        <rect x={cx - 13} y="318" width="26" height="20" rx="4" fill="none" stroke="#800080" stroke-width="1.4" />
                        <path d="M{cx - 4} 323v10l8-5z" fill="#800080" />
                    {/if}
                </g>
            {/each}
        </g>

        <!-- 5 · out: scripts (Python) and shared links -->
        <g class="part" class:on={on("api")}>
            <rect x="515" y="199" width="101" height="48" rx="8" fill="#000" fill-opacity=".12" />
            <rect x="512" y="196" width="101" height="48" rx="8" fill="#26232c" stroke="#000" stroke-width="1.4" />
            <path d="M524 212l7 6-7 6" fill="none" stroke="#add8e6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            <rect class="type" x="536" y="222" width="40" height="3" rx="1.5" fill="#add8e6" />
            <rect x="524" y="232" width="56" height="3" rx="1.5" fill="#fff" fill-opacity=".35" />
        </g>
        <g class="part" class:on={on("share")}>
            <rect x="515" y="297" width="101" height="62" rx="8" fill="#000" fill-opacity=".12" />
            <rect x="512" y="294" width="101" height="62" rx="8" fill="#fff" stroke="#000" stroke-width="1.4" />
            {#each [0, 1, 2] as i}
                <g class="person p{i}">
                    <circle cx={538 + i * 25} cy="314" r="7" fill="#add8e6" stroke="#000" stroke-width="1.1" />
                    <path d="M{526 + i * 25} 342c0-9 5-14 12-14s12 5 12 14z" fill="#add8e6" stroke="#000" stroke-width="1.1" />
                </g>
            {/each}
        </g>

        <!-- the numbers, as in the sections -->
        {#each [[24, 30, "sources", 1], [196, 10, "app", 2], [250, 182, "api", 3], [172, 282, "store", 4], [512, 280, "share", 5]] as [x, y, part, n]}
            <g class="badge" class:on={on(part)}>
                <circle cx={x} cy={y + 10} r="13" fill={focus === part ? "#800080" : "#fff"} stroke="#800080" stroke-width="1.6" />
                <text x={x} y={y + 15} text-anchor="middle" class="num" fill={focus === part ? "#fff" : "#800080"}>{n}</text>
            </g>
        {/each}
    </svg>
</DemoFrame>

<style>
    .num {
        font-family: var(--font-button);
        font-size: 14px;
    }

    .part,
    .badge {
        transition: opacity 0.3s;
    }

    .focused .part:not(.on),
    .focused .badge:not(.on) {
        opacity: 0.25;
    }

    .flow {
        fill: none;
        stroke: #ccc;
        stroke-width: 1.6;
        stroke-dasharray: 5 6;
    }

    .flow.live {
        stroke: #800080;
        stroke-opacity: 0.75;
        animation: flow 1.2s linear infinite;
    }

    .flow.back.live {
        animation-direction: reverse;
    }

    @keyframes flow {
        to { stroke-dashoffset: -22; }
    }

    .blink {
        animation: blink 1.6s steps(2, jump-none) infinite;
    }
    .b2 { animation-delay: 0.5s; }

    @keyframes blink {
        50% { opacity: 0.2; }
    }

    .tile {
        transform-box: fill-box;
        transform-origin: center;
        animation: nudge 8s ease-in-out infinite;
    }
    .t1 { animation-delay: 2s; }
    .t2 { animation-delay: 4s; }
    .t3 { animation-delay: 6s; }

    @keyframes nudge {
        0%, 8%, 100% { transform: none; }
        4% { transform: translateX(5px); }
    }

    .pop {
        transform-box: fill-box;
        transform-origin: center;
        animation: pop 8s ease-out infinite backwards;
    }
    .a2 { animation-delay: 0.8s; }

    @keyframes pop {
        0%   { opacity: 0; transform: scale(0.9); }
        6%   { opacity: 1; transform: none; }
        90%  { opacity: 1; transform: none; }
        100% { opacity: 0; transform: scale(0.95); }
    }

    .draw {
        stroke-dasharray: 1;
        animation: draw 8s ease-out infinite;
    }

    @keyframes draw {
        0%, 18% { stroke-dashoffset: 1; }
        28%, 90% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: 1; }
    }

    .glow {
        animation: glow 2.4s ease-in-out infinite;
    }

    @keyframes glow {
        50% { stroke-width: 3.5; stroke-opacity: 0.6; }
    }

    .sink {
        animation: sink 4s ease-in infinite;
    }

    @keyframes sink {
        0%   { transform: translateY(-48px); opacity: 0; }
        25%  { opacity: 1; }
        55%, 100% { transform: none; opacity: 1; }
    }

    .type {
        transform-box: fill-box;
        transform-origin: left center;
        animation: type 3s steps(6, end) infinite;
    }

    @keyframes type {
        from { transform: scaleX(0); }
        to   { transform: none; }
    }

    .person {
        transform-box: fill-box;
        transform-origin: center bottom;
        animation: person 6s ease-out infinite backwards;
    }
    .p1 { animation-delay: 0.6s; }
    .p2 { animation-delay: 1.2s; }

    @keyframes person {
        0%   { opacity: 0; transform: translateY(6px); }
        8%   { opacity: 1; transform: none; }
        90%  { opacity: 1; }
        100% { opacity: 0; }
    }
</style>
