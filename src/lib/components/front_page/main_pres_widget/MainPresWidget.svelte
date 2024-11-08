<script>
    import { createEventDispatcher } from 'svelte'
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    let slide_idx = 0;
    let freeze_time = 5000;
    let slides;
    let incr = false;
    let currentTimeout;
    let back_img;

    const dispatch = createEventDispatcher()

    // Language handling:
    import { lang } from '$lib/scripts/stores.js';
    import PageVocab from '$lib/data/vocab/front_page.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    onMount(()=> {
        let slides_live = document.getElementsByClassName("slide");
        slides = Array.from(slides_live);

        process_slides();
	})

    function handle_nav_to(){
        dispatch('scroll_to', {
            current_slide: slide_idx
        })
    }

    function process_slides(){
        // Increment slide index.
        if(incr){
            if(slide_idx + 1 == slides.length + 1){
                slide_idx = 0;
            }else{
                slide_idx = slide_idx + 1;
            }
        }
        incr = true;
        
        // Detaermine hidden and show states:
        let to_hide = [];
        let to_show = [];

        let back_img_opacity = 1;

        if(slide_idx == 0){
            to_hide = slides;
        }
        else if(slide_idx == slides.length){
            to_hide = slides.slice(0, -1);
            to_show.push(slides[slides.length - 1])

            back_img_opacity = 0;
        }
        else if(slide_idx == 1){
            to_show.push(slides[0]);
            to_hide.push(...slides.slice(1))
        }else if(slide_idx == 2){
            to_hide.push(slides[0]);
            to_show.push(slides[1]);
            to_hide.push(...slides.slice(2));
        }
        else if(slide_idx > 2){
            to_hide.push(slides[0])
            to_show.push(slides[1]);

            for(let i = 2; i < slides.length; i++){
                if(i > slide_idx - 1){
                    to_hide.push(slides[i]);
                }else{
                    to_show.push(slides[i]);
                };
            };
        };

        // Implement state changes:
        for(let i = 0; i < to_show.length; i++){
            to_show[i].style.opacity = "1";
        };
        for(let i = 0; i < to_hide.length; i++){
            to_hide[i].style.opacity = "0";
        };
        back_img.style.opacity = back_img_opacity;

        // Set timeout for next iteration
        currentTimeout = setTimeout(process_slides, freeze_time)
    }

    function handle_nav(direction){
        incr = false;
        if(direction == 1){
            if(slide_idx + 1 == slides.length + 1){
                slide_idx = 0;
            }else{
                slide_idx = slide_idx + 1;
            }
        }else{
            if(slide_idx - 1 == -1){
                slide_idx = slides.length
            }else{
                slide_idx = slide_idx - 1;
            }
        }

        if(currentTimeout){
            clearTimeout(currentTimeout);
        };
        process_slides();
    }
</script>

<div class="main_cont">
    <div class="inner_cont">
        <div class="back_img">
            <img src="{base}/imgs/table_illustrations/slide_1.png" alt="arvest empty desk illustration" bind:this={back_img}>
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/docs_1.png" alt="arvest empty desk illustration">
            </div>
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/docs_2.png" alt="arvest empty desk illustration">
            </div>
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/highlights.png" alt="arvest empty desk illustration">
            </div>
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/arrows.png" alt="arvest empty desk illustration">
            </div>
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/share.png" alt="arvest share your work illustration">
            </div>
        </div>
    </div>
    <div id="textual_content">
        <h2>{PageVocab.presentation_widget[slide_idx].title[langVal]}</h2>
        <p>{PageVocab.presentation_widget[slide_idx].content[langVal]}</p>
        <div class="navigator">
            <button on:click={() => handle_nav_to()}>↓</button>
            <button on:click={() => handle_nav(-1)}>←</button>
            <button on:click={() => handle_nav(1)}>→</button>
        </div>
    </div>
</div>

<style>
    .main_cont{
        width: 100%;
        position: relative;
        z-index: 0;
        display: grid;
        grid-template-columns: 3fr 1fr;
    }

    .inner_cont{
        width: 100%;
        position: relative;
    }

    .back_img{
        width: 100%;
        position: relative;
    }

    .back_img img{
        width: 100%;
        height: auto;
        opacity: 1;
        transition-duration: 1000ms;
    }

    .slide{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0;
        transition-duration: 1000ms;
    }

    .slide_inner_cont{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .slide img{
        width: 100%;
        height: 100%;
    }

    #textual_content{
        width: 25%;
        position: absolute;
        z-index: 9;
        left: 75%;
        top: -10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h2{
        font-size: 1em;
        padding-bottom: 0.5em;
        width: 100%;
        text-align: right;
    }

    p{
        font-size: 0.5em;
        width: 100%;
        text-align: right;
        color: var(--secondary-text);
    }

    button{
        font-size: 0.3em;
        background: none;
        border: none;
        color: var(--secondary-text);
        height: 100%;
        display: inline-block;
    }

    .navigator{
        z-index: 20;
        display: flex;
        height: fit-content;
        padding-top: 0.3em;
        width: 100%;
        justify-content: flex-end;
    }

    button:hover{
        cursor: pointer;
        background-color: rgb(218, 218, 218);
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        .main_cont{
            grid-template-columns: 3fr 1fr;
        }
        #textual_content{
            width: 25%;
            left: 75%;
            top: -10%;
            height: 100%;
        }
        h2{
            font-size: 1em;
            padding-bottom: 0.5em;
            width: 100%;
            text-align: right;
        }

        p{
            font-size: 0.5em;
            width: 100%;
            text-align: right;
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        .main_cont{
            grid-template-columns: 3fr 1fr;
        }
        #textual_content{
            width: 25%;
            left: 75%;
            top: -10%;
            height: 100%;
        }
        h2{
            font-size: 1em;
            padding-bottom: 0.5em;
            width: 100%;
            text-align: right;
        }

        p{
            font-size: 0.5em;
            width: 100%;
            text-align: right;
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        .main_cont{
            grid-template-columns: 1fr;
            margin-bottom: 2em;
        }
        #textual_content{
            width: 100%;
            left: 0%;
            top: 75%;
            height: fit-content;
            padding-top: 0.5em;
            padding-bottom: 0.5em;

        }
        h2{
            font-size: 0.7em;
            padding-bottom: 0.5em;
            width: 100%;
            text-align: right;
        }

        p{
            font-size: 0.4em;
            width: 100%;
            text-align: right;
        }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        .main_cont{
            grid-template-columns: 1fr;
            margin-bottom: 5em;
        }
        #textual_content{
            width: 100%;
            left: 0%;
            top: 75%;
            height: fit-content;
            padding-top: 0.5em;
            padding-bottom: 0.5em;
        }
        h2{
            font-size: 0.7em;
            padding-bottom: 0.5em;
            width: 100%;
            text-align: right;
        }

        p{
            font-size: 0.4em;
            width: 100%;
            text-align: right;
        }
    }
</style>