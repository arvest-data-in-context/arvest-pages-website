<script>
    // "Arrange and compose": documents lying anyhow glide into place side by side; the
    // selection's frame (handles) takes a pair, and a group ring and its name mark them for
    // comparison. Their own place (no animation) is the arranged one.
    import DemoFrame from './DemoFrame.svelte';
    import DemoChrome from './DemoChrome.svelte';
    import KindTile from './KindTile.svelte';
    export let label = "";
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <DemoChrome id="arrange" page={2} />

        <!-- the group: a ring in its colour, its name in a pill above -->
        <g class="group">
            <rect x="84" y="78" width="340" height="140" rx="12" fill="none" stroke="#800080" stroke-width="2.5" stroke-opacity=".8" />
            <rect x="96" y="66" width="96" height="22" rx="11" fill="#800080" />
            <rect x="110" y="75.5" width="68" height="3.5" rx="1.75" fill="#fff" />
        </g>

        <!-- two programme pages -->
        <g class="card c1">
            <rect x="103" y="93" width="150" height="112" rx="6" fill="#000" fill-opacity=".12" />
            <rect x="100" y="90" width="150" height="112" rx="6" fill="#fff" stroke="#000" stroke-width="1.5" />
            <KindTile kind="image" x={106} y={95} size={12} />
            <rect x="122" y="99" width="70" height="3.5" rx="1.75" fill="#000" />
            <line x1="100" y1="112" x2="250" y2="112" stroke="#000" stroke-width="1.1" />
            <rect x="110" y="120" width="130" height="74" fill="#f4ead8" />
            <rect x="118" y="128" width="54" height="40" fill="#b9a383" />
            <rect x="180" y="130" width="52" height="3" fill="#6b5a45" />
            <rect x="180" y="138" width="46" height="3" fill="#6b5a45" />
            <rect x="180" y="146" width="50" height="3" fill="#6b5a45" />
            <rect x="118" y="176" width="114" height="3" fill="#6b5a45" />
            <rect x="118" y="184" width="90" height="3" fill="#6b5a45" />
        </g>
        <g class="card c2">
            <rect x="263" y="93" width="150" height="112" rx="6" fill="#000" fill-opacity=".12" />
            <rect x="260" y="90" width="150" height="112" rx="6" fill="#fff" stroke="#000" stroke-width="1.5" />
            <KindTile kind="image" x={266} y={95} size={12} />
            <rect x="282" y="99" width="62" height="3.5" rx="1.75" fill="#000" />
            <line x1="260" y1="112" x2="410" y2="112" stroke="#000" stroke-width="1.1" />
            <rect x="270" y="120" width="130" height="74" fill="#e9eef3" />
            <rect x="278" y="128" width="114" height="34" fill="#8fa3b5" />
            <rect x="278" y="170" width="100" height="3" fill="#41546a" />
            <rect x="278" y="178" width="110" height="3" fill="#41546a" />
            <rect x="278" y="186" width="70" height="3" fill="#41546a" />
        </g>

        <!-- a video and a note below -->
        <g class="card c3">
            <rect x="103" y="243" width="150" height="112" rx="6" fill="#000" fill-opacity=".12" />
            <rect x="100" y="240" width="150" height="112" rx="6" fill="#fff" stroke="#000" stroke-width="1.5" />
            <KindTile kind="video" x={106} y={245} size={12} />
            <rect x="122" y="249" width="78" height="3.5" rx="1.75" fill="#000" />
            <line x1="100" y1="262" x2="250" y2="262" stroke="#000" stroke-width="1.1" />
            <rect x="110" y="270" width="130" height="64" fill="#26232c" />
            <circle cx="160" cy="292" r="5" fill="#e9d8c4" />
            <path d="M155 299h10l3 22h-16z" fill="#c9b29b" />
            <circle cx="196" cy="296" r="5" fill="#e9d8c4" />
            <path d="M191 303h10l3 18h-16z" fill="#9fb6c4" />
            <rect x="110" y="340" width="130" height="3" rx="1.5" fill="#e3dee7" />
            <rect x="110" y="340" width="54" height="3" rx="1.5" fill="#800080" />
        </g>
        <g class="card c4">
            <rect x="263" y="243" width="150" height="112" rx="6" fill="#000" fill-opacity=".12" />
            <rect x="260" y="240" width="150" height="112" rx="6" fill="#fff8e1" stroke="#000" stroke-width="1.5" />
            <KindTile kind="text" x={266} y={245} size={12} />
            <rect x="282" y="249" width="50" height="3.5" rx="1.75" fill="#000" />
            <line x1="260" y1="262" x2="410" y2="262" stroke="#000" stroke-width="1.1" />
            <rect x="270" y="274" width="124" height="3" rx="1.5" fill="#4d4d4d" />
            <rect x="270" y="286" width="110" height="3" rx="1.5" fill="#4d4d4d" />
            <rect x="270" y="298" width="120" height="3" rx="1.5" fill="#4d4d4d" />
            <rect x="270" y="310" width="80" height="3" rx="1.5" fill="#4d4d4d" />
        </g>

        <!-- a large picture at the right -->
        <g class="card c5">
            <rect x="453" y="93" width="150" height="262" rx="6" fill="#000" fill-opacity=".12" />
            <rect x="450" y="90" width="150" height="262" rx="6" fill="#fff" stroke="#000" stroke-width="1.5" />
            <KindTile kind="image" x={456} y={95} size={12} />
            <rect x="472" y="99" width="66" height="3.5" rx="1.75" fill="#000" />
            <line x1="450" y1="112" x2="600" y2="112" stroke="#000" stroke-width="1.1" />
            <rect x="460" y="120" width="130" height="222" fill="#d7ecf3" />
            <path d="M460 342v-70l40-30 30 26 26-40 34 34v80z" fill="#7aa7b8" />
            <circle cx="566" cy="152" r="12" fill="#f2b84b" />
        </g>

        <!-- the selection's frame, around the pair -->
        <g class="select">
            <rect x="94" y="84" width="322" height="124" fill="none" stroke="#2b7a99" stroke-width="1.5" stroke-dasharray="5 4" />
            {#each [[94, 84], [416, 84], [94, 208], [416, 208]] as [hx, hy]}
                <rect x={hx - 4} y={hy - 4} width="8" height="8" fill="#fff" stroke="#2b7a99" stroke-width="1.5" />
            {/each}
        </g>
    </svg>
</DemoFrame>

<style>
    .card {
        transform-box: fill-box;
        transform-origin: center;
        animation-duration: 12s;
        animation-timing-function: cubic-bezier(0.45, 0, 0.25, 1);
        animation-iteration-count: infinite;
    }
    .c1 { animation-name: c1; }
    .c2 { animation-name: c2; }
    .c3 { animation-name: c3; }
    .c4 { animation-name: c4; }
    .c5 { animation-name: c5; }

    /* lying anyhow (0–12%), gliding into place (to 30%), in place, then back */
    @keyframes c1 { 0%, 12% { transform: translate(40px, 150px) rotate(-9deg); } 30%, 86% { transform: none; } 100% { transform: translate(40px, 150px) rotate(-9deg); } }
    @keyframes c2 { 0%, 14% { transform: translate(170px, 170px) rotate(7deg); } 32%, 86% { transform: none; } 100% { transform: translate(170px, 170px) rotate(7deg); } }
    @keyframes c3 { 0%, 10% { transform: translate(190px, -120px) rotate(11deg); } 28%, 86% { transform: none; } 100% { transform: translate(190px, -120px) rotate(11deg); } }
    @keyframes c4 { 0%, 16% { transform: translate(-40px, -30px) rotate(-6deg); } 34%, 86% { transform: none; } 100% { transform: translate(-40px, -30px) rotate(-6deg); } }
    @keyframes c5 { 0%, 8%  { transform: translate(-20px, 20px) rotate(4deg) scale(0.8); } 26%, 86% { transform: none; } 100% { transform: translate(-20px, 20px) rotate(4deg) scale(0.8); } }

    .select {
        animation: select 12s ease-out infinite;
    }

    @keyframes select {
        0%, 38% { opacity: 0; }
        42%, 58% { opacity: 1; }
        62%, 100% { opacity: 0; }
    }

    .group {
        animation: group 12s ease-out infinite;
    }

    @keyframes group {
        0%, 60% { opacity: 0; transform: translateY(4px); }
        65%, 84% { opacity: 1; transform: none; }
        90%, 100% { opacity: 0; }
    }
</style>
