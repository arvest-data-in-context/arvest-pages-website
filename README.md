# Arvest pages website

This is the main repo for the Arvest.app website. It is made using the [svelte](https://svelte.dev/) framework.

## Local development

Clone the repo, cd into the project folder and run the following:

```bash
npm i
npm run dev
```

This will install node modules and run a localhost server with hot reloading.

Note: you will need to have [node.js](https://nodejs.org/en) installed on your system.

## Building

You can build the static website with the following command:

```bash
npm run build
```

And preview with

```bash
npm run preview
```

## Deploying to github pages

The website is deployed on github pages from the `gh-pages` branch. When developping locally, you can push all of your changes to the main branch, then run the [`build-and-commit.sh`](/build-and-commit.sh) bash script to create a build and commit to the gh-pages branch. You will need to then push the commit from the `gh-pages` branch in order to trigger the update of the website.

## Contributing guide

You can read the following guides to contribute to the website:

- [Adding articles](/docs/adding-articles.md)
- [Adding languages](/docs/adding-languages.md) (and modifying ad hoc vocabulary)