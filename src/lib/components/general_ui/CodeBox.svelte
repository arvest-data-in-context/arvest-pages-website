<script>
  export let code = '';
  export let filename = '';
  export let language = '';
  export let showLineNumbers = false;

  import { onDestroy } from 'svelte';

  let copied = false;
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
  :global(.copy-code-box) {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.06);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.01));
    font-size: 0.875rem;
  }

  .meta {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: #374151; /* neutral-gray */
  }

  button.copy-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: 1px solid rgba(0,0,0,0.06);
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  button.copy-btn:focus {
    outline: 3px solid rgba(59,130,246,0.2);
  }

  pre {
     margin: 0;
  padding: 0.75rem;
  color: #2f2f2f;
  font-size: 0.9rem;
  line-height: 1.45;
  white-space: pre-wrap;     /* preserves newlines but allows wrapping */
  word-break: break-word;    /* breaks long words if needed */
  overflow-wrap: anywhere;   /* modern fallback */
  overflow-x: hidden; 
  }

  /* line numbers column */
  .code-wrapper {
    display: flex;
  }

  .line-numbers {
    padding: 0.75rem 0.5rem;
    user-select: none;
    text-align: right;
    color: rgba(230,237,243,0.45);
    background: rgba(255,255,255,0.02);
  }

  code {
    white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: anywhere;
  display: block;
  }

  .copied-badge {
    font-size: 0.8rem;
    color: #10b981; /* green-ish */
    margin-left: 0.5rem;
  }
</style>

<div class="copy-code-box" role="group" aria-label={filename ? `Code sample: ${filename}` : 'Code sample'}>
  <header>
    <div class="meta">
      {#if filename}
        <div class="filename" aria-hidden>{filename}</div>
      {/if}
      {#if copied}
        <div class="copied-badge" role="status" aria-live="polite">Copied!</div>
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

    <pre>
      <code class={language} bind:this={codeEl}>{@html escapeHtml(code)}</code>
    </pre>
  </div>
</div>
