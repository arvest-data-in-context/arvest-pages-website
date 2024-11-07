<script>
    import { base } from '$app/paths';
    import { lang } from '$lib/scripts/stores.js';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    export let label = "Link";
    export let url = "/";
</script>

<a href={base + "/" + langVal + url}>
    {label}
</a>

<style>
    a{
        font-size: 0.8em;
        align-self: center;
        font-family: 'Input-Mono-Narrow-Thin', monospace;
        color: var(--secondary-text);
        text-decoration: none;
    }

    a:hover{
        color: var(--primary-text);
        cursor: pointer;
    }
</style>