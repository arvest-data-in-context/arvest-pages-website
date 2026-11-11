<script>
    // "Gather your documents": files of every kind drop into the dashed purple frame
    // (the tool's "Drop to upload…"), and each one appears as a row of the Documents list.
    import DemoFrame from './DemoFrame.svelte';
    import DemoChrome from './DemoChrome.svelte';
    import KindTile from './KindTile.svelte';
    export let label = "";

    const files = ["image", "video", "audio", "text", "pdf"];
    const widths = [118, 92, 134, 104, 86];
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <DemoChrome id="gather" page={1} side={1} />

        <!-- the drop frame -->
        <rect x="70" y="64" width="200" height="300" rx="12" fill="#800080" fill-opacity=".05" stroke="#800080" stroke-width="2" stroke-dasharray="7 6" class="frame" />
        <g transform="translate(170 300)">
            <circle r="16" fill="#fff" stroke="#800080" stroke-width="1.5" />
            <path d="M0 -7v12M-5 0l5 5 5-5" fill="none" stroke="#800080" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <rect x="128" y="328" width="84" height="4" rx="2" fill="#800080" fill-opacity=".45" />

        <!-- files falling in -->
        {#each files as kind, i}
            <g class="drop d{i}">
                <g transform="translate({96 + (i % 3) * 52 - (i > 2 ? -26 : 0)} {i > 2 ? 160 : 100})">
                    <rect x="2" y="2" width="44" height="52" rx="5" fill="#000" fill-opacity=".12" />
                    <rect width="44" height="52" rx="5" fill="#fff" stroke="#000" stroke-width="1.3" />
                    <KindTile {kind} x={8} y={8} size={28} />
                    <rect x="8" y="42" width="28" height="3" rx="1.5" fill="#9a9a9a" />
                </g>
            </g>
        {/each}

        <!-- the Documents list -->
        <rect x="303" y="63" width="306" height="306" rx="8" fill="#000" fill-opacity=".12" />
        <rect x="300" y="60" width="306" height="306" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
        <rect x="316" y="76" width="40" height="3" rx="1.5" fill="#9a9a9a" />
        <rect x="470" y="76" width="30" height="3" rx="1.5" fill="#9a9a9a" />
        <rect x="540" y="76" width="34" height="3" rx="1.5" fill="#000" />
        <path d="M580 74.5l3 3 3-3" fill="none" stroke="#800080" stroke-width="1.4" stroke-linecap="round" />
        <line x1="300" y1="90" x2="606" y2="90" stroke="#000" stroke-width="1.2" />

        {#each files as kind, i}
            <g class="row r{i}">
                <rect x="301" y={91 + i * 54} width="304" height="53" fill={i === 4 ? "#e8f4f8" : "#fff"} />
                {#if i === 4}<rect x="301" y={91 + i * 54} width="3" height="53" fill="#800080" />{/if}
                <KindTile {kind} x={316} y={103 + i * 54} size={28} />
                <rect x="356" y={110 + i * 54} width={widths[i]} height="4.5" rx="2.25" fill="#000" />
                <rect x="356" y={123 + i * 54} width={widths[i] - 40} height="3" rx="1.5" fill="#9a9a9a" />
                <rect x="540" y={115 + i * 54} width="46" height="3" rx="1.5" fill="#9a9a9a" />
                {#if i < 4}<line x1="301" y1={144 + i * 54} x2="605" y2={144 + i * 54} stroke="#eee9f1" />{/if}
            </g>
        {/each}
    </svg>
</DemoFrame>

<style>
    .frame {
        animation: march 1.4s linear infinite;
    }

    @keyframes march {
        to { stroke-dashoffset: -26; }
    }

    .drop {
        animation: drop 12s ease-in infinite backwards;
    }
    .d0 { animation-delay: 0.2s; }
    .d1 { animation-delay: 1.1s; }
    .d2 { animation-delay: 2s; }
    .d3 { animation-delay: 2.9s; }
    .d4 { animation-delay: 3.8s; }

    /* in from above, into the frame, then into the list */
    @keyframes drop {
        0%   { opacity: 0; transform: translateY(-90px); }
        5%   { opacity: 1; transform: translateY(0); }
        9%   { opacity: 1; transform: translateY(0); }
        13%  { opacity: 0; transform: translate(120px, 10px) scale(0.9); }
        100% { opacity: 0; transform: translate(120px, 10px) scale(0.9); }
    }

    .row {
        animation: row 12s ease-out infinite backwards;
    }
    .r0 { animation-delay: 1.5s; }
    .r1 { animation-delay: 2.4s; }
    .r2 { animation-delay: 3.3s; }
    .r3 { animation-delay: 4.2s; }
    .r4 { animation-delay: 5.1s; }

    @keyframes row {
        0%   { opacity: 0; transform: translateX(-12px); }
        4%   { opacity: 1; transform: none; }
        78%  { opacity: 1; transform: none; }
        84%  { opacity: 0; }
        100% { opacity: 0; transform: translateX(-12px); }
    }
</style>
