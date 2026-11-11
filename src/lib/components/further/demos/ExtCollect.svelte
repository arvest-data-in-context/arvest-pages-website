<script>
    // The extension, collecting: on a web page, its popup lists the media it found (an
    // image, a video, a PDF, a YouTube video); each "+" turns into a tick as it becomes an
    // Arvest document. The finished picture: every row added.
    import DemoFrame from '$lib/components/front_page/demos/DemoFrame.svelte';
    import KindTile from '$lib/components/front_page/demos/KindTile.svelte';
    import ToolChrome from './ToolChrome.svelte';
    export let label = "";

    const rows = [["image", 92], ["video", 70], ["pdf", 104], ["video", 84]];
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ToolChrome id="collect" kind="browser" ext_on />

        <!-- the web page -->
        <rect x="40" y="76" width="120" height="6" rx="3" fill="#000" />
        <rect x="40" y="92" width="200" height="3" rx="1.5" fill="#9a9a9a" />
        <rect x="40" y="110" width="200" height="120" fill="#d7ecf3" />
        <path d="M40 230l60-56 40 34 30-22 70 44z" fill="#7aa7b8" />
        <circle cx="206" cy="136" r="11" fill="#f2b84b" />
        <rect x="256" y="110" width="110" height="120" fill="#26232c" />
        <path d="M302 158v24l20-12z" fill="#fff" fill-opacity=".85" />
        {#each [0, 1, 2, 3, 4] as i}
            <rect x="40" y={248 + i * 14} width={[320, 300, 326, 280, 180][i]} height="3" rx="1.5" fill="#bdbdbd" />
        {/each}
        <rect x="40" y="326" width="110" height="34" rx="4" fill="#fdeeee" stroke="#b3261e" stroke-opacity=".4" />
        <rect x="54" y="341.5" width="60" height="3" rx="1.5" fill="#b3261e" fill-opacity=".6" />

        <!-- the popup -->
        <g class="popup">
            <rect x="389" y="63" width="232" height="246" rx="8" fill="#000" fill-opacity=".12" />
            <rect x="386" y="60" width="232" height="246" rx="8" fill="#fff" stroke="#000" stroke-width="1.5" />
            <rect x="400" y="74" width="70" height="4" rx="2" fill="#000" />
            <rect x="540" y="69" width="64" height="16" rx="8" fill="none" stroke="#000" stroke-width="1.1" />
            <rect x="552" y="75.5" width="40" height="3" rx="1.5" fill="#4d4d4d" />
            <line x1="386" y1="94" x2="618" y2="94" stroke="#e3dee7" stroke-width="1.2" />
            {#each rows as [kind, w], i}
                <g class="row r{i}">
                    <KindTile {kind} x={400} y={106 + i * 48} size={28} />
                    <rect x="438" y={113 + i * 48} width={w} height="4" rx="2" fill="#000" />
                    <rect x="438" y={124 + i * 48} width={w - 30} height="3" rx="1.5" fill="#9a9a9a" />
                    <g class="plus">
                        <rect x="566" y={110 + i * 48} width="38" height="20" rx="10" fill="#800080" />
                        <path d="M585 {114 + i * 48}v12M579 {120 + i * 48}h12" stroke="#fff" stroke-width="1.8" stroke-linecap="round" />
                    </g>
                    <g class="tick t{i}">
                        <rect x="566" y={110 + i * 48} width="38" height="20" rx="10" fill="#2e7d32" />
                        <path d="M577 {120 + i * 48}l5 5 9-9" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </g>
            {/each}
            <rect x="400" y="280" width="204" height="16" rx="8" fill="#f4ecf4" />
            <rect x="452" y="286.5" width="100" height="3" rx="1.5" fill="#800080" />
        </g>
    </svg>
</DemoFrame>

<style>
    .popup {
        transform-box: fill-box;
        transform-origin: top right;
        animation: open 12s ease-out infinite;
    }

    @keyframes open {
        0%, 4%    { opacity: 0; transform: scale(0.85); }
        9%, 92%   { opacity: 1; transform: none; }
        100%      { opacity: 0; transform: scale(0.95); }
    }

    .row {
        animation: row 12s ease-out infinite backwards;
    }
    .r0 { animation-delay: 1.2s; }
    .r1 { animation-delay: 1.5s; }
    .r2 { animation-delay: 1.8s; }
    .r3 { animation-delay: 2.1s; }

    @keyframes row {
        0%   { opacity: 0; transform: translateY(6px); }
        4%   { opacity: 1; transform: none; }
        100% { opacity: 1; }
    }

    .tick {
        transform-box: fill-box;
        transform-origin: center;
        animation: tick 12s ease-out infinite backwards;
    }
    .t0 { animation-delay: 3s; }
    .t1 { animation-delay: 4.2s; }
    .t2 { animation-delay: 5.4s; }
    .t3 { animation-delay: 6.6s; }

    @keyframes tick {
        0%   { opacity: 0; transform: scale(0.6); }
        3%   { opacity: 1; transform: scale(1.12); }
        5%   { transform: none; }
        100% { opacity: 1; }
    }
</style>
