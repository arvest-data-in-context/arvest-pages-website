<script>
    import { base } from '$app/paths';
    import { onMount, onDestroy } from 'svelte';

    export let project_hash = "1834a259897721d2c76a1fb0553f7e1fd19d4d3a";
    export let width = "100%";
    export let title = "Arvest project" 
    export let zoom = "0.7";

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
            iframe_el.style.zoom = zoom;

            const width = iframe_el.offsetWidth;
            const height = width * 9 / 16; // for 16:9 ratio
            iframe_el.style.height = `${height}px`;
        }
    }
</script>

<div class="widget_cont" style="width: {width};">
    <iframe 
        bind:this={iframe_el}
        src="https://workspace.arvest.app/mirador/{project_hash}/workspace.json"  
        style="border:none;" 
        title={title}>
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