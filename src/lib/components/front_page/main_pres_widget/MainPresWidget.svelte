<script>
    import { createEventDispatcher } from 'svelte'
    import { onMount, onDestroy } from 'svelte';
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

    onDestroy(() => {
        if(currentTimeout){
            clearTimeout(currentTimeout);
        }
    });

    function go_to(idx){
        incr = false;
        slide_idx = idx;
        if(currentTimeout){
            clearTimeout(currentTimeout);
        };
        process_slides();
    }

    function handle_nav_to(){
        dispatch('scroll_to', {
            current_slide: slide_idx
        })
    }

    function process_slides(){
        if(!back_img || !slides){ return; }
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

<section class="main_cont" aria-roledescription="carousel" aria-label="Arvest">
    <div class="intro">
        <slot />
    </div>

    <div class="inner_cont">
        <div class="back_img">
            <img src="{base}/imgs/table_illustrations/slide_1.png" alt="" bind:this={back_img} width="1800" height="1420">
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/docs_1.png" alt="" width="1800" height="1420">
            </div>
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/docs_2.png" alt="" width="1800" height="1420">
            </div>
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/highlights.png" alt="" width="1800" height="1420">
            </div>
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/arrows.png" alt="" width="1800" height="1420">
            </div>
        </div>

        <div class="slide">
            <div class="slide_inner_cont">
                <img src="{base}/imgs/table_illustrations/share.png" alt="" width="1800" height="1420">
            </div>
        </div>
    </div>

    <div id="textual_content" class="card">
        <span class="eyebrow">{slide_idx + 1} / {PageVocab.presentation_widget.length}</span>
        <!-- Every slide's words in the same cell, only the current one shown: the card is
             always as tall as the longest, so it never changes size and never moves the table. -->
        <div class="words" aria-live="polite">
            {#each PageVocab.presentation_widget as item, i}
                <div class="slide_words" class:shown={i === slide_idx} aria-hidden={i !== slide_idx}>
                    <h2>{item.title[langVal]}</h2>
                    <p>{item.content[langVal]}</p>
                </div>
            {/each}
        </div>

        <div class="navigator">
            <div class="dots">
                {#each PageVocab.presentation_widget as item, i}
                    <button class="dot" class:on={i === slide_idx} aria-label={item.title[langVal]} aria-current={i === slide_idx ? "step" : undefined} on:click={() => go_to(i)}></button>
                {/each}
            </div>
            <div class="arrows">
                <button class="round" aria-label="Previous" on:click={() => handle_nav(-1)}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
                </button>
                <button class="round" aria-label="Next" on:click={() => handle_nav(1)}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>

        <button class="more" on:click={() => handle_nav_to()}>
            ↓ {langVal === "fr" ? "En savoir plus" : "Read more below"}
        </button>
    </div>
</section>

<style>
    /* The landing page's first screen: the table takes all the room the window gives
       (as tall as the window allows, never wider than its column); the page's intro and the
       slide's words at its left. Narrow: intro, table, words, one under the other. */
    .main_cont{
        --table-ratio: 1.2676;   /* 1800 × 1420, the drawings */
        display: grid;
        grid-template-columns: minmax(280px, 1fr) minmax(0, 2.3fr);
        grid-template-areas:
            "intro table"
            "caption table";
        grid-template-rows: auto 1fr;
        column-gap: clamp(1.5rem, 3vw, 3rem);
        row-gap: 1.5rem;
        align-items: start;
        max-width: calc(var(--page-max) + 2 * var(--gutter));
        min-height: calc(100vh - var(--nav-h) - 5.5rem);
        min-height: calc(100svh - var(--nav-h) - 5.5rem);
        margin: 0 auto;
        padding: clamp(1rem, 3vh, 2rem) var(--gutter) 1rem;
    }

    .intro{
        grid-area: intro;
        align-self: end;
    }

    .inner_cont{
        grid-area: table;
        position: relative;
        align-self: center;
        justify-self: center;
        width: min(100%, calc((100vh - var(--nav-h) - 7.5rem) * var(--table-ratio)));
        width: min(100%, calc((100svh - var(--nav-h) - 7.5rem) * var(--table-ratio)));
    }

    /* The drawing and its layers share one grid cell, each at its own size (all are
       1800 × 1420), so a layer always lies exactly over the table whatever the width,
       and only its opacity changes. */
    .inner_cont{
        display: grid;
    }

    .back_img,
    .slide{
        grid-area: 1 / 1;
        min-width: 0;
    }

    .back_img img,
    .slide img{
        display: block;
        width: 100%;
        height: auto;
    }

    .back_img img{
        opacity: 1;
        transition: opacity 1000ms;
    }

    .slide{
        opacity: 0;
        transition: opacity 1000ms;
        pointer-events: none;
    }

    /* The slide's words: a small card. */
    #textual_content{
        grid-area: caption;
        align-self: start;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        padding: 1.1rem 1.2rem 1.2rem;
        border-width: 1.5px;
        box-shadow: var(--panel-shadow);
    }

    .eyebrow{
        color: var(--primary);
    }

    .words{
        display: grid;
    }

    .slide_words{
        grid-area: 1 / 1;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.4s, visibility 0s 0.4s;
    }

    .slide_words.shown{
        visibility: visible;
        opacity: 1;
        transition: opacity 0.4s;
    }

    h2{
        font-size: clamp(1.4rem, 1.2rem + 0.8vw, 1.8rem);
        padding-bottom: 0.3rem;
    }

    p{
        color: var(--secondary-text);
        line-height: 1.5;
    }

    .navigator{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        margin-top: 0.25rem;
    }

    .dots{
        display: flex;
        gap: 0.2rem;
    }

    /* 22px targets around a small dot. */
    .dot{
        position: relative;
        width: 22px;
        height: 22px;
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
    }

    .dot::after{
        content: "";
        position: absolute;
        inset: 7px;
        border-radius: 50%;
        background: var(--line);
        transition: background-color 0.15s, transform 0.15s;
    }

    .dot:hover::after{
        background: var(--secondary-text);
    }

    .dot.on::after{
        background: var(--primary);
        transform: scale(1.25);
    }

    .arrows{
        display: flex;
        gap: 0.4rem;
    }

    .round{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 0;
        border: 1.5px solid var(--primary-text);
        border-radius: 50%;
        background: var(--surface);
        color: var(--primary-text);
        cursor: pointer;
        transition: background-color 0.12s, color 0.12s;
    }

    .round:hover{
        background: var(--primary-tint);
        color: var(--primary);
    }

    .round svg{
        width: 20px;
        height: 20px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .more{
        align-self: flex-start;
        padding: 0.3em 0.9em;
        border: 1px solid var(--line);
        border-radius: 999px;
        background: var(--surface);
        color: var(--secondary-text);
        font-family: var(--font-ui);
        font-size: 0.85rem;
        cursor: pointer;
    }

    .more:hover{
        border-color: var(--primary);
        color: var(--primary);
    }

    @media (max-width: 900px){
        .main_cont{
            grid-template-columns: 1fr;
            grid-template-areas:
                "intro"
                "table"
                "caption";
            grid-template-rows: auto;
            min-height: 0;
            row-gap: 1rem;
        }
        .inner_cont{
            width: 100%;
        }
        p{
            min-height: 0;
        }
    }
</style>
