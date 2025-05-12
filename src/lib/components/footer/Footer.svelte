<script>
    // Language handling:
    import { base } from '$app/paths';
    import { lang } from '$lib/scripts/stores.js';
    import PageVocab from '$lib/data/vocab/footer.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    const currentYear = new Date().getFullYear();
</script>

<footer>
    <nav>
        <h2>{PageVocab.menu[langVal]}</h2>
        

        <div id="menus">
            <ul class="menu_section">
                <li><a href="{base}/{langVal}/community" class="menu_top_link">{PageVocab.community[langVal]}</a></li>
                <li><a href="{base}/{langVal}/community/projects" class="menu_lower_link">{PageVocab.projects[langVal]}</a></li>
                <li><a href="{base}/{langVal}/community/forum" class="menu_lower_link">{PageVocab.forum[langVal]}</a></li>
                <li><a href="{base}/{langVal}/community/news" class="menu_lower_link">{PageVocab.news[langVal]}</a></li>
                <li><a href="https://stage-to-data.huma-num.fr/" class="menu_lower_link">{PageVocab.stage[langVal]}</a></li>
            </ul>
    
            <ul class="menu_section">
                <li><a href="{base}/{langVal}/learn" class="menu_top_link">{PageVocab.learn[langVal]}</a></li>
                <li><a href="{base}/{langVal}/learn/tutorials" class="menu_lower_link">{PageVocab.tutorials[langVal]}</a></li>
                <li><a href="{base}/{langVal}/learn/iiif" class="menu_lower_link">{PageVocab.iiif[langVal]}</a></li>
            </ul>
    
            <ul class="menu_section">
                <li><a href="{base}/{langVal}/api" class="menu_top_link">{PageVocab.api[langVal]}</a></li>
                <li><a href="{base}/{langVal}/api/ml" class="menu_lower_link">{PageVocab.ml[langVal]}</a></li>
                <li><a href="{base}/{langVal}/api/documentation" class="menu_lower_link">{PageVocab.reference[langVal]}</a></li>
                <li><a href="https://github.com/ARVEST-APP" class="menu_lower_link">{PageVocab.git[langVal]}</a></li>
            </ul>
    
            <ul class="menu_section">
                <li><a href="{base}/{langVal}/about" class="menu_top_link">{PageVocab.about[langVal]}</a></li>
                <li><a href="{base}/{langVal}/about/infrastructure" class="menu_lower_link">{PageVocab.about_arvest[langVal]}</a></li>
                <li><a href="{base}/{langVal}/about/team" class="menu_lower_link">{PageVocab.team[langVal]}</a></li>
                <li><a href="{base}/{langVal}/about/accessibility" class="menu_lower_link">{PageVocab.accessibility[langVal]}</a></li>
                <li><a href="{base}/{langVal}/about/credits" class="menu_lower_link">{PageVocab.credits[langVal]}</a></li>
                <li><a href="{base}/{langVal}/about/contact" class="menu_lower_link">{PageVocab.contact[langVal]}</a></li>
            </ul>
    
            <ul class="menu_section">
                <li><a href="https://workspace.arvest.app/" class="menu_top_link">{PageVocab.connect[langVal]}</a></li>
                <li><a href="https://peertube.arvest.app/" class="menu_lower_link">Peertube</a></li>
            </ul>
        </div>
        
    </nav>

    <div id="logo_container">
        <a class="logo_link" href="https://creativecommons.org/"><img src="{base}/imgs/logos/cc-black.png" alt="creative commons logo" /></a>
        <a class="logo_link" href="https://www.horizon-europe.gouv.fr/erc"><img src="{base}/imgs/logos/erc-black.png" alt="erc logo" /></a>
        <a class="logo_link" href="https://european-union.europa.eu/"><img src="{base}/imgs/logos/europe-black.png" alt="europe logo" /></a>
        <a class="logo_link" href="https://www.univ-rennes2.fr/"><img src="{base}/imgs/logos/R2-black.png" alt="rennes 2 logo" /></a>
        <a class="logo_link" href="https://sites-recherche.univ-rennes2.fr/arts-pratiques-poetiques/"><img src="{base}/imgs/logos/app.png" alt="app rennes 2 logo" /></a>
        <a class="logo_link" href="https://www.ouest-valorisation.fr/"><img src="{base}/imgs/logos/satt.png" alt="satt logo" /></a>
        <a class="logo_link" href="https://www.huma-num.fr/"><img src="{base}/imgs/logos/hum-num.png" alt="huma num logo" /></a>
    </div>  

    <p id="copyright_notice">© 2023 - {currentYear} Arvest</p>
</footer>

<style>
    footer{
        width: 100%;
        background-color: transparent;
        padding-top: 2em;
        padding-bottom: 2em;
        padding-left: 7em;
        padding-right: 7em;
    }

    #menus{
        display: grid;
        gap: 1em;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        font-size: 1em;
        width: 100%;
    }

    a{
        text-decoration: none;
        font-family: 'Input-Mono-Narrow-Thin', monospace;
    }

    .menu_section{
        width: 100%;
        font-size: 0.8em;
    }

    h2{
        padding-bottom: 1em;
        color: var(--primary-text);
        font-size: 1em;
    }

    .menu_top_link{
        color: var(--primary-text);
    }

    .menu_top_link:hover{
        text-decoration: underline;
    }

    .menu_lower_link{
        color: var(--secondary-text);
    }

    .menu_lower_link:hover{
        cursor: pointer;
        color: var(--primary-text);
    }

    li{
        padding-bottom: 0.3em;
    }

    #copyright_notice{
        width: 100%;
        text-align: center;
        padding-top: 5em;
        font-size: 0.5em;
    }

    #logo_container{
        padding-top: 3em;
        display: flex;
        width: 100%;
        gap: 2em;
        flex-wrap: wrap;
    }
    .logo_link:hover{
        cursor: pointer;
    }
    img{
        height: 50px;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        footer{
            padding-left: 14em;
            padding-right: 14em;
        }
        #menus{
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
        .menu_section{
            font-size: 0.8em;
        }
        h2{
            font-size: 1em;
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        footer{
            padding-left: 7em;
            padding-right: 7em;
        }
        #menus{
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
        .menu_section{
            font-size: 0.8em;
        }
        h2{
            font-size: 1em;
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        footer{
            padding-left: 3em;
            padding-right: 3em;
        }
        #menus{
            grid-template-columns: 1fr 1fr 1fr;
        }
        .menu_section{
            font-size: 0.7em;
        }
        h2{
            font-size: 0.8em;
        }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        footer{
            padding-left: 1em;
            padding-right: 1em;
        }
        #menus{
            grid-template-columns: 1fr 1fr;
        }
        .menu_section{
            font-size: 0.6em;
        }
        h2{
            font-size: 0.7em;
        }
    }
</style>