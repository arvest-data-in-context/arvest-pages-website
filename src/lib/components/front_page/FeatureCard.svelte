<script>
    import BigButton from '$lib/components/general_ui/BigButton.svelte';

    export let title = "Title";
    export let description = "Description";
    export let image_url = "/favicon.png";
    export let image_alt = "image";
    export let button_label = "Button";
    export let button_url = "/";
</script>

<div id="container">
    <div id="text_content">
        <h2>
            {title}
        </h2>
        <p id="desc">
            {description}
        </p>

        <div id="button_resizer">
        <BigButton
            label = {button_label}
            url = {button_url}
        />
        </div>
    </div>
    <img src={image_url} alt={image_alt}>
</div>

<style>
    #container{
        padding-top: 3em;
        padding-bottom: 3em;
        width: 100%;
        display: grid;
        gap: 1em;
        grid-template-columns: 1fr 2fr;
    }

    #text_content{
        width: 100%;
        height: fit-content;
    }

    h2{
        color: var(--primary-text);
        font-size: 0.7em;
        padding-bottom: 0.5em;
        width: 100%;
    }

    #desc{
        color: var(--secondary-text);
        font-size: 0.5em;
        padding-bottom: 1em;
    }

    img{
        width: 100%;
    }

    #button_resizer{
        font-size: 0.6em;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        #container{
            grid-template-columns: 1fr 2fr;
            padding-top: 3em;
            padding-bottom: 3em;
        }
        #desc{
            font-size: 0.5em;
        }
        h2{
            font-size: 0.7em;
        }
        #button_resizer{
            font-size: 0.6em;
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        #container{
            grid-template-columns: 1fr 2fr;
            padding-top: 3em;
            padding-bottom: 3em;
        }
        #desc{
            font-size: 0.5em;
        }
        h2{
            font-size: 0.7em;
        }
        #button_resizer{
            font-size: 0.6em;
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        #container{
            grid-template-columns: 1fr;
            padding-top: 2em;
            padding-bottom: 2em;
        }
        #desc{
            font-size: 0.4em;
        }
        h2{
            font-size: 0.6em;
        }
        #button_resizer{
            font-size: 0.6em;
        }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        #container{
            grid-template-columns: 1fr;
            padding-top: 2em;
            padding-bottom: 2em;
        }
        #desc{
            font-size: 0.3em;
        }
        h2{
            font-size: 0.5em;
        }
        #button_resizer{
            font-size: 0.4em;
        }
    }
</style>