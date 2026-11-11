<script>
    export let breadcrumbs = [];
</script>

<nav aria-label="Breadcrumb">
    <ol>
        {#each breadcrumbs as { text, href }, i}
            <li>
                {#if i < breadcrumbs.length - 1}
                    {#if href}<a {href}>{text}</a>{:else}<span>{text}</span>{/if}
                    <span class="sep" aria-hidden="true">›</span>
                {:else}
                    <span class="here" aria-current="page">{text}</span>
                {/if}
            </li>
        {/each}
    </ol>
</nav>

<style>
    nav {
        padding: 0.25rem 0 1rem;
    }

    ol {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 0.25rem 0.5rem;
        font-size: 0.85rem;
        color: var(--secondary-text);
    }

    li {
        display: inline-flex;
        align-items: baseline;
        gap: 0.5rem;
        min-width: 0;
    }

    a {
        color: var(--secondary-text);
        text-decoration: none;
    }

    a:hover {
        color: var(--primary);
        text-decoration: underline;
    }

    .sep {
        color: var(--line);
    }

    .here {
        color: var(--primary-text);
        overflow-wrap: anywhere;
    }
</style>
