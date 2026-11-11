<script>
  export let code = '';
  export let filename = '';
  export let language = '';
  export let showLineNumbers = false;
  export let wrap = true;   // false: long lines scroll sideways (code), true: they wrap (citations)

  import { onDestroy } from 'svelte';

  let copied = false;
  let codeEl;
  let timeoutId;

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async function copyToClipboard() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = code;
        // Move it off-screen
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      showCopied();
    } catch (err) {
      // If copy failed, still show feedback
      console.error('Copy failed', err);
      showCopied(false);
    }
  }

  function showCopied(success = true) {
    copied = success;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => (copied = false), 2000);
  }

  onDestroy(() => clearTimeout(timeoutId));
</script>

<style>
  /* A card (1.5px, as inside panels), its head a thin grey line; Copy a small pill. */
  :global(.copy-code-box) {
    border: 1.5px solid var(--primary-text);
    border-radius: var(--card-radius);
    box-shadow: var(--panel-shadow);
    background: var(--surface);
    overflow: hidden;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.45rem 0.6rem 0.45rem 0.9rem;
    border-bottom: 1px solid var(--line-soft);
    background: var(--surface-soft);
    font-size: 0.8rem;
  }

  .meta {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    min-height: 1.6em;
    color: var(--secondary-text);
  }

  button.copy-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.25rem 0.75rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    color: var(--primary-text);
    font-family: var(--font-ui-regular);
    font-size: 0.8rem;
    cursor: pointer;
  }

  button.copy-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
  }

  pre {
    margin: 0;
    padding: 0.9rem 1rem;
    color: var(--primary-text);
    font-family: var(--font-ui-regular);
    font-size: 0.88rem;
    line-height: 1.55;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: anywhere;
    overflow-x: hidden;
  }

  pre.scroll,
  pre.scroll code {
    white-space: pre;
    word-break: normal;
    overflow-wrap: normal;
  }

  pre.scroll {
    overflow-x: auto;
  }

  .code-wrapper {
    display: flex;
  }

  .line-numbers {
    padding: 0.9rem 0.5rem;
    user-select: none;
    text-align: right;
    color: var(--secondary-text);
    background: var(--surface-soft);
  }

  code {
    display: block;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .copied-badge {
    color: var(--success);
  }
</style>

<div class="copy-code-box" role="group" aria-label={filename ? `Code sample: ${filename}` : 'Code sample'}>
  <header>
    <div class="meta">
      {#if filename}
        <div class="filename" aria-hidden>{filename}</div>
      {/if}
      {#if copied}
        <div class="copied-badge" role="status" aria-live="polite">Copied ✓</div>
      {/if}
    </div>

    <div>
      <button class="copy-btn" on:click={copyToClipboard} aria-label="Copy code to clipboard">
        <!-- simple copy icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>Copy</span>
      </button>
    </div>
  </header>

  <div class="code-wrapper">
    {#if showLineNumbers}
      <div class="line-numbers" aria-hidden>
        {#each code.split('\n') as _line, i}
          <div>{i + 1}</div>
        {/each}
      </div>
    {/if}

    <pre class:scroll={!wrap}><code class={language} bind:this={codeEl}>{@html escapeHtml(code)}</code></pre>
  </div>
</div>
