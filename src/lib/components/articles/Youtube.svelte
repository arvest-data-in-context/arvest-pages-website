<script>
    import { base } from '$app/paths';
    import { onMount, onDestroy } from 'svelte';

    export let youtube_src = "zQOm8V22wI4";
    export let width = "50%";
    export let title = "YouTube video player" 

    let iframe_el;

    onMount(() => {
		resize_el();

        window.addEventListener('resize', resize_el);

        onDestroy(() => {
            window.removeEventListener('resize', resize_el);
        });
	});

    function resize_el(){
        if (iframe_el) {
            const width = iframe_el.offsetWidth;
            const height = width * 9 / 16; // for 16:9 ratio
            iframe_el.style.height = `${height}px`;
        }
    }
</script>

<div class="widget_cont" style="width: {width};">
    <iframe 
        src="https://www.youtube.com/embed/{youtube_src}" 
        title={title}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
        bind:this={iframe_el}
    >
    </iframe>
</div>

<style>
    .widget_cont{
        width: 100%;
        height: 100%;
        margin-bottom: 1em;
        
    }

    iframe{
        width: 100%;
        box-sizing: border-box;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    }
</style>