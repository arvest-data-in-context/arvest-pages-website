<script>
    export let menu_items = [];
</script>

<div class="lower_menu_cont">
    {#each menu_items as menu_item}
        <a href={menu_item.url}>{menu_item.label}</a>
    {/each}
</div>

<style>
    .lower_menu_cont{
        width: 100%;
        display: flex;
        gap: 0.5em;
        padding-bottom: 1em;
    }

    a{
        font-size: 0.5em;
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