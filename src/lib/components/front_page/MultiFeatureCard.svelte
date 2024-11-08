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
    <div class="feature_cont">
        <img src="{image_url_1}" alt="{image_alt_1}">
        <h2>{title_1}</h2>
        <p>{description_1}</p>
        
        <div class="button_resizer"><BigButton label={button_label_1} url={button_url_1} /></div>
    </div>

    <div class="feature_cont">
        <img src="{image_url_2}" alt="{image_alt_2}">
        <h2>{title_2}</h2>
        <p>{description_2}</p>
        
        <div class="button_resizer"><BigButton label={button_label_2} url={button_url_2} /></div>
    </div>

    <div class="feature_cont">
        <img src="{image_url_3}" alt="{image_alt_3}">
        <h2>{title_3}</h2>
        <p>{description_3}</p>
        
        <div class="button_resizer"><BigButton label={button_label_3} url={button_url_3} /></div>
    </div>
</div>

<style>
    .main_cont{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 0.5em;
        padding-top: 3em;
        padding-bottom: 3em;
    }

    .feature_cont{
        width: 100%;
        display: table;
    }

    h2{
        font-size: 0.5em;
        padding-bottom: 0.5em;
    }

    p{
        font-size: 0.35em;
        margin-bottom: 1em;
        color: var(--secondary-text);
    }



    .feature_cont img{
        width: 40%;
        height: auto;
        margin-bottom: 0.5em;
    }

    .button_resizer{
        font-size: 0.5em;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        .main_cont{
            grid-template-columns: 1fr 1fr 1fr;
        }
        .feature_cont{
            width: 100%;
            padding-bottom: 0em;
        }

        .feature_cont img{
            width: 40%;
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        .main_cont{
            grid-template-columns: 1fr 1fr 1fr;
        }
        .feature_cont{
            width: 100%;
            padding-bottom: 0em;
        }

        .feature_cont img{
            width: 40%;
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        .main_cont{
            grid-template-columns: 1fr 1fr 1fr;
        }
        .feature_cont{
            width: 100%;
            padding-bottom: 0em;
        }

        .feature_cont img{
            width: 40%;
        }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        .main_cont{
            grid-template-columns: 1fr;
        }
        .feature_cont{
            width: 75%;
            padding-bottom: 1em;
        }

        .feature_cont img{
            width: 20%;
        }
    }
</style>