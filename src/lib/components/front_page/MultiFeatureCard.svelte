<script>
    import BigButton from '$lib/components/general_ui/BigButton.svelte';

    export let title_1 = "Title";
    export let description_1 = "Description";
    export let image_url_1 = "/favicon.png";
    export let image_alt_1 = "image";
    export let button_label_1 = "Button";
    export let button_url_1 = "/";

    export let title_2 = "Title";
    export let description_2 = "Description";
    export let image_url_2 = "/favicon.png";
    export let image_alt_2 = "image";
    export let button_label_2 = "Button";
    export let button_url_2 = "/";

    export let title_3 = "Title";
    export let description_3 = "Description";
    export let image_url_3 = "/favicon.png";
    export let image_alt_3 = "image";
    export let button_label_3 = "Button";
    export let button_url_3 = "/";
</script>

<div class="main_cont">
    <section class="card feature_cont">
        <img src="{image_url_1}" alt="{image_alt_1}" loading="lazy">
        <h2>{title_1}</h2>
        <p>{description_1}</p>
        <div class="button_resizer"><BigButton label={button_label_1} url={button_url_1} kind="secondary" /></div>
    </section>

    <section class="card feature_cont">
        <img src="{image_url_2}" alt="{image_alt_2}" loading="lazy">
        <h2>{title_2}</h2>
        <p>{description_2}</p>
        <div class="button_resizer"><BigButton label={button_label_2} url={button_url_2} kind="secondary" /></div>
    </section>

    <section class="card feature_cont">
        <img src="{image_url_3}" alt="{image_alt_3}" loading="lazy">
        <h2>{title_3}</h2>
        <p>{description_3}</p>
        <div class="button_resizer"><BigButton label={button_label_3} url={button_url_3} kind="secondary" /></div>
    </section>

</div>

<style>
    .main_cont{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
        gap: 1.5rem;
        padding: clamp(2.5rem, 6vw, 4rem) 0 1rem;
    }

    .feature_cont{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.6rem;
        padding: 1.25rem 1.25rem 1.4rem;
    }

    .feature_cont img{
        width: auto;
        height: 84px;
        margin-bottom: 0.4rem;
    }

    h2{
        font-size: 1.6rem;
    }

    p{
        color: var(--secondary-text);
        line-height: 1.5;
    }

    .button_resizer{
        margin-top: auto;
        padding-top: 0.6rem;
    }
</style>
