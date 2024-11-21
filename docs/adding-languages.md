# Adding languages.

The site is multilingual and will build the static website into all supported languages automatically.

If you wish to add a new language implementation you will have to follow the following steps:

## 1. Modify stores.js

You will need to add your new language code to the [stores.js](/src/lib/scripts/stores.js) file like so:

```js
export const supported_langs = ["en", "fr"] // Add the language code to the end of this list.
```

## 2. Modify the language select component

You will need to add the posibility to select a new language to the [LangSelect](/src/lib/components/top_nav/LangSelect.svelte) component like so:

```html
<select bind:value={setLang} on:change={() => updateLang()}>
    <option value="en">English</option>
    <option value="fr">Français</option>
    <!--Add a new option here-->
</select>
```

## 3. Modify the vocab files

All of the websites vocabulary is sorted in the [vocab](/src/lib/data/vocab/) folder. You will need to add a new entry to every dictionary that supports your language. Every dictionary must be updated.

## 4. Update content

Finally, you can translate existing articles in the [content](/src/content/) folder. To do this, in the article's folder, add a new `.svx` file with the file name of your language code. Note that when your langiage is not provided, the website will default to the English verison of the article.