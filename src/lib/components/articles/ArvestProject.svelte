<script>
    export let project_hash = "1834a259897721d2c76a1fb0553f7e1fd19d4d3a";
    export let width = "100%";
    export let title = "Arvest project";
    export let zoom = "0.7";
</script>

<!-- The workspace drawn smaller (zoom: the page inside is zoomed, the frame keeps its
     size) so more of it shows; 16:9 by CSS, the frame filling the column. -->
<div class="widget_cont framed" style="--w: {width}; --zoom: {zoom};">
    <iframe
        src="https://workspace.arvest.app/mirador/{project_hash}/workspace.json"
        loading="lazy"
        {title}
    ></iframe>
</div>

<style>
    .widget_cont{
        width: var(--w, 100%);
        max-width: 100%;
        aspect-ratio: 16 / 9;
        margin-bottom: 1.5rem;
        overflow: hidden;
        background: var(--dot-grid);
    }

    iframe{
        display: block;
        border: none;
        width: 100%;
        height: 100%;
        zoom: var(--zoom);
    }

    @media (max-width: 700px){
        .widget_cont{
            width: 100%;
        }
    }
</style>
