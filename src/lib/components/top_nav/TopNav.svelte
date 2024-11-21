<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    import SiteLogo from '$lib/components/top_nav/SiteLogo.svelte';
    import TopNavLink from '$lib/components/top_nav/TopNavLink.svelte';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';
    import LangSelect from '$lib/components/top_nav/LangSelect.svelte';
    import HamburgerMenu from '$lib/components/top_nav/HamburgerMenu.svelte';

    let small_screen = false;
    let hamburger_revealed = false;
    let scrolled = false;
    let show_border = false;
    let hamburger_element;

    // Language handling:
    import { lang } from '$lib/scripts/stores.js';
    import PageVocab from '$lib/data/vocab/top_nav.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    export const hide_hamburger = () => {
        //hangle_hamburger_state_change({"detail" : {"state" : false}})
        //hamburger_revealed = false;
        hamburger_element.set_hamburger_state(false)
    }

    const updateScreenWidth = () => {
        if(window.innerWidth < 1300){
            if(small_screen == false){
                small_screen = true;
            }
        }
        else{
            if(small_screen == true){
                small_screen = false;
            }
            hamburger_element.set_hamburger_state(false);
        }
    };

    onMount(() => {
        updateScreenWidth();

        window.addEventListener('resize', () => {
            updateScreenWidth()
        });

        handle_border_show();
    });

    function handle_border_show(){
        if(hamburger_revealed == true){
            show_border = true;
        }
        else{
            if(scrolled == true){
                show_border = true;
            }
            else{
                show_border = false;
            }
        };
    }

    function hangle_hamburger_state_change(e){
        hamburger_revealed = e.detail.state;
        handle_border_show();
    };

    export const handle_scroll = (scroll_state) => {
        scrolled = scroll_state;
        handle_border_show();
    }
</script>

<header class:show_border={show_border}>
    <nav>
        <SiteLogo />

        {#if small_screen == false}
            <ul>
                <li>
                    <TopNavLink 
                        label = {PageVocab.community[langVal]}
                        url = {"/community"}
                    />
                </li>
                <li>
                    <TopNavLink 
                        label = {PageVocab.learn[langVal]}
                        url = {"/learn"}
                    />
                </li>
                <li>
                    <TopNavLink 
                        label = {PageVocab.api[langVal]}
                        url = {"/api"}
                    />
                </li>
                <li>
                    <TopNavLink 
                        label = {PageVocab.about[langVal]}
                        url = {"/about"}
                    />
                </li>
            </ul>
        {/if}
    </nav>

    {#if hamburger_revealed}
        <div id="hamburger_menu">
            <ul>
                <li>
                    <TopNavLink 
                        label = {PageVocab.community[langVal]}
                        url = {"/community"}
                    />
                </li>
                <li>
                    <TopNavLink 
                        label = {PageVocab.learn[langVal]}
                        url = {"/learn"}
                    />
                </li>
                <li>
                    <TopNavLink 
                        label = {PageVocab.api[langVal]}
                        url = {"/api"}
                    />
                </li>
                <li>
                    <TopNavLink 
                        label = {PageVocab.about[langVal]}
                        url = {"/about"}
                    />
                </li>
            </ul>

            <div class="right_ham_cont">
                <LangSelect />

                <div class="extra_thin_connect_button">
                    <BigButton
                        label = {PageVocab.connect[langVal]}
                        url = {base + "/" + langVal + "/connect"}
                    />
                </div>
            </div>
        </div>
    {/if}
</header>

<div class="top_right_content">
    {#if small_screen == false}
    <div class="lang_wrap">
        <LangSelect />
    </div>    
    {/if}
    <div id="hams" class="{small_screen ? "unhide_hams" : "hide_hams"}">
        <HamburgerMenu 
            bind:this={hamburger_element}
            on:update_hamburger={hangle_hamburger_state_change}
        />
    </div>
    
    <div class="connect_button_cont">
        <BigButton
            label = {PageVocab.connect[langVal]}
            url = {base + "/" + langVal + "/connect"}
        />
    </div>

</div>

<div id="nav_padding"></div>

<style>
    .lang_wrap{
        font-size: 1em;
        align-self: baseline;
    }
    .connect_button_cont{
        font-size: 1em;
        align-self: baseline;
    }

    header{
        width: 100%;
        padding-left: 12em;
        padding-right: 12em;
        padding-top: 0.7em;
        padding-bottom: 0.7em;
        background-color: var(--background-color-1);
        position: fixed;
        z-index: 10;
    }

    .show_border{
        border-bottom: solid grey 1px;
    }

    nav{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1em;
    }

    ul{
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .top_right_content{
        position: fixed;
        top:0;
        right:0;
        align-items: center;
        display: flex;
        gap: 0.5em;
        flex-wrap: wrap;
        padding-right: 10em;
        padding-top: 0.75em;
        z-index: 10;
    }

    #nav_padding{
        height: 100px;
    }

    #hamburger_menu{
        width: 100%;
        margin-top: 1em;
        display: flex;
        justify-content: space-between;
    }

    #hamburger_menu ul{
        display: inline;
    }

    #hamburger_menu ul li{
        padding-bottom: 0.5em;
    }

    .right_ham_cont{
        margin-right: 3.7em;
        font-size: 1em;
        
        height: 100%;
        display: inline;
    }

    .extra_thin_connect_button{
        margin-top: 0.5em;
        font-size: 0.8em;
        display: none;
    }

    .hide_hams{
        display: none;
    }
    .unhide_hams{
        display: block;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        header{
            padding-left: 12em;
            padding-right: 12em;
        }
        .top_right_content{
            padding-right: 10em;
        }
        .right_ham_cont{
            margin-right: 3.7em;
        }
        #hamburger_menu ul li{
            font-size: 1em;
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1301px) and (max-width: 1499px)  {
        header{
            padding-left: 6em;
            padding-right: 6em;
        }
        .top_right_content{
            padding-right: 5em;
        }
        .right_ham_cont{
            margin-right: 3.7em;
        }
        #hamburger_menu ul li{
            font-size: 1em;
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1300px) {
        header{
            padding-left: 2em;
            padding-right: 2em;
        }
        .top_right_content{
            padding-right: 2em;
        }
        .right_ham_cont{
            margin-right: 3.7em;
        }
        #hamburger_menu ul li{
            font-size: 0.7em;
        }
    }

    /* VERY SMALL SCREENS */
    @media (min-width: 500px) and (max-width: 699px) {
        header{
            padding-left: 1em;
            padding-right: 1em;
        }
        .top_right_content{
            padding-right: 0.9em;
        }
        .right_ham_cont{
            margin-right: 1.8em;
        }
        #hamburger_menu ul li{
            font-size: 0.7em;
        }
    }

    /* EXTRA THIN SCREENS */
    @media (max-width: 499px) {
        header{
            padding-left: 1em;
            padding-right: 1em;
        }
        .top_right_content{
            padding-right: 0.9em;
        }
        .right_ham_cont{
            margin-right: 1.8em;
        }
        #hamburger_menu ul li{
            font-size: 0.7em;
        }
        .connect_button_cont{
            display: none;
        }
        .extra_thin_connect_button{
            display: block;
        }
    }
</style>