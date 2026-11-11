// The infrastructure page: how Arvest is built, part by part. The numbers and "part" match
// the diagram (components/infrastructure/InfraDiagram.svelte).

export const INTRO = {
    en: "Arvest is a web app backed by an open API, run on public research infrastructure. Documents come in from libraries, from the web and from your own computer; everything is described in IIIF, the open standard for cultural heritage, so it can go out again to any IIIF tool.",
    fr: "Arvest est une application web adossée à une API ouverte, hébergée sur une infrastructure publique de recherche. Les documents viennent de bibliothèques, du web et de votre ordinateur ; tout est décrit en IIIF, le standard ouvert du patrimoine culturel, et peut donc repartir vers n'importe quel outil IIIF."
};

export const DIAGRAM_ALT = {
    en: "Diagram of Arvest: IIIF documents from libraries, images, videos and sounds from the web, and files from your computer flow into the Arvest app in the browser; the app talks to the API, which keeps a database, files and manifests and a PeerTube instance at Huma-Num; scripts use the same API, and shared links reach other people.",
    fr: "Schéma d'Arvest : les documents IIIF des bibliothèques, les images, vidéos et sons du web et les fichiers de votre ordinateur arrivent dans l'application Arvest, dans le navigateur ; l'application dialogue avec l'API, qui conserve une base de données, les fichiers et manifestes et une instance PeerTube chez Huma-Num ; les scripts utilisent la même API, et les liens partagés touchent d'autres personnes."
};

export const PARTS = [
    {
        part: "sources",
        title: { en: "Documents from everywhere", fr: "Des documents de partout" },
        text: {
            en: "Bring in IIIF manifests from libraries, archives and museums, add any image, video or sound by its web address, or upload your own files from your computer. A linked document stays where it is: Arvest reads it, it does not copy it.",
            fr: "Importez des manifestes IIIF de bibliothèques, d'archives et de musées, ajoutez une image, une vidéo ou un son par son adresse web, ou envoyez vos propres fichiers depuis votre ordinateur. Un document lié reste où il est : Arvest le lit, il ne le copie pas."
        },
        links: [
            { url: "/learn/iiif", internal: true, label: { en: "What is IIIF?", fr: "Qu'est-ce que IIIF ?" } }
        ]
    },
    {
        part: "app",
        title: { en: "The app, in your browser", fr: "L'application, dans votre navigateur" },
        text: {
            en: "Nothing to install: an account with an email address opens the whole workspace, where documents are placed, compared, annotated and linked. The first version of Arvest is built on our fork of the IIIF viewer Mirador, which plays audio and video, with plugins for annotating images and audiovisual content. Arvest v2, in beta, is a new workspace built on the same API.",
            fr: "Rien à installer : un compte avec une adresse e-mail ouvre tout l'espace de travail, où l'on place, compare, annote et relie les documents. La première version d'Arvest repose sur notre fork du visualiseur IIIF Mirador, qui lit l'audio et la vidéo, avec des plugins pour annoter images et contenus audiovisuels. Arvest v2, en bêta, est un nouvel espace de travail construit sur la même API."
        },
        links: [
            { url: "https://github.com/ARVEST-APP/mirador-video", label: { en: "AV Mirador fork", fr: "Fork AV de Mirador" } },
            { url: "https://github.com/ARVEST-APP/mirador-annotation-editor", label: { en: "Image annotation plugin", fr: "Plugin d'annotation d'images" } },
            { url: "https://github.com/ARVEST-APP/mirador-annotation-editor-video", label: { en: "AV annotation plugin", fr: "Plugin d'annotation AV" } }
        ]
    },
    {
        part: "api",
        title: { en: "An open API", fr: "Une API ouverte" },
        text: {
            en: "The app and your scripts speak to the same REST API, written in NestJS: accounts, groups, projects, media, manifests, metadata and annotations. It is documented with Swagger, and a Python package makes it easy to use in scripts and machine learning notebooks.",
            fr: "L'application et vos scripts s'adressent à la même API REST, écrite en NestJS : comptes, groupes, projets, médias, manifestes, métadonnées et annotations. Elle est documentée avec Swagger, et un package Python la rend simple à utiliser dans des scripts et des notebooks de machine learning."
        },
        links: [
            { url: "/api/documentation", internal: true, label: { en: "API documentation", fr: "Documentation de l'API" } },
            { url: "https://github.com/ARVEST-APP/mirador-multi-user", label: { en: "Server source code", fr: "Code source du serveur" } }
        ]
    },
    {
        part: "store",
        title: { en: "Kept at Huma-Num", fr: "Conservé chez Huma-Num" },
        text: {
            en: "Arvest runs on a virtual machine at Huma-Num, the French state-funded infrastructure for the digital humanities. It keeps the database of accounts and projects, the files you upload and the IIIF manifests that describe them, and a PeerTube instance for large videos.",
            fr: "Arvest tourne sur une machine virtuelle chez Huma-Num, l'infrastructure publique française pour les humanités numériques. Elle conserve la base de données des comptes et des projets, les fichiers envoyés et les manifestes IIIF qui les décrivent, et une instance PeerTube pour les vidéos volumineuses."
        },
        links: [
            { url: "https://www.huma-num.fr/", label: { en: "Huma-Num", fr: "Huma-Num" } },
            { url: "https://peertube.arvest.app/", label: { en: "Arvest's PeerTube", fr: "PeerTube d'Arvest" } }
        ]
    },
    {
        part: "share",
        title: { en: "Shared with the world", fr: "Partagé avec le monde" },
        text: {
            en: "Documents, manifests and whole projects can be shared by link, with permissions that keep you in control of who sees and who edits. What you share is IIIF, so it also opens in other IIIF viewers and tools.",
            fr: "Documents, manifestes et projets entiers se partagent par lien, avec des permissions qui vous laissent décider qui voit et qui modifie. Ce que vous partagez est en IIIF : cela s'ouvre aussi dans d'autres visualiseurs et outils IIIF."
        },
        links: []
    }
];

export const UI = {
    description: {
        en: "How Arvest is built: documents from IIIF libraries, the web and your computer, a web app, an open REST API, and storage at Huma-Num.",
        fr: "Comment Arvest est construit : des documents de bibliothèques IIIF, du web et de votre ordinateur, une application web, une API REST ouverte, et un hébergement chez Huma-Num."
    },
    source: { en: "All of Arvest's code is open source", fr: "Tout le code d'Arvest est open source" }
};
