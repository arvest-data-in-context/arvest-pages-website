<script>
    import { base } from '$app/paths';
    import { lang } from '$lib/scripts/stores.js';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
    export let img_src = base + "/imgs/logos/new_arvest_logo.png";
    export let alt_text = "arvest logo";
    export let site_name = "Arvest";
</script>

<div>
    <a href="{base}/{langVal}">
        <img src={img_src} alt={alt_text}>
        <!-- <p>{site_name}</p> -->
    </a>
</div>

<style>
    a{
        display: flex;
        text-decoration: none;
        color: var(--primary-text);
        height: 3em;
        align-content: center;
        align-items: center;
        gap: 0.5em;
        width: fit-content;
    }

    a:hover{
        cursor: pointer;
    }

    img{
        height: 100%;
    }

    p{
        font-size: 0.8em;
        align-self: center;
        font-family: 'Input-Mono-Narrow', monospace;
    }
</style>