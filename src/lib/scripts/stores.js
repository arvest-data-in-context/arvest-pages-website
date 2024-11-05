import { writable } from 'svelte/store';

export const supported_langs = ["en", "fr"]

export const lang = writable("en");