# How the site is put together

What to know before changing the site's pages, menus, look or animations.

## Pages and menus

Every page sits under a language: `/en/…`, `/fr/…`. The top bar's menus, the menu on phones and the footer are all made from one list, [nav.js](/src/lib/scripts/nav.js): sections (Community, Learn, API & ML, Going further, About), each with its pages. To add a page:

1. make its route in `src/routes/[lang]/`;
2. add it to its section in `nav.js` (`label` is a key of [footer.json](/src/lib/data/vocab/footer.json), `href` the address after `/<lang>`);
3. add its address to `PAGES` in the [sitemap](/src/routes/sitemap.xml/+server.js);
4. give it a `<Seo title=… description=… />` ([Seo.svelte](/src/lib/components/Seo.svelte)): title, description, canonical address, other languages, social cards.

A section's own address (`/en/about`) has no page of its own: it forwards to the section's first page ([SectionRedirect](/src/lib/components/SectionRedirect.svelte)). The pages of the tools around Arvest (`/ecosystem`, `/browser-extension`, `/mmm`, `/lapa-editor`) belong to *Going further* in the menus but sit at the top level of the address.

The top bar shows every section from 1061 px wide (the brand is the mark alone, the Steinbeck A in the purple square, at every width) and a menu button below that: with five sections, French needs about 1130 px. Check French when adding a section.

## Look

The colours, fonts, card style and shared classes (`.card`, `.framed`, `.tag`, `.segmented`, `.card_grid`, `.prose`, `.page_head`, `.lede`, `.eyebrow`) are in [theme.css](/src/routes/[lang]/theme.css), following the Arvest app's design guide. Sizes are in `rem`. The page column is `--page-max` wide plus the gutters; the top bar, the pages and the footer all use the same width so their edges line up.

Lists of articles (news, projects, tutorials) use [ArticleList](/src/lib/components/general_ui/ArticleList.svelte): search, tag filters and order, kept in the address (`?q=…&tag=…`). An article's page is [ArticleLayout](/src/lib/components/articles/ArticleLayout.svelte).

## Scrolling

The window scrolls, not a box inside the page: when the page scrolled inside a fixed `#global_container`, Safari on iPhone painted the animated demos below the footer, leaving their places empty. Keep it that way (no `overflow: auto` or fixed height on the layout's boxes or on `body`; `overflow-x: clip`, not `hidden`, which would make a scroller). The top bar and the backdrop are `position: fixed`; [the layout](/src/routes/[lang]/+layout.svelte) listens to the window's scroll. The layout takes a new page to its top at once, and glides to a place on a page when a link has a `#hash`. Give a target `scroll-margin-top: calc(var(--nav-h) + 1rem)` so the top bar does not cover it.

## Animated demos

The home page's features, the infrastructure and ecosystem diagrams and the tools' pages use small animated SVGs (`src/lib/components/front_page/demos/`, `src/lib/components/further/`). The rules they follow:

- each is drawn in a 640 × 400 box inside [DemoFrame](/src/lib/components/front_page/demos/DemoFrame.svelte), which plays it only while it is on screen and stops it for visitors who ask for less motion;
- with the animations off, what is drawn must be the finished picture: write the elements in their final place and animate *from* elsewhere, with `animation-fill-mode: backwards` for delays;
- no words inside: text is grey lines, so a demo needs no translation;
- an SVG part in its own component needs `<svelte:options namespace="svg" />`, and transforms of SVG elements need `transform-box: fill-box`.

The home page's table drawing and its layers ([MainPresWidget](/src/lib/components/front_page/main_pres_widget/MainPresWidget.svelte)) share one grid cell and are all 1800 × 1420: a new layer must have the same size, or it will not lie over the table. The caption card holds every slide's words in one cell, so it keeps one height and never moves the table.

## Paths and deployment

The site is served at the root of `arvest.app` (the `gh-pages` branch has a `CNAME`), so [svelte.config.js](/svelte.config.js) uses absolute paths (`base: ''`, `relative: false`). Do not switch back to relative paths: the top bar and the footer are not redrawn between pages, and with relative paths their images broke after moving to a page at another depth. Always write addresses with `{base}/…`.

## Checking before deploying

- `npm run build` must finish without errors (warnings from `reset.css` are old and harmless);
- look at the pages at phone width (about 390 px), tablet (768 px) and desktop, in English and French;
- `build/sitemap.xml` should list the new pages.
