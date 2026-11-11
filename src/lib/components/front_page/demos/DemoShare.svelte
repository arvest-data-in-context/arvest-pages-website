<script>
    // "Share": the project's sharing panel; the switch goes on, the address appears, Copy
    // turns into a tick, and a viewer's window comes up with the project in it. Their own
    // place (no animation) is the shared project.
    import DemoFrame from './DemoFrame.svelte';
    import DemoChrome from './DemoChrome.svelte';
    import KindTile from './KindTile.svelte';
    export let label = "";
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <DemoChrome id="share" page={2} side={1} />

        <!-- the project card -->
        <rect x="73" y="63" width="240" height="160" rx="8" fill="#000" fill-opacity=".12" />
        <rect x="70" y="60" width="240" height="160" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
        <rect x="80" y="70" width="220" height="96" rx="3" fill="#d7ecf3" />
        <path d="M80 166l56-46 36 28 30-22 98 40z" fill="#7aa7b8" />
        <circle cx="262" cy="96" r="12" fill="#f2b84b" />
        <rect x="80" y="180" width="120" height="5" rx="2.5" fill="#000" />
        <rect x="80" y="196" width="80" height="3" rx="1.5" fill="#9a9a9a" />
        <circle cx="290" cy="186" r="10" fill="#fff" stroke="#ccc" />
        <circle class="led" cx="290" cy="186" r="4.5" fill="#2ecc71" />

        <!-- the share panel -->
        <rect x="73" y="243" width="290" height="126" rx="8" fill="#000" fill-opacity=".12" />
        <rect x="70" y="240" width="290" height="126" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
        <rect x="86" y="258" width="90" height="4.5" rx="2.25" fill="#000" />
        <rect x="86" y="272" width="140" height="3" rx="1.5" fill="#9a9a9a" />
        <!-- the switch -->
        <rect class="track" x="304" y="256" width="40" height="22" rx="11" fill="#800080" />
        <circle class="knob" cx="333" cy="267" r="8" fill="#fff" />
        <!-- the address -->
        <rect x="86" y="300" width="198" height="32" rx="16" fill="#f7f4f8" stroke="#ccc" />
        <rect class="url" x="102" y="314.5" width="150" height="3" rx="1.5" fill="#4d4d4d" />
        <g class="copy">
            <rect x="292" y="300" width="56" height="32" rx="16" fill="#800080" />
            <rect x="306" y="314.5" width="28" height="3" rx="1.5" fill="#fff" />
        </g>
        <g class="done">
            <rect x="292" y="300" width="56" height="32" rx="16" fill="#2e7d32" />
            <path d="M310 316l6 6 12-12" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        </g>

        <!-- a viewer's window, with the project -->
        <g class="viewer">
            <rect x="397" y="93" width="214" height="276" rx="10" fill="#000" fill-opacity=".14" />
            <rect x="394" y="90" width="214" height="276" rx="10" fill="#fff" stroke="#000" stroke-width="1.5" />
            <circle cx="410" cy="106" r="3.5" fill="#e3dee7" />
            <circle cx="422" cy="106" r="3.5" fill="#e3dee7" />
            <circle cx="434" cy="106" r="3.5" fill="#e3dee7" />
            <rect x="446" y="99" width="148" height="14" rx="7" fill="#f7f4f8" />
            <rect x="456" y="104.5" width="90" height="3" rx="1.5" fill="#9a9a9a" />
            <line x1="394" y1="122" x2="608" y2="122" stroke="#000" stroke-width="1.2" />
            <rect x="406" y="134" width="190" height="96" rx="3" fill="#d7ecf3" />
            <path d="M406 230l50-40 32 24 26-18 82 34z" fill="#7aa7b8" />
            <circle cx="566" cy="158" r="11" fill="#f2b84b" />
            <rect x="406" y="244" width="110" height="5" rx="2.5" fill="#000" />
            <g transform="translate(406 262)">
                <rect width="90" height="44" rx="5" fill="#fff" stroke="#000" stroke-width="1.2" />
                <KindTile kind="video" x={8} y={10} size={24} />
                <rect x="40" y="16" width="40" height="3" rx="1.5" fill="#9a9a9a" />
            </g>
            <g transform="translate(506 262)">
                <rect width="90" height="44" rx="5" fill="#fff8e1" stroke="#000" stroke-width="1.2" />
                <KindTile kind="text" x={8} y={10} size={24} />
                <rect x="40" y="16" width="40" height="3" rx="1.5" fill="#9a9a9a" />
            </g>
            <rect x="406" y="322" width="80" height="26" rx="13" fill="#800080" />
            <rect x="420" y="333.5" width="52" height="3" rx="1.5" fill="#fff" />
        </g>
    </svg>
</DemoFrame>

<style>
    /* the switch: off (grey, knob left) to on (purple, knob right) */
    .track {
        animation: track 10s ease-in-out infinite;
    }

    @keyframes track {
        0%, 10%  { fill: #ccc; }
        16%, 92% { fill: #800080; }
        100%     { fill: #ccc; }
    }

    .knob {
        animation: knob 10s ease-in-out infinite;
    }

    @keyframes knob {
        0%, 10%  { transform: translateX(-18px); }
        16%, 92% { transform: none; }
        100%     { transform: translateX(-18px); }
    }

    .led {
        animation: led 10s ease-in-out infinite;
    }

    @keyframes led {
        0%, 12%  { fill: #ccc; }
        18%, 92% { fill: #2ecc71; }
        100%     { fill: #ccc; }
    }

    .url {
        transform-box: fill-box;
        transform-origin: left center;
        animation: url 10s ease-out infinite;
    }

    @keyframes url {
        0%, 18%  { transform: scaleX(0); }
        28%, 100% { transform: none; }
    }

    .copy {
        animation: copy 10s step-end infinite;
    }

    @keyframes copy {
        0%, 38%  { opacity: 1; }
        40%, 80% { opacity: 0; }
        82%, 100% { opacity: 1; }
    }

    /* the tick is the finished picture, under the Copy button */
    .done {
        animation: done 10s step-end infinite;
    }

    @keyframes done {
        0%, 38%  { opacity: 0; }
        40%, 80% { opacity: 1; }
        82%, 100% { opacity: 0; }
    }

    .viewer {
        animation: viewer 10s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
    }

    @keyframes viewer {
        0%, 44%  { opacity: 0; transform: translateY(40px); }
        54%, 90% { opacity: 1; transform: none; }
        98%, 100% { opacity: 0; transform: translateY(20px); }
    }
</style>
