// The tools around Arvest (Going further): each one's landing page and its place in the
// ecosystem. Arvest is the main environment, online and for everyone; these are more
// specialised, and the two desktop tools run on your own computer. Features name a demo
// component (components/further/demos). `video`: a YouTube id once the tutorial exists.

export const TOOLS = {
    extension: {
        key: "extension",
        path: "/browser-extension",
        name: { en: "Arvest for Chrome", fr: "Arvest pour Chrome" },
        tagline: {
            en: "Collect the web into Arvest",
            fr: "Collectez le web dans Arvest"
        },
        intro: {
            en: "A browser extension that adds what you find on the web to your Arvest account: the images, videos and PDFs of a page, each as a document, or a whole page or site captured as a IIIF manifest, with everything on it annotated and linked to its source.",
            fr: "Une extension de navigateur qui ajoute à votre compte Arvest ce que vous trouvez sur le web : les images, vidéos et PDF d'une page, chacun comme un document, ou une page ou un site entier capturé en manifeste IIIF, avec tout ce qu'il contient annoté et relié à sa source."
        },
        badges: [
            { en: "In your browser", fr: "Dans votre navigateur" },
            { en: "Chrome", fr: "Chrome" },
            { en: "Needs an Arvest account", fr: "Compte Arvest requis" }
        ],
        github: "https://github.com/ARVEST-APP/arvest-chrome",
        features: [
            {
                demo: "ExtCollect",
                title: { en: "Collect the media of any page", fr: "Collectez les médias de n'importe quelle page" },
                text: {
                    en: "Open the extension on a page: it lists the images, videos, PDFs and YouTube or PeerTube videos it finds. One click adds each one to Arvest as a described document, ready to place in a project.",
                    fr: "Ouvrez l'extension sur une page : elle liste les images, vidéos, PDF et vidéos YouTube ou PeerTube qu'elle trouve. Un clic ajoute chacun à Arvest comme un document décrit, prêt à placer dans un projet."
                }
            },
            {
                demo: "ExtSnapshot",
                title: { en: "Snapshot a page", fr: "Capturez une page" },
                text: {
                    en: "Capture a page as it is today. It becomes a IIIF manifest: the full-height page on a canvas, with an annotation over each image, video and block of text that links back to the original, plus the address and the date it was taken.",
                    fr: "Capturez une page telle qu'elle est aujourd'hui. Elle devient un manifeste IIIF : la page entière sur un canevas, avec une annotation sur chaque image, vidéo et bloc de texte qui renvoie à l'original, ainsi que l'adresse et la date de la capture."
                }
            },
            {
                demo: "ExtSite",
                title: { en: "Archive a whole site", fr: "Archivez un site entier" },
                text: {
                    en: "Follow a site's links and capture page after page, as deep and as many as you choose, into one manifest with a canvas per page. It runs in the background while you keep browsing.",
                    fr: "Suivez les liens d'un site et capturez page après page, aussi loin et autant que vous le décidez, dans un seul manifeste avec un canevas par page. La capture tourne en arrière-plan pendant que vous continuez à naviguer."
                }
            }
        ],
        with_arvest: {
            en: "Everything the extension makes goes straight to your Arvest account: sign in once in its options and what you collect is in your documents, ready to use in your projects.",
            fr: "Tout ce que fait l'extension va directement sur votre compte Arvest : connectez-vous une fois dans ses options, et ce que vous collectez est dans vos documents, prêt pour vos projets."
        },
        video: null
    },

    mmm: {
        key: "mmm",
        path: "/mmm",
        name: { en: "mmm", fr: "mmm" },
        tagline: {
            en: "Read a whole archive with language models",
            fr: "Lire une archive entière avec des modèles de langage"
        },
        intro: {
            en: "mmm (mini multi modal) turns a folder of mixed files into one structured description per file. Texts, office documents, PDFs, images, sound and video are read by a language model, local through Ollama or Claude, with your own prompts and your own answer structure. Its studio connects the corpus to Arvest without uploading it.",
            fr: "mmm (mini multi modal) transforme un dossier de fichiers variés en une description structurée par fichier. Textes, documents bureautiques, PDF, images, sons et vidéos sont lus par un modèle de langage, local avec Ollama ou Claude, avec vos propres consignes et votre propre structure de réponse. Son studio relie le corpus à Arvest sans l'envoyer en ligne."
        },
        badges: [
            { en: "On your computer", fr: "Sur votre ordinateur" },
            { en: "Python", fr: "Python" },
            { en: "Local or Claude models", fr: "Modèles locaux ou Claude" }
        ],
        github: "https://github.com/stage-to-data/mmm",
        features: [
            {
                demo: "MmmRead",
                title: { en: "Every file, read and described", fr: "Chaque fichier, lu et décrit" },
                text: {
                    en: "mmm works out what each file is, prepares it for a model (extracted text, PDF pages, video frames with a transcription of the speech), asks your questions and checks every answer against your structure. Long runs can be stopped and picked up again.",
                    fr: "mmm identifie chaque fichier, le prépare pour un modèle (texte extrait, pages de PDF, images d'une vidéo avec la transcription de la parole), pose vos questions et vérifie chaque réponse avec votre structure. Les longs traitements s'interrompent et reprennent."
                }
            },
            {
                demo: "MmmConnector",
                title: { en: "Your corpus in Arvest, without uploading it", fr: "Votre corpus dans Arvest, sans l'envoyer" },
                text: {
                    en: "While the studio runs, it serves the corpus to Arvest as IIIF documents from your own computer. They appear in your documents, viewers and workspaces like any other, with mmm's answers as their data; the files never leave your machine.",
                    fr: "Pendant que le studio tourne, il sert le corpus à Arvest en documents IIIF depuis votre ordinateur. Ils apparaissent dans vos documents, visualiseurs et espaces de travail comme les autres, avec les réponses de mmm comme données ; les fichiers ne quittent jamais votre machine."
                }
            },
            {
                demo: "MmmGraph",
                title: { en: "Answers become data", fr: "Les réponses deviennent des données" },
                text: {
                    en: "The answers become dimensions to sort, filter and plot: the corpus as points, in clusters, each opening its file. Send them to Arvest as metadata, or bring documents from your Arvest account into the corpus.",
                    fr: "Les réponses deviennent des dimensions à trier, filtrer et représenter : le corpus en points, en groupes, chacun ouvrant son fichier. Envoyez-les à Arvest comme métadonnées, ou faites entrer dans le corpus des documents de votre compte Arvest."
                }
            }
        ],
        with_arvest: {
            en: "mmm and Arvest share a corpus both ways: local files appear in Arvest through the connector, documents from your Arvest account can join the corpus, and the answers travel as metadata.",
            fr: "mmm et Arvest partagent un corpus dans les deux sens : les fichiers locaux apparaissent dans Arvest grâce au connecteur, les documents de votre compte Arvest peuvent rejoindre le corpus, et les réponses voyagent comme métadonnées."
        },
        video: null
    },

    lapa: {
        key: "lapa",
        path: "/lapa-editor",
        name: { en: "LA-PA editor", fr: "Éditeur LA-PA" },
        tagline: {
            en: "Sourced, structured, agile historiography",
            fr: "Une historiographie sourcée, structurée et agile"
        },
        intro: {
            en: "An editor for writing history as a graph of sourced assertions: the people, events, places, objects and works of your subject, and every property of each tied to the document that attests it. Structured in Linked Art, so it can be shared and reused, and quick enough to keep up with your research as it goes.",
            fr: "Un éditeur pour écrire l'histoire comme un graphe d'assertions sourcées : les personnes, événements, lieux, objets et œuvres de votre sujet, et chacune de leurs propriétés reliée au document qui l'atteste. Structuré en Linked Art, pour être partagé et réutilisé, et assez rapide pour suivre votre recherche au fil de l'eau."
        },
        badges: [
            { en: "On your computer", fr: "Sur votre ordinateur" },
            { en: "Python", fr: "Python" },
            { en: "Linked Art", fr: "Linked Art" }
        ],
        github: "https://github.com/stage-to-data",
        features: [
            {
                demo: "LapaSource",
                title: { en: "Sourced: no fact without its trace", fr: "Sourcée : pas de fait sans sa trace" },
                text: {
                    en: "Every entity and every property points to the document that says so: a photograph, a letter, a web page, a IIIF manifest from a library or from your Arvest account, down to a page or a region of it.",
                    fr: "Chaque entité et chaque propriété renvoie au document qui l'affirme : une photographie, une lettre, une page web, un manifeste IIIF d'une bibliothèque ou de votre compte Arvest, jusqu'à une page ou une région."
                }
            },
            {
                demo: "LapaGraph",
                title: { en: "Structured, and agile", fr: "Structurée, et agile" },
                text: {
                    en: "Assert several properties at once, create an entity and its relations together, import people and places from Wikidata or the Getty vocabularies, and watch the graph grow as you write, coloured by type.",
                    fr: "Affirmez plusieurs propriétés à la fois, créez une entité et ses relations ensemble, importez personnes et lieux depuis Wikidata ou les vocabulaires du Getty, et regardez le graphe grandir à mesure que vous écrivez, coloré par type."
                }
            },
            {
                demo: "LapaExport",
                title: { en: "In time, and out", fr: "Dans le temps, et au-dehors" },
                text: {
                    en: "Follow events on a timeline, then export the whole history: Linked Art JSON-LD, a network for Gephi, and a table of every assertion with its source.",
                    fr: "Suivez les événements sur une frise, puis exportez toute l'histoire : du JSON-LD Linked Art, un réseau pour Gephi, et un tableau de chaque assertion avec sa source."
                }
            }
        ],
        with_arvest: {
            en: "Put your Arvest account on a project and every manifest on it can be cited as a source: browse them with their thumbnails and metadata, and pick the ones you need.",
            fr: "Associez votre compte Arvest à un projet et chacun de ses manifestes peut être cité comme source : parcourez-les avec leurs vignettes et métadonnées, et choisissez ceux qu'il vous faut."
        },
        video: null
    }
};

export const UI = {
    download: { en: "Download", fr: "Télécharger" },
    coming_soon: { en: "coming soon", fr: "bientôt" },
    github: { en: "Code on GitHub", fr: "Code sur GitHub" },
    with_arvest: { en: "With Arvest", fr: "Avec Arvest" },
    see_ecosystem: { en: "How the tools fit together", fr: "Comment les outils s'articulent" },
    tutorial: { en: "Tutorial", fr: "Tutoriel" },
    video_soon: { en: "The tutorial video is on its way.", fr: "La vidéo tutoriel arrive bientôt." },
    releases: {
        en: "Ready-to-install releases for macOS, Windows and Linux are on their way. Until then, the code and its instructions are on GitHub.",
        fr: "Des versions prêtes à installer pour macOS, Windows et Linux arrivent. En attendant, le code et ses instructions sont sur GitHub."
    },
    releases_ext: {
        en: "The extension is coming to the Chrome Web Store. Until then, it can be installed from its code on GitHub.",
        fr: "L'extension arrive sur le Chrome Web Store. En attendant, elle s'installe depuis son code sur GitHub."
    }
};
