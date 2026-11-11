<script>
    // A link shaped as Arvest's pill button (docs/design.md in the playground):
    // "primary" purple for what you can do, "secondary" light blue for a second action,
    // "quiet" white with a grey edge for going somewhere to read.
    export let label = "Button";
    export let url = "/";
    export let kind = "secondary";
    export let size = "";   // "" or "large"
</script>

<a href={url} class="pill {kind} {size}">
    {label}
</a>

<style>
    .pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4em;
        padding: 0.45em 1.1em;
        border: 1px solid transparent;
        border-radius: 999px;
        font-family: var(--font-ui-regular);
        font-size: 0.9rem;
        line-height: 1.3;
        text-align: center;
        text-decoration: none;
        white-space: normal;
        cursor: pointer;
        transition: background-color 0.12s, color 0.12s, border-color 0.12s;
    }

    .large {
        padding: 0.6em 1.4em;
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        .large {
            padding: 0.55em 1.15em;
            font-size: 0.95rem;
        }
    }

    .primary {
        background: var(--primary);
        color: var(--on-primary);
    }
    .primary:hover {
        background: var(--hover-primary);
    }

    .secondary {
        background: var(--secundary);
        color: var(--on-secundary);
    }
    .secondary:hover {
        background: var(--hover-secundary);
    }

    .quiet {
        background: var(--surface);
        border-color: var(--line);
        color: var(--primary-text);
    }
    .quiet:hover {
        border-color: var(--primary);
        color: var(--primary);
    }
</style>
