<script>
    export let youtube_src = "zQOm8V22wI4";
    export let width = "50%";
    export let title = "YouTube video player";
</script>

<!-- 16:9 by CSS; the width asked for on a large screen, the whole column on a phone. -->
<div class="widget_cont" style="--w: {width};">
    <iframe
        class="framed"
        src="https://www.youtube.com/embed/{youtube_src}"
        {title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
    ></iframe>
</div>

<style>
    .widget_cont {
        width: var(--w, 100%);
        max-width: 100%;
        margin-bottom: 1.5rem;
    }

    iframe {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        height: auto;
        background: var(--dot-grid);
    }

    @media (max-width: 700px) {
        .widget_cont {
            width: 100%;
        }
    }
</style>
