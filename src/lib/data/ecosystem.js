// The Arvest ecosystem page: Arvest at the centre, online and for everyone; around it,
// tools for more specialised work, two of them running on your own computer.

export const INTRO = {
    en: "Arvest is the main environment: online, nothing to install, and made to be easy for anyone, students, researchers, archivists, artists. Around it are tools for more specialised work. The browser extension brings the web in. mmm and the LA-PA editor run on your own computer, for corpora that stay with you and for expert work: reading whole archives with language models, writing sourced, structured history. They all speak IIIF and talk to Arvest.",
    fr: "Arvest est l'environnement principal : en ligne, rien à installer, et pensé pour être simple pour tous, étudiants, chercheurs, archivistes, artistes. Autour de lui, des outils pour des travaux plus spécialisés. L'extension de navigateur y fait entrer le web. mmm et l'éditeur LA-PA tournent sur votre ordinateur, pour des corpus qui restent chez vous et un travail expert : lire des archives entières avec des modèles de langage, écrire une histoire sourcée et structurée. Tous parlent IIIF et dialoguent avec Arvest."
};

export const DIAGRAM_ALT = {
    en: "Diagram of the Arvest ecosystem. Online: the web, the browser extension that brings it into Arvest, Arvest at the centre, and the people it is shared with. On your computer: a corpus of files read by mmm, which exchanges documents and metadata with Arvest both ways, and the LA-PA editor, which takes Arvest's manifests as sources and exports Linked Art.",
    fr: "Schéma de l'écosystème Arvest. En ligne : le web, l'extension de navigateur qui le fait entrer dans Arvest, Arvest au centre, et les personnes avec qui il est partagé. Sur votre ordinateur : un corpus de fichiers lu par mmm, qui échange documents et métadonnées avec Arvest dans les deux sens, et l'éditeur LA-PA, qui prend les manifestes d'Arvest comme sources et exporte du Linked Art."
};

export const ROWS = [
    {
        part: "arvest",
        name: { en: "Arvest", fr: "Arvest" },
        where: { en: "Online, in your browser", fr: "En ligne, dans votre navigateur" },
        who: { en: "Everyone", fr: "Tout le monde" },
        status: { en: "Available", fr: "Disponible" },
        available: true,
        href: "",
        text: {
            en: "Where documents are gathered, compared, annotated, linked and shared: images, video, sound, texts and PDFs, all as IIIF. An account is all you need, and everything the other tools make ends up here.",
            fr: "Là où les documents sont rassemblés, comparés, annotés, reliés et partagés : images, vidéos, sons, textes et PDF, tous en IIIF. Un compte suffit, et tout ce que font les autres outils arrive ici."
        },
        flows: {
            en: ["Takes in what the extension collects", "Shows mmm's local corpus, with its answers as data", "Gives the LA-PA editor its manifests as sources"],
            fr: ["Reçoit ce que collecte l'extension", "Montre le corpus local de mmm, avec ses réponses comme données", "Donne à l'éditeur LA-PA ses manifestes comme sources"]
        }
    },
    {
        part: "extension",
        name: { en: "Browser extension", fr: "Extension de navigateur" },
        where: { en: "Your browser (Chrome)", fr: "Votre navigateur (Chrome)" },
        who: { en: "Anyone who collects from the web", fr: "Quiconque collecte sur le web" },
        status: { en: "Release coming soon", fr: "Version bientôt prête" },
        href: "/browser-extension",
        text: {
            en: "Collects the media of a page into Arvest, or captures a page or a whole site as an annotated IIIF manifest.",
            fr: "Collecte les médias d'une page dans Arvest, ou capture une page ou un site entier en manifeste IIIF annoté."
        },
        flows: {
            en: ["The web → Arvest documents"],
            fr: ["Le web → documents Arvest"]
        }
    },
    {
        part: "mmm",
        name: { en: "mmm", fr: "mmm" },
        where: { en: "Your computer", fr: "Votre ordinateur" },
        who: { en: "Researchers with large archives", fr: "Chercheurs avec de grandes archives" },
        status: { en: "Release coming soon", fr: "Version bientôt prête" },
        href: "/mmm",
        text: {
            en: "Reads every file of a corpus with a language model and describes it with your own questions, then serves the corpus to Arvest without uploading it.",
            fr: "Lit chaque fichier d'un corpus avec un modèle de langage et le décrit selon vos propres questions, puis sert le corpus à Arvest sans l'envoyer en ligne."
        },
        flows: {
            en: ["Local files → Arvest, through the connector", "Answers → Arvest metadata", "Arvest documents → the corpus"],
            fr: ["Fichiers locaux → Arvest, par le connecteur", "Réponses → métadonnées Arvest", "Documents Arvest → le corpus"]
        }
    },
    {
        part: "lapa",
        name: { en: "LA-PA editor", fr: "Éditeur LA-PA" },
        where: { en: "Your computer", fr: "Votre ordinateur" },
        who: { en: "Historians and archivists", fr: "Historiens et archivistes" },
        status: { en: "Release coming soon", fr: "Version bientôt prête" },
        href: "/lapa-editor",
        text: {
            en: "Sourced, structured, agile historiography: a Linked Art graph in which every assertion is tied to its source, exported as JSON-LD.",
            fr: "Une historiographie sourcée, structurée et agile : un graphe Linked Art où chaque assertion est reliée à sa source, exporté en JSON-LD."
        },
        flows: {
            en: ["Arvest manifests → sources", "The graph → Linked Art, Gephi, CSV"],
            fr: ["Manifestes Arvest → sources", "Le graphe → Linked Art, Gephi, CSV"]
        }
    }
];

export const UI = {
    description: {
        en: "Arvest and the tools around it: the browser extension, mmm and the LA-PA editor, and how they work together through IIIF.",
        fr: "Arvest et les outils qui l'entourent : l'extension de navigateur, mmm et l'éditeur LA-PA, et comment ils fonctionnent ensemble grâce à IIIF."
    },
    table_caption: { en: "The tools at a glance", fr: "Les outils en un coup d'œil" },
    tool: { en: "Tool", fr: "Outil" },
    where: { en: "Runs", fr: "Où" },
    who: { en: "For", fr: "Pour" },
    status: { en: "Status", fr: "État" },
    flows: { en: "With the others", fr: "Avec les autres" },
    discover: { en: "Discover", fr: "Découvrir" },
    open_arvest: { en: "Open Arvest", fr: "Ouvrir Arvest" },
    online: { en: "Online, for everyone", fr: "En ligne, pour tous" },
    local: { en: "On your computer, for experts", fr: "Sur votre ordinateur, pour les experts" }
};
