<script>
    export let label = "Button";
    export let url = "/";
</script>

<a href={url}>
    {label}
</a>

<style>
    a{
        font-size: 0.6em;
        align-self: center;
        font-family: 'Input-Mono-Narrow-Thin', monospace;
        color: var(--big-button-label-color);
        text-decoration: none;
        background-color: var(--big-button-background-color);
        padding: 0.5em;
        border-radius: 10px;
    }

    a:hover{
        cursor: pointer;
        background-color: var(--big-button-background-color-hover);
    }
</style>