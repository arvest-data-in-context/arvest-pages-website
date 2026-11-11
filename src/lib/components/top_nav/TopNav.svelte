<script>
    // The top bar, as the tool's (playground TopNav): white, a 1.5px black lower edge;
    // Arvest (Steinbeck, purple), then each section as a pill opening a small card menu of
    // its pages (the section of the page shown is purple); at the right the language and
    // Connect. Narrow: one menu card with every page, grouped by section.
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    import LangSelect from '$lib/components/top_nav/LangSelect.svelte';
    import { SECTIONS } from '$lib/scripts/nav.js';

    import { lang } from '$lib/scripts/stores.js';
    import PageVocab from '$lib/data/vocab/top_nav.json';
    import Labels from '$lib/data/vocab/footer.json';
    let langVal;
    lang.subscribe(value => {
        langVal = value;
    });

    let menu_open = false;     // the narrow screen's menu
    let open = null;           // the section whose menu is open (wide screens)
    let close_timer;
    let scrolled = false;
    let bar;

    // "/community/news/arvest-launch" for /en/community/news/arvest-launch
    $: rest = "/" + $page.url.pathname.replace(base, "").split("/").slice(2).join("/");
    // the section whose address this is, or one of whose pages it is (the tools' pages sit
    // at the top level: /mmm belongs to Going further)
    $: current = SECTIONS.find(s => rest.startsWith("/" + s.key + "/") || rest === "/" + s.key
        || s.items.some(i => !i.external && (rest === i.href || rest.startsWith(i.href + "/"))))?.key || "";

    const href_of = (item) => item.external ? item.href : `${base}/${langVal}${item.href}`;
    const is_here = (item, rest) => !item.external && (rest === item.href || rest.startsWith(item.href + "/"));

    export const hide_hamburger = () => {
        menu_open = false;
        open = null;
    };

    export const handle_scroll = (scroll_state) => {
        scrolled = scroll_state;
    };

    // Hover opens (mouse), with a short delay before closing so the pointer can reach the menu.
    function enter(key, e) {
        if (e.pointerType && e.pointerType !== "mouse") return;
        clearTimeout(close_timer);
        open = key;
    }
    function leave(e) {
        if (e.pointerType && e.pointerType !== "mouse") return;
        clearTimeout(close_timer);
        close_timer = setTimeout(() => (open = null), 180);
    }
    function toggle(key) {
        clearTimeout(close_timer);
        open = open === key ? null : key;
    }

    function on_key(e) {
        if (e.key === "Escape") {
            if (open) {
                const btn = bar?.querySelector(`[data-section="${open}"]`);
                open = null;
                btn?.focus();
            }
            menu_open = false;
        }
    }

    function on_click_outside(e) {
        if (open && bar && !bar.contains(e.target)) open = null;
    }

    // Leaving a menu with the keyboard closes it.
    function focus_out(e) {
        if (!e.currentTarget.contains(e.relatedTarget)) open = null;
    }

    onMount(() => () => clearTimeout(close_timer));
</script>

<svelte:window on:keydown={on_key} on:click={on_click_outside} />

<header class:scrolled class:menu_open>
    <nav class="bar" aria-label="Main" bind:this={bar}>
        <a class="brand" href="{base}/{langVal}" aria-label="Arvest, home">
            <img src="{base}/favicon.svg" alt="" width="30" height="30">
            <span>Arvest</span>
        </a>

        <ul class="links">
            {#each SECTIONS as s}
                <li
                    class="section"
                    on:pointerenter={(e) => enter(s.key, e)}
                    on:pointerleave={leave}
                    on:focusout={focus_out}
                >
                    <button
                        type="button"
                        class="section_button"
                        class:current={current === s.key}
                        class:open={open === s.key}
                        data-section={s.key}
                        aria-expanded={open === s.key}
                        aria-controls="menu_{s.key}"
                        on:click={() => toggle(s.key)}
                    >
                        {PageVocab[s.key][langVal]}
                        <svg class="chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" /></svg>
                    </button>

                    <ul class="dropdown card" id="menu_{s.key}" hidden={open !== s.key}>
                        {#each s.items as item}
                            <li>
                                <a
                                    href={href_of(item)}
                                    class:here={is_here(item, rest)}
                                    aria-current={is_here(item, rest) ? "page" : undefined}
                                    on:click={() => (open = null)}
                                >
                                    {Labels[item.label][langVal]}
                                    {#if item.external}<span class="ext" aria-hidden="true">↗</span>{/if}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </li>
            {/each}
        </ul>

        <div class="right">
            <div class="lang_wide"><LangSelect /></div>
            <a class="connect" href="https://workspace.arvest.app/">{PageVocab.connect[langVal]}</a>

            <button
                class="menu_button"
                aria-expanded={menu_open}
                aria-controls="nav_menu"
                aria-label={menu_open ? "Close the menu" : "Open the menu"}
                on:click={() => (menu_open = !menu_open)}
            >
                {#if menu_open}
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                {:else}
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
                {/if}
            </button>
        </div>
    </nav>

    {#if menu_open}
        <div class="menu card" id="nav_menu">
            <div class="groups">
                {#each SECTIONS as s}
                    <div class="group">
                        <span class="eyebrow" class:current_group={current === s.key}>{PageVocab[s.key][langVal]}</span>
                        <ul>
                            {#each s.items as item}
                                <li>
                                    <a href={href_of(item)} class:here={is_here(item, rest)} aria-current={is_here(item, rest) ? "page" : undefined}>
                                        {Labels[item.label][langVal]}
                                        {#if item.external}<span class="ext" aria-hidden="true">↗</span>{/if}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
            <div class="menu_foot">
                <LangSelect />
                <a class="connect in_menu" href="https://workspace.arvest.app/">{PageVocab.connect[langVal]}</a>
            </div>
        </div>
    {/if}
</header>

<div class="nav_space" aria-hidden="true"></div>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: var(--surface);
        border-bottom: 1.5px solid var(--primary-text);
    }

    .bar {
        display: flex;
        align-items: center;
        gap: 1rem;
        height: var(--nav-h);
        max-width: calc(var(--page-max) + 2 * var(--gutter));
        margin: 0 auto;
        padding: 0 var(--gutter);
    }

    .brand {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        flex: none;
        color: var(--primary);
        text-decoration: none;
        font-family: var(--font-display);
        font-size: 1.75rem;
        line-height: 1;
    }

    .brand img {
        width: 30px;
        height: 30px;
        flex: none;
    }

    .links {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        min-width: 0;
    }

    .section {
        position: relative;
    }

    /* The section: a pill; purple when the page shown is in it. */
    .section_button {
        display: inline-flex;
        align-items: center;
        gap: 0.35em;
        padding: 0.3em 0.7em 0.3em 0.85em;
        border: none;
        border-radius: 999px;
        background: none;
        color: var(--primary-text);
        font-family: var(--font-ui);
        font-size: 1rem;
        line-height: 1.45;
        white-space: nowrap;
        cursor: pointer;
        transition: background-color 0.12s, color 0.12s;
    }

    .section_button:hover,
    .section_button.open {
        background: var(--primary-tint);
        color: var(--primary);
    }

    .section_button.current {
        background: var(--primary);
        color: var(--on-primary);
    }

    .chevron {
        width: 0.75em;
        height: 0.75em;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.6;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: transform 0.15s;
    }

    .open .chevron {
        transform: rotate(180deg);
    }

    /* Its pages: a small card menu under the pill (the tool's ⋯ menus). The padding above
       is a bridge, so the pointer can travel from the pill to the menu. */
    .dropdown {
        position: absolute;
        top: calc(100% + 10px);
        left: 0;
        z-index: 2;
        min-width: 220px;
        padding: 0.4rem;
        border-width: 1.5px;
        box-shadow: var(--panel-shadow);
    }

    .dropdown::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -12px;
        height: 12px;
    }

    .dropdown[hidden] {
        display: none;
    }

    .dropdown a,
    .menu .group a {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.45em 0.75em;
        border-radius: 6px;
        color: var(--primary-text);
        text-decoration: none;
        white-space: nowrap;
        transition: background-color 0.12s, color 0.12s;
    }

    .dropdown a:hover,
    .menu .group a:hover {
        background: var(--primary-tint);
        color: var(--primary);
    }

    /* The page shown: purple text and a purple left edge (as a selected row in the tool). */
    .dropdown a.here,
    .menu .group a.here {
        color: var(--primary);
        background: var(--primary-tint);
        box-shadow: inset 3px 0 0 var(--primary);
    }

    .ext {
        color: var(--secondary-text);
        font-size: 0.85em;
    }

    .right {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-left: auto;
        flex: none;
    }

    .connect {
        display: inline-flex;
        align-items: center;
        padding: 0.35em 1em;
        border-radius: 999px;
        background: var(--primary);
        color: var(--on-primary);
        font-family: var(--font-ui-regular);
        font-size: 0.9rem;
        text-decoration: none;
        white-space: nowrap;
    }

    .connect:hover {
        background: var(--hover-primary);
    }

    /* Round icon button, as the tool's (profile, help, settings). */
    .menu_button {
        display: none;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: none;
        color: var(--primary-text);
        cursor: pointer;
    }

    .menu_button:hover,
    .menu_open .menu_button {
        background: var(--primary-tint);
        color: var(--primary);
    }

    .menu_button svg {
        width: 24px;
        height: 24px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.7;
        stroke-linecap: round;
    }

    /* Narrow screens: every page in one card, by section. */
    .menu {
        position: absolute;
        top: calc(var(--nav-h) + 8px);
        right: var(--gutter);
        width: min(380px, calc(100vw - 2 * var(--gutter)));
        max-height: calc(100vh - var(--nav-h) - 16px);
        max-height: calc(100dvh - var(--nav-h) - 16px);
        overflow-y: auto;
        padding: 0.9rem 0.75rem 0.75rem;
    }

    .groups {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem 0.5rem;
    }

    .group .eyebrow {
        padding: 0 0.75rem 0.3rem;
    }

    .group .eyebrow.current_group {
        color: var(--primary);
    }

    .menu .group a {
        padding: 0.4em 0.75em;
        white-space: normal;
    }

    .menu_foot {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        margin-top: 0.9rem;
        padding: 0.75rem 0.25rem 0.1rem;
        border-top: 1px solid var(--line-soft);
    }

    .nav_space {
        height: var(--nav-h);
    }

    /* Tighter pills before going to the menu. */
    /* Five sections are wide (French most of all): below 1180px the brand is the A alone
       and the buttons tighter; below 1060px the sections go into the menu. */
    @media (max-width: 1180px) {
        .bar { gap: 0.6rem; }
        .section_button { padding: 0.3em 0.5em 0.3em 0.6em; font-size: 0.95rem; }
        .brand span { display: none; }
    }

    @media (max-width: 1060px) {
        .brand span { display: inline; }
        .links,
        .lang_wide {
            display: none;
        }
        .menu_button {
            display: inline-flex;
        }
    }

    @media (max-width: 380px) {
        .groups {
            grid-template-columns: 1fr;
        }
    }

    /* Phones: Connect lives in the menu. */
    @media (max-width: 420px) {
        .right > .connect {
            display: none;
        }
        .brand { font-size: 1.6rem; }
    }

    @media (min-width: 1061px) {
        .menu { display: none; }
    }
</style>
