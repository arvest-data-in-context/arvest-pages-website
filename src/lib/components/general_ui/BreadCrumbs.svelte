<script>
    export let breadcrumbs = [];
</script>

<nav aria-label="Breadcrumb">
    <ul>
      {#each breadcrumbs as { text, href }, i}
        <li>
          <a href={href}>{text}</a>
          
        </li>
        {#if i < breadcrumbs.length - 1}
            <li>&gt;</li>
          {/if}
      {/each}
    </ul>
</nav>

<style>
    nav{
        padding-bottom: 1em;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        font-size: 0.5em;
        width: 100%;
    }

    li{
        padding-right: 0.5em;
        font-family: 'Input-Mono-Narrow-Thin', monospace;
        color: var(--secondary-text);
        text-decoration: none;
    }

    a{
        text-decoration: none;
        width: 100%;
        font-family: 'Input-Mono-Narrow-Thin', monospace;
        color: var(--secondary-text);
        text-decoration: none;
        font-size: 1em;
    }

    a:hover{
        color: var(--primary-text);
        cursor: pointer;
    }
</style>