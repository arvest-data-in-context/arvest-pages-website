<script>
    // "A digital desk": documents land on the workspace one after another (a picture, a
    // video playing, a note, a sound), as cards; the pointer moves between them.
    import DemoFrame from './DemoFrame.svelte';
    import DemoChrome from './DemoChrome.svelte';
    import KindTile from './KindTile.svelte';
    export let label = "";
</script>

<DemoFrame {label}>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <DemoChrome id="desk" page={0} />

        <!-- a picture -->
        <g class="pop p1">
            <rect x="83" y="69" width="210" height="146" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="80" y="66" width="210" height="146" rx="7" fill="#fff" stroke="#000" stroke-width="1.5" />
            <KindTile kind="image" x={88} y={72} size={14} />
            <rect x="108" y="77" width="90" height="4" rx="2" fill="#000" />
            <line x1="80" y1="92" x2="290" y2="92" stroke="#000" stroke-width="1.2" />
            <rect x="88" y="99" width="194" height="105" rx="2" fill="#d7ecf3" />
            <path d="M88 204l52-48 34 30 26-20 82 38z" fill="#7aa7b8" />
            <path d="M88 204l70-34 40 34z" fill="#5d8a9c" />
            <circle cx="244" cy="124" r="11" fill="#f2b84b" />
        </g>

        <!-- a video, playing -->
        <g class="pop p2">
            <rect x="323" y="81" width="236" height="160" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="320" y="78" width="236" height="160" rx="7" fill="#fff" stroke="#000" stroke-width="1.5" />
            <KindTile kind="video" x={328} y={84} size={14} />
            <rect x="348" y="89" width="110" height="4" rx="2" fill="#000" />
            <line x1="320" y1="104" x2="556" y2="104" stroke="#000" stroke-width="1.2" />
            <rect x="328" y="110" width="220" height="100" rx="2" fill="#26232c" />
            <path d="M420 110h36l40 100h-116z" fill="#fff" fill-opacity=".1" />
            <ellipse cx="438" cy="200" rx="58" ry="7" fill="#fff" fill-opacity=".08" />
            <g class="sway">
                <circle cx="430" cy="152" r="7" fill="#e9d8c4" />
                <path d="M422 163h16l4 32h-24z" fill="#c9b29b" />
            </g>
            <circle cx="336" cy="225" r="5" fill="#800080" />
            <rect x="348" y="223" width="196" height="4" rx="2" fill="#e3dee7" />
            <rect class="progress" x="348" y="223" width="196" height="4" rx="2" fill="#800080" />
        </g>

        <!-- a note -->
        <g class="pop p3">
            <rect x="123" y="247" width="176" height="112" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="120" y="244" width="176" height="112" rx="7" fill="#fff8e1" stroke="#000" stroke-width="1.5" />
            <KindTile kind="text" x={128} y={250} size={14} />
            <rect x="148" y="255" width="70" height="4" rx="2" fill="#000" />
            <line x1="120" y1="270" x2="296" y2="270" stroke="#000" stroke-width="1.2" />
            <rect x="130" y="282" width="150" height="3.5" rx="1.75" fill="#4d4d4d" />
            <rect x="130" y="296" width="132" height="3.5" rx="1.75" fill="#4d4d4d" />
            <rect x="130" y="310" width="144" height="3.5" rx="1.75" fill="#4d4d4d" />
            <rect x="130" y="324" width="90" height="3.5" rx="1.75" fill="#4d4d4d" />
        </g>

        <!-- a sound -->
        <g class="pop p4">
            <rect x="363" y="273" width="200" height="88" rx="7" fill="#000" fill-opacity=".12" />
            <rect x="360" y="270" width="200" height="88" rx="7" fill="#fff" stroke="#000" stroke-width="1.5" />
            <KindTile kind="audio" x={368} y={276} size={14} />
            <rect x="388" y="281" width="80" height="4" rx="2" fill="#000" />
            <line x1="360" y1="296" x2="560" y2="296" stroke="#000" stroke-width="1.2" />
            {#each [10, 18, 26, 14, 30, 22, 12, 24, 32, 18, 10, 20, 28, 16, 22, 12, 26, 14, 8, 18] as h, i}
                <rect class="bar b{i % 4}" x={372 + i * 9} y={327 - h / 2} width="5" height={h} rx="2.5" fill="#2e7d32" fill-opacity=".75" />
            {/each}
        </g>

        <!-- the pointer -->
        <g class="cursor">
            <path d="M0 0v17l4.5-4.2 3 6.8 3-1.3-3-6.6H14z" fill="#000" stroke="#fff" stroke-width="1.2" stroke-linejoin="round" />
        </g>
    </svg>
</DemoFrame>

<style>
    .pop {
        transform-box: fill-box;
        transform-origin: center;
        animation: pop 12s ease-out infinite backwards;
    }
    .p1 { animation-delay: 0.3s; }
    .p2 { animation-delay: 1.5s; }
    .p3 { animation-delay: 2.7s; }
    .p4 { animation-delay: 3.9s; }

    @keyframes pop {
        0%   { opacity: 0; transform: translateY(14px) scale(0.94); }
        5%   { opacity: 1; transform: none; }
        84%  { opacity: 1; transform: none; }
        90%  { opacity: 0; transform: translateY(6px) scale(0.98); }
        100% { opacity: 0; transform: translateY(14px) scale(0.94); }
    }

    .progress {
        transform-box: fill-box;
        transform-origin: left center;
        animation: play 6s linear infinite;
    }

    @keyframes play {
        from { transform: scaleX(0.02); }
        to   { transform: scaleX(1); }
    }

    .sway {
        animation: sway 3s ease-in-out infinite alternate;
    }

    @keyframes sway {
        from { transform: translateX(-10px); }
        to   { transform: translateX(14px); }
    }

    .bar {
        transform-box: fill-box;
        transform-origin: center;
        animation: level 1.2s ease-in-out infinite alternate;
    }
    .b1 { animation-duration: 0.9s; }
    .b2 { animation-duration: 1.5s; }
    .b3 { animation-duration: 1.1s; }

    @keyframes level {
        from { transform: scaleY(0.45); }
        to   { transform: scaleY(1); }
    }

    .cursor {
        animation: point 12s ease-in-out infinite;
        transform: translate(470px, 180px);
    }

    @keyframes point {
        0%   { transform: translate(600px, 380px); }
        10%  { transform: translate(250px, 150px); }
        24%  { transform: translate(250px, 150px); }
        34%  { transform: translate(470px, 180px); }
        50%  { transform: translate(470px, 180px); }
        60%  { transform: translate(240px, 300px); }
        72%  { transform: translate(500px, 330px); }
        86%  { transform: translate(500px, 330px); }
        100% { transform: translate(600px, 380px); }
    }
</style>
