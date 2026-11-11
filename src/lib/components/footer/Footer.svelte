<script>
    // Language handling:
    import { base } from '$app/paths';
    import { lang } from '$lib/scripts/stores.js';
    import PageVocab from '$lib/data/vocab/footer.json';
    import TopVocab from '$lib/data/vocab/top_nav.json';
    import { SECTIONS } from '$lib/scripts/nav.js';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    const currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="inner">
    <nav aria-label="Footer">
        <h2 class="visually_hidden">{PageVocab.menu[langVal]}</h2>
        

        <div id="menus">
            {#each SECTIONS as section}
                <div class="menu_section">
                    <span class="menu_top_link">{TopVocab[section.key][langVal]}</span>
                    <ul>
                        {#each section.items as item}
                            <li><a href={item.external ? item.href : `${base}/${langVal}${item.href}`} class="menu_lower_link">{PageVocab[item.label][langVal]}</a></li>
                        {/each}
                    </ul>
                </div>
            {/each}

            <div class="menu_section">
                <span class="menu_top_link">{PageVocab.connect[langVal]}</span>
                <ul>
                    <li><a href="https://workspace.arvest.app/" class="menu_lower_link">Arvest</a></li>
                    <li><a href="https://peertube.arvest.app/" class="menu_lower_link">PeerTube</a></li>
                </ul>
            </div>
        </div>
        
    </nav>

    <div id="logo_container">
        <a class="logo_link" href="https://creativecommons.org/"><img loading="lazy" src="{base}/imgs/logos/cc-black.png" alt="creative commons logo" /></a>
        <a class="logo_link" href="https://www.horizon-europe.gouv.fr/erc"><img loading="lazy" src="{base}/imgs/logos/erc-black.png" alt="erc logo" /></a>
        <a class="logo_link" href="https://european-union.europa.eu/"><img loading="lazy" src="{base}/imgs/logos/europe-black.png" alt="europe logo" /></a>
        <a class="logo_link" href="https://www.univ-rennes2.fr/"><img loading="lazy" src="{base}/imgs/logos/R2-black.png" alt="rennes 2 logo" /></a>
        <a class="logo_link" href="https://sites-recherche.univ-rennes2.fr/arts-pratiques-poetiques/"><img loading="lazy" src="{base}/imgs/logos/app.png" alt="app rennes 2 logo" /></a>
        <a class="logo_link" href="https://www.ouest-valorisation.fr/"><img loading="lazy" src="{base}/imgs/logos/satt.png" alt="satt logo" /></a>
        <a class="logo_link" href="https://www.huma-num.fr/"><img loading="lazy" src="{base}/imgs/logos/hum-num.png" alt="huma num logo" /></a>
    </div>  

    <div class="foot_line">
        <a class="brand" href="{base}/{langVal}"><img src="{base}/favicon.svg" alt="" width="22" height="22"><span>Arvest</span></a>
        <p id="copyright_notice">© 2023 - {currentYear} Arvest</p>
    </div>
    </div>
</footer>

<style>
    footer{
        width: 100%;
        background: var(--surface-soft);
        border-top: 1.5px solid var(--primary-text);
    }

    .inner{
        max-width: calc(var(--page-max) + 2 * var(--gutter));
        margin: 0 auto;
        padding: 2.5rem var(--gutter) 1.5rem;
    }

    .visually_hidden{
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }

    #menus{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 150px), 1fr));
        gap: 1.75rem 1.5rem;
    }

    .menu_section ul{
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    a{
        text-decoration: none;
    }

    /* The section: a small grey title in capitals, as the tool's column titles. */
    .menu_top_link{
        display: inline-block;
        margin-bottom: 0.3rem;
        font-size: 0.78rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--primary-text);
    }


    .menu_lower_link{
        color: var(--secondary-text);
        font-size: 0.95rem;
    }

    .menu_lower_link:hover{
        color: var(--primary);
    }

    #logo_container{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.25rem 2rem;
        margin-top: 2.5rem;
        padding-top: 1.75rem;
        border-top: 1px solid var(--line-soft);
    }

    .logo_link{
        display: inline-flex;
        opacity: 0.85;
        transition: opacity 0.12s;
    }

    .logo_link:hover{
        opacity: 1;
    }

    #logo_container img{
        height: 44px;
        width: auto;
    }

    .foot_line{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        margin-top: 2rem;
    }

    .brand{
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        color: var(--primary);
        font-family: var(--font-display);
        font-size: 1.35rem;
        line-height: 1;
    }

    #copyright_notice{
        font-size: 0.85rem;
        color: var(--secondary-text);
    }

    @media (max-width: 600px){
        #menus{
            grid-template-columns: 1fr 1fr;
        }
        #logo_container img{
            height: 36px;
        }
    }
</style>
