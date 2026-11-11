// The site's pages, by section: the top bar's menus, the footer and the sections' old
// addresses (/en/community… forward to their first page) all read this one list.
// `label` is a key of vocab/footer.json; `href` is under /<lang> unless `external`.

export const SECTIONS = [
    {
        key: "community",
        items: [
            { label: "projects", href: "/community/projects" },
            { label: "news", href: "/community/news" },
            { label: "forum", href: "/community/forum" },
            { label: "stage", href: "https://stage-to-data.huma-num.fr/", external: true }
        ]
    },
    {
        key: "learn",
        items: [
            { label: "tutorials", href: "/learn/tutorials" },
            { label: "iiif", href: "/learn/iiif" }
        ]
    },
    {
        key: "api",
        items: [
            { label: "ml", href: "/api/ml" },
            { label: "reference", href: "/api/documentation" },
            { label: "git", href: "https://github.com/ARVEST-APP", external: true }
        ]
    },
    {
        key: "further",
        items: [
            { label: "ecosystem", href: "/ecosystem" },
            { label: "extension", href: "/browser-extension" },
            { label: "mmm", href: "/mmm" },
            { label: "lapa", href: "/lapa-editor" }
        ]
    },
    {
        key: "about",
        items: [
            { label: "about_arvest", href: "/about/infrastructure" },
            { label: "team", href: "/about/team" },
            { label: "cite", href: "/about/cite" },
            { label: "accessibility", href: "/about/accessibility" },
            { label: "credits", href: "/about/credits" },
            { label: "contact", href: "/about/contact" }
        ]
    }
];

// Where a section's own address goes now: its first page.
export const SECTION_HOME = Object.fromEntries(SECTIONS.map(s => [s.key, s.items.find(i => !i.external).href]));
