<script>
    import BigButton from '$lib/components/general_ui/BigButton.svelte';

    export let title = "Title";
    export let description = "Description";
    export let image_url = "/favicon.png";
    export let image_alt = "image";
    export let button_label = "Button";
    export let button_url = "/";
    export let scroll_to_index = -1;
    export let number = 0;
    export let flip = false;
    export let demo = null;     // an animated demo (front_page/demos) instead of the picture
</script>

<section class="feature" class:flip id={"scroll_to" + String(scroll_to_index)}>
    <div class="text_content">
        {#if number}<span class="eyebrow">{String(number).padStart(2, "0")}</span>{/if}
        <h2>{title}</h2>
        <p class="desc">{description}</p>
        {#if button_label}<BigButton label={button_label} url={button_url} kind="quiet" />{/if}
    </div>
    {#if demo}
        <svelte:component this={demo} label={image_alt} />
    {:else}
        <img class="framed" src={image_url} alt={image_alt} loading="lazy">
    {/if}
</section>

<style>
    .feature {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.7fr);
        gap: clamp(1.5rem, 4vw, 3.5rem);
        align-items: center;
        padding: clamp(2rem, 5vw, 3.5rem) 0;
        border-top: 1px solid var(--line-soft);
        scroll-margin-top: calc(var(--nav-h) + 1rem);
    }

    .flip {
        grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr);
    }

    .flip .text_content {
        order: 2;
    }

    .text_content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.6rem;
    }

    .eyebrow {
        color: var(--primary);
    }

    h2 {
        font-size: clamp(1.6rem, 1.3rem + 1.2vw, 2.2rem);
    }

    .desc {
        color: var(--secondary-text);
        line-height: 1.55;
        margin-bottom: 0.5rem;
    }

    img {
        height: auto;
    }

    @media (max-width: 860px) {
        .feature,
        .flip {
            grid-template-columns: 1fr;
            gap: 1.25rem;
        }
        .flip .text_content {
            order: 0;
        }
    }
</style>
