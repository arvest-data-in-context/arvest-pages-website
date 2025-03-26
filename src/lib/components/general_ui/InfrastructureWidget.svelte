<script>
    import { base } from '$app/paths';

    import ArrowSVG from '$lib/components/general_ui/ArrowSVG.svelte';

    import { lang } from '$lib/scripts/stores.js';
    import InfrastructureVocab from '$lib/data/vocab/infrastructure.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    function handle_scroll_to(e){
        let target_index = "scroll_to_" + String(e)
        const target = document.getElementById(target_index);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };
</script>

<div class="infrastructure_widget">
    <img src="{base}/imgs/infrastructure/_api.png" alt="api logo" id="api_img" on:click={() => {handle_scroll_to(6)}}>

    <img src="{base}/imgs/infrastructure/_multi-user.png" alt="mmu logo" id="mm_img" on:click={() => {handle_scroll_to(1)}}>
    <p id="mm_label" class="infra-label">{InfrastructureVocab.django.title[langVal]}</p>

    <img src="{base}/imgs/infrastructure/_earth.png" alt="earth logo" id="earth_img" on:click={() => {handle_scroll_to(7)}}>

    <img src="{base}/imgs/infrastructure/_media-stocking.png" alt="stocking logo" id="stocking_img" on:click={() => {handle_scroll_to(5)}}>
    <p id="storgae_label" class="infra-label">{InfrastructureVocab.storage.title[langVal]}</p>

    <img src="{base}/imgs/infrastructure/_mirador-fork.png" alt="mirador logo" id="mirador_img" on:click={() => {handle_scroll_to(2)}}>
    <p id="mirador_label" class="infra-label">{InfrastructureVocab.mirador.title[langVal]}</p>

    <img src="{base}/imgs/infrastructure/_image-annotation.png" alt="imag annotation logo" id="image_anno_img" on:click={() => {handle_scroll_to(3)}}>
    <p id="image_anno_label" class="infra-label">{InfrastructureVocab.image_anno.title[langVal]}</p>

    <img src="{base}/imgs/infrastructure/_video-annotation.png" alt="video annotation logo" id="video_anno_img" on:click={() => {handle_scroll_to(4)}}>
    <p id="av_anno_label" class="infra-label">{InfrastructureVocab.av_anno.title[langVal]}</p>

    <!-- API to mmu -->
    <ArrowSVG
        pointA = {{ left: 48, top: 20 }}
        pointB = {{ left: 48, top: 30 }}
    />

    <!-- Storage to api -->
    <ArrowSVG
        pointA = {{ left: 23, top: 20 }}
        pointB = {{ left: 40, top: 13 }}
    />

    <!-- Storage to world -->
    <ArrowSVG
        pointA = {{ left: 20, top: 53 }}
        pointB = {{ left: 22, top: 66 }}
    />

    <!-- MMU to world -->
    <ArrowSVG
        pointA = {{ left: 30, top: 82 }}
        pointB = {{ left: 36, top: 70 }}
        arrowEnd = {false}
    />

    <!-- API to mirador -->
    <ArrowSVG
        pointA = {{ left: 54, top: 8 }}
        pointB = {{ left: 70, top: 20 }}
    />

    <!-- mmu to mirador -->
    <ArrowSVG
        pointA = {{ left: 60, top: 40 }}
        pointB = {{ left: 69, top: 30 }}
        arrowStart = {false}
    />

    <!-- mirador to image plugin -->
    <ArrowSVG
        pointA = {{ left: 72, top: 41 }}
        pointB = {{ left: 70, top: 50 }}
        arrowStart = {false}
    />

    <!-- image plug to av plug -->
    <ArrowSVG
        pointA = {{ left: 72, top: 68 }}
        pointB = {{ left: 74, top: 75 }}
        arrowStart = {false}
    />
</div>

<style>
    .infra-label{
        font-size: 0.3em;
        color: var(--secondary-text);
        font-family: 'Input-Mono-Narrow-Thin', monospace;
    }

    .infrastructure_widget{
        width: 100%;
        aspect-ratio: 2 / 1; 
        position: relative;
    }

    #api_img{
        cursor: pointer;
        position: absolute;
        width: 15%;
        height: auto;
        left: 40%;
        top: 0%;
        transition-duration: 100ms;
    }

    #api_img:hover{
        width: 17%;
        left: 39%;
        top: -1%;
    }

    #mm_img{
        cursor: pointer;
        position: absolute;
        width: 25%;
        height: auto;
        left: 35%;
        top: 30%;
        transition-duration: 100ms;
    }

    #mm_img:hover{
        width: 27%;
        left: 34%;
        top: 29%;
    }

    #mm_label{
        position: absolute;
        left: 40%;
        top: 70%;
    }

    #earth_img{
        cursor: pointer;
        position: absolute;
        width: 15%;
        height: auto;
        left: 15%;
        top: 68%;
        transition-duration: 100ms;
    }

    #earth_img:hover{
        width: 17%;
        left: 14%;
        top: 67%;
    }

    #stocking_img{
        cursor: pointer;
        position: absolute;
        width: 20%;
        height: auto;
        left: 5%;
        top: 10%;
        transition-duration: 100ms;
    }

    #stocking_img:hover{
        width: 22%;
        left: 4%;
        top: 9%;
    }

    #storgae_label{
        position: absolute;
        left: 19%;
        top: 44%;
        width: 15%;
    }

    #mirador_img{
        cursor: pointer;
        position: absolute;
        width: 25%;
        height: auto;
        left: 70%;
        top: 5%;
        transition-duration: 100ms;
    }

    #mirador_img:hover{
        width: 27%;
        left: 69%;
        top: 4%;
    }

    #mirador_label{
        position: absolute;
        left: 76%;
        top: 40%;
    }

    #image_anno_img{
        cursor: pointer;
        position: absolute;
        width: 15%;
        height: auto;
        left: 64%;
        top: 47%;
        transition-duration: 100ms;
    }

    #image_anno_img:hover{
        width: 17%;
        left: 63%;
        top: 46%;
    }

    #image_anno_label{
        position: absolute;
        left: 78%;
        top: 55%;
    }

    #video_anno_img{
        cursor: pointer;
        position: absolute;
        width: 15%;
        height: auto;
        left: 75%;
        top: 70%;
        transition-duration: 100ms;
    }

    #video_anno_img:hover{
        width: 17%;
        left: 74%;
        top: 69%;
    }

    #av_anno_label{
        position: absolute;
        left: 76%;
        top: 91%;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        .infra-label{
            font-size: 0.3em;
            color: var(--primary-text);
            font-family: 'Input-Mono-Narrow-Thin', monospace;
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        .infra-label{
            font-size: 0.3em;
            color: var(--primary-text);
            font-family: 'Input-Mono-Narrow-Thin', monospace;
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        .infra-label{
            font-size: 0.2em;
            color: var(--primary-text);
            font-family: 'Input-Mono-Narrow-Thin', monospace;
        }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        .infra-label{
            font-size: 0.1em;
            color: var(--primary-text);
            font-family: 'Input-Mono-Narrow-Thin', monospace;
        }
    }
</style>