# Adding languages.

The site is multilingual and will build the static website into all supported languages automatically.

If you wish to add a new language implementation you will have to follow the following steps:

## 1. Modify stores.js

You will need to add your new language code to the [stores.js](/src/lib/scripts/stores.js) file like so:

```js
export const supported_langs = ["en", "fr"] // Add the language code to the end of this list.
```

This list is also what the sitemap, the `hreflang` links of every page ([Seo.svelte](/src/lib/components/Seo.svelte)) and the page's `<html lang>` ([hooks.server.js](/src/hooks.server.js)) use, so they follow by themselves.

## 2. Modify the language select component

The EN / FR buttons of the top bar ([LangSelect](/src/lib/components/top_nav/LangSelect.svelte)) are made from `supported_langs`: add the language's name to `names` there:

```js
const names = { en: "English", fr: "Français" }; // add the new language here
```

Also add the language to the section addresses listed for prerendering in [svelte.config.js](/svelte.config.js) (`['en', 'fr'].flatMap(...)`).

## 3. Modify the vocab files

All of the websites vocabulary is sorted in the [vocab](/src/lib/data/vocab/) folder. You will need to add a new entry to every dictionary that supports your language. Every dictionary must be updated.

Some pages keep their longer texts in JavaScript files next to the vocab folder, with the same `{ en: …, fr: … }` shape; add the language there too:

- [api_docs.js](/src/lib/data/api_docs.js): the API documentation page (the code examples are the same in every language);
- [infrastructure.js](/src/lib/data/infrastructure.js): the infrastructure page;
- [tools.js](/src/lib/data/tools.js): the pages of the browser extension, mmm and the LA-PA editor;
- [ecosystem.js](/src/lib/data/ecosystem.js): the ecosystem page.

The animated demos and diagrams contain no words (text is drawn as grey lines), so they need no translation.

## 4. Update content

Finally, you can translate existing articles in the [content](/src/content/) folder. To do this, in the article's folder, add a new `.svx` file with the file name of your language code. Note that when your langiage is not provided, the website will default to the English verison of the article.