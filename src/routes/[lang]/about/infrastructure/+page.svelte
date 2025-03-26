<script>
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';

    import InfrastructureWidget from '$lib/components/general_ui/InfrastructureWidget.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    import InfrastructureVocab from '$lib/data/vocab/infrastructure.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal], href: base + "/" + langVal + "/about"},
        { text: BCVocab.about_arvest[langVal], href: base + "/" + langVal + "/about/infrastructure"}
      ]}
    />

<div class="cont">
    <InfrastructureWidget />

    <div class="infra_card" id="scroll_to_1">
        <div class="image_div" style="background-image: url('{base}/{InfrastructureVocab.django.img}');"></div>
        <div class="infra_text_part">
            <h3>{InfrastructureVocab.django.title[langVal]}</h3>
            <p>{InfrastructureVocab.django.description[langVal]}</p>
            <div class="button_resizer">
                <BigButton
                    url = {InfrastructureVocab.django.link.url}
                    label = {InfrastructureVocab.django.link.label[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="infra_card" id="scroll_to_2">
        <div class="image_div" style="background-image: url('{base}/{InfrastructureVocab.mirador.img}');"></div>
        <div class="infra_text_part">
            <h3>{InfrastructureVocab.mirador.title[langVal]}</h3>
            <p>{InfrastructureVocab.mirador.description[langVal]}</p>
            <div class="button_resizer">
                <BigButton
                    url = {InfrastructureVocab.mirador.link.url}
                    label = {InfrastructureVocab.mirador.link.label[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="infra_card" id="scroll_to_3">
        <div class="image_div" style="background-image: url('{base}/{InfrastructureVocab.image_anno.img}');"></div>
        <div class="infra_text_part">
            <h3>{InfrastructureVocab.image_anno.title[langVal]}</h3>
            <p>{InfrastructureVocab.image_anno.description[langVal]}</p>
            <div class="button_resizer">
                <BigButton
                    url = {InfrastructureVocab.image_anno.link.url}
                    label = {InfrastructureVocab.image_anno.link.label[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="infra_card" id="scroll_to_4">
        <div class="image_div" style="background-image: url('{base}/{InfrastructureVocab.av_anno.img}');"></div>
        <div class="infra_text_part">
            <h3>{InfrastructureVocab.av_anno.title[langVal]}</h3>
            <p>{InfrastructureVocab.av_anno.description[langVal]}</p>
            <div class="button_resizer">
                <BigButton
                    url = {InfrastructureVocab.av_anno.link.url}
                    label = {InfrastructureVocab.av_anno.link.label[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="infra_card" id="scroll_to_5">
        <div class="image_div" style="background-image: url('{base}/{InfrastructureVocab.storage.img}');"></div>
        <div class="infra_text_part">
            <h3>{InfrastructureVocab.storage.title[langVal]}</h3>
            <p>{InfrastructureVocab.storage.description[langVal]}</p>
            <div class="button_resizer">
                <BigButton
                    url = {InfrastructureVocab.storage.link.url}
                    label = {InfrastructureVocab.storage.link.label[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="infra_card" id="scroll_to_6">
        <div class="image_div" style="background-image: url('{base}/{InfrastructureVocab.api.img}');"></div>
        <div class="infra_text_part">
            <h3>{InfrastructureVocab.api.title[langVal]}</h3>
            <p>{InfrastructureVocab.api.description[langVal]}</p>
            <div class="button_resizer">
                <BigButton
                    url = "{base}/{langVal}/api/documentation"
                    label = {InfrastructureVocab.api.link.label[langVal]}
                />
            </div>
        </div>
    </div>

    <div class="infra_card" id="scroll_to_7">
        <div class="image_div" style="background-image: url('{base}/{InfrastructureVocab.world.img}');"></div>
        <div class="infra_text_part">
            <h3>{InfrastructureVocab.world.title[langVal]}</h3>
            <p>{InfrastructureVocab.world.description[langVal]}</p>
        </div>
    </div>

</div>

<style>
    .button_resizer{
        margin-top: 0.5em;
        font-size: 0.5em;
    }

    .cont{
        padding-bottom: 5em;
    }

    .infra_card{
        margin-top: 2em;
        padding-top: 2em;
        width: 80%;
        display: flex;
        gap: 1em;
        /* align-items: center; */
    }

    .infra_text_part{
        width: 100%;
    }

    h3{
        font-size: 0.7em;
    }

    p{
        margin-top: 1em;
        font-size: 0.3em;
        color: var(--secondary-text);
        font-family: 'Input-Mono-Narrow-Thin', monospace;
    }

    a{
        font-size: 0.3em;
        color: var(--secondary-text);
        font-family: 'Input-Mono-Narrow-Thin', monospace;
        font-style: normal;
    }

    .image_div{
        width: 30%;
        aspect-ratio: 2 / 2; 
        background-size: contain;
        background-position: top left; 
        background-repeat: no-repeat;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        .infra_card{
            margin-top: 1em;
            width: 80%;
            display: flex;
            padding-top: 2em;
        }

        h3{
            margin-top: 0em;
        }

        .image_div{
            width: 30%;
            aspect-ratio: 2 / 2; 
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        .infra_card{
            margin-top: 1em;
            width: 80%;
            display: flex;
            padding-top: 2em;
        }

        h3{
            margin-top: 0em;
        }

        .image_div{
            width: 30%;
            aspect-ratio: 2 / 2; 
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        .infra_card{
            margin-top: 3em;
            width: 100%;
            display: block;
            padding-top: 1em;
        }

        h3{
            margin-top: 1em;
        }

        .image_div{
            width: 50%;
            aspect-ratio: 2 / 1; 
        }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        .infra_card{
            margin-top: 3em;
            width: 100%;
            display: block;
            padding-top: 1em;
        }

        h3{
            margin-top: 1em;
        }

        .image_div{
            width: 50%;
            aspect-ratio: 2 / 1; 
        }
    }
</style>