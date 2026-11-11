<script>
    // A demo of Arvest drawn in SVG, framed as a card. Its animations play only while it is
    // on screen (they start when it is scrolled to); with reduced motion it shows its finished
    // picture, still. Without JavaScript it simply plays.
    import { onMount } from 'svelte';

    export let label = "";

    let el;
    let ready = false;
    let playing = false;

    onMount(() => {
        ready = true;
        if (!("IntersectionObserver" in window)) {
            playing = true;
            return;
        }
        const io = new IntersectionObserver(([e]) => (playing = e.isIntersecting), { threshold: 0.2 });
        io.observe(el);
        return () => io.disconnect();
    });
</script>

<div class="demo framed" class:ready class:playing bind:this={el} role="img" aria-label={label}>
    <slot />
</div>

<style>
    .demo {
        position: relative;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: var(--surface);
    }

    .demo :global(svg) {
        display: block;
        width: 100%;
        height: 100%;
    }

    .demo :global(text) {
        user-select: none;
    }

    .demo.ready:not(.playing) :global(*) {
        animation-play-state: paused !important;
    }

    /* Still: every piece in its place (the pieces' own styles are the finished picture). */
    @media (prefers-reduced-motion: reduce) {
        .demo :global(*) {
            animation: none !important;
        }
    }
</style>
