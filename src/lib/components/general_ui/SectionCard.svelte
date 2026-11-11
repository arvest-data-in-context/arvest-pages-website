<script>
    // One page of a section (Community, Learn, API, About) as a card: its title, a line
    // saying what is there, anything else given (the latest item), then the way in.
    import BigButton from '$lib/components/general_ui/BigButton.svelte';

    export let title = "";
    export let url = "/";
    export let blurb = "";
    export let button_label = "";
    export let latest_label = "";
</script>

<section class="card section_card">
    <h2><a href={url}>{title}</a></h2>
    <p class="blurb">{blurb}</p>

    {#if $$slots.default}
        <div class="latest">
            {#if latest_label}<span class="eyebrow">{latest_label}</span>{/if}
            <slot />
        </div>
    {/if}

    {#if button_label}
        <div class="action">
            <BigButton {url} label={button_label} kind="secondary" />
        </div>
    {/if}
</section>

<style>
    .section_card {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        height: 100%;
        padding: 1.25rem 1.25rem 1.35rem;
    }

    h2 {
        font-size: 1.6rem;
    }

    h2 a {
        color: var(--primary-text);
        text-decoration: none;
    }

    h2 a:hover {
        color: var(--primary);
    }

    .blurb {
        color: var(--secondary-text);
        line-height: 1.5;
    }

    .latest {
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        margin-top: 0.4rem;
    }

    .action {
        margin-top: auto;
        padding-top: 0.6rem;
    }
</style>
