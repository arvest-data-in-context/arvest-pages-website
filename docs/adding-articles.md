# Adding articles

You can easily add new content to the article-type secitons of the website. Navigate to the [`/src/content/`](/src/content/) folder and select the type of article you wish to add.

## Article folder

Add a new folder for your article. The name of the folder will be used as the url slug (meaning that the url of your article ill be arvest.app/.../FOLDER-NAME). Please use `-` instead of `_` (and not spaces can be used for urls).

## Article svx files.

All articles are written as `.svx` files. The name of the file will be the language code for the article. You can add different files for different languages. Not that you MUST provide a version in english as this will be used as the default if the user tries to access your article in a language that is not supported by the website.

### Metadata

You can copy and paste an existing article to get a template. `.svx` is a kind of format that is written in markdown and which can be parsed into svelte. This means that you can use all of the syntaxe you typically use in markdown (here is a useful [cheat sheet](https://www.markdownguide.org/cheat-sheet/)).

Note that your file must start with some required metadata in YAML format:

```md
---
title: "Arvest.app is online"
date: "2024-11-21"
description: "The Arvest website is up and running."
tags: ["release", "news"]
author: "Jacob Hart"
image: "news/website-launch.jpg"
---
```

Note that the image file is stored in the website's [static](/static/) folder. This is where you will need to drop any media you wish to add to your article.

What each field is used for:

- `title`: the article's title, shown in the box over the picture at the top of the page, on its card in the list, and as the page title for search engines. **Do not repeat it as a `# Title` heading at the start of the article**: the page already has one title (`h1`), and a second would show twice and confuse search engines.
- `description`: the line under the title, on the card in the list, and the description search engines and social networks show. One or two sentences.
- `tags`: shown as pills; on the list page they are the filters, and a tag on an article opens its list filtered by that tag. Reuse the existing spellings (`basics`, `gui`, `api`, `machine-learning`…) so the filters stay short.
- `image`: shown across the whole width at the top of the article (whole, unless it is very tall), and as the card's picture (cropped to 16:10). A landscape image about 1600 to 1800 px wide works best; keep its important part away from the lower left corner, where the title box sits.
- `date`: `YYYY-MM-DD`. Lists are sorted by it, newest first.

New articles are added to the [sitemap](/src/routes/sitemap.xml/+server.js) automatically, in the languages they exist in.

### svelte components

We provide a number of svelte components that you can use in your article. You will need to import them into your article after the metadata like such:

```md
<script>
    import Image from '$lib/components/articles/Image.svelte';
</script>
```

Then you will be able to use them in the body of your article like follows:

```md
<Image
    src = "projects/coeso/networks.png"
    alt = "Demo content networks"
    width = "100%"
/>
```