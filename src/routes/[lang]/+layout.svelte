<script>
    export let data; // PAGE DATA HERE

	import './reset.css';
	import './theme.css';
	import { onMount, tick } from 'svelte';
	import { beforeNavigate, afterNavigate } from "$app/navigation"

	import { base } from '$app/paths';
	import { page } from '$app/stores';
    import { lang } from '$lib/scripts/stores';
    $: lang.set($page.params.lang || 'en');

	import TopNav from '$lib/components/top_nav/TopNav.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	let scrolled = false;
	let top_nav_element;

	function handle_scroll(){
		scrolled = window.scrollY > 0;
		top_nav_element?.handle_scroll(scrolled);
	};

	onMount(()=> {
		handle_scroll();
		window.addEventListener('scroll', handle_scroll, { passive: true });
		return () => window.removeEventListener('scroll', handle_scroll);
	})

	// The window scrolls (not a box inside the page: Safari on iPhone painted the animated
	// demos of a scrolling fixed box below the footer). A new page starts at its top at once
	// (not glided by the smooth scrolling below); a link to a place (#…), on this page or
	// another, glides there (at once for those who ask for less motion).
	afterNavigate(async ({ to, from }) => {
		await tick();
		const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		const hash = to?.url.hash ? decodeURIComponent(to.url.hash.slice(1)) : "";
		const target = hash && document.getElementById(hash);
		if (target) {
			target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
		} else if (from?.url.pathname !== to?.url.pathname) {
			window.scrollTo({ top: 0, behavior: 'instant' });
		}
	});

	beforeNavigate(() => {
		top_nav_element.hide_hamburger();
	});
</script>

<div id="global_container">
	<!-- The page's background, as the tool's dashboard without pictures: a faint dot grid,
	     Arvest's purple, light blue and amber blurred and slowly drifting. Fixed behind everything. -->
	<div class="backdrop" aria-hidden="true">
		<span class="blob purple"></span>
		<span class="blob blue"></span>
		<span class="blob amber"></span>
	</div>

	<div id="page_container" >
		<TopNav 
			bind:this = {top_nav_element}
		/>

		<div id="content_container" class:wide={$page.route.id === "/[lang]"}>
			<main>
				<slot />
			</main>
		</div>

		
	</div>

	<Footer />
</div>

<style>
	/* The page itself scrolls (the window): never make this box a scroller again. */
	#global_container{
		width: 100%;
		min-height: 100vh;
		min-height: 100svh;
		background: var(--dot-grid);
		overflow-x: clip;
		display: flex;
		flex-direction: column;
	}

	#page_container{
		position: relative;
		flex: 1 0 auto;
	}

	#global_container{
		isolation: isolate;
	}

	:global(html){
		scroll-behavior: smooth;
	}

	@media (prefers-reduced-motion: reduce){
		:global(html){
			scroll-behavior: auto;
		}
	}

	.backdrop{
		position: fixed;
		inset: 0;
		z-index: -1;
		overflow: hidden;
		pointer-events: none;
		background-color: var(--dot-grid);
		background-image: radial-gradient(rgba(128, 0, 128, 0.12) 1px, transparent 1.2px);
		background-size: 18px 18px;
	}

	.blob{
		position: absolute;
		border-radius: 50%;
		filter: blur(70px);
		animation: drift 32s ease-in-out infinite alternate;
	}

	.blob.purple{
		width: 46vmax;
		height: 46vmax;
		left: -14vmax;
		top: -18vmax;
		background: rgba(128, 0, 128, 0.16);
	}

	.blob.blue{
		width: 52vmax;
		height: 52vmax;
		right: -18vmax;
		top: 18vh;
		background: rgba(173, 216, 230, 0.55);
		animation-delay: -11s;
	}

	.blob.amber{
		width: 38vmax;
		height: 38vmax;
		left: 22vw;
		bottom: -24vmax;
		background: rgba(242, 184, 75, 0.26);
		animation-delay: -21s;
	}

	@keyframes drift{
		from { transform: translate(0, 0) scale(1); }
		to   { transform: translate(5vw, 6vh) scale(1.08); }
	}

	/* The home page lays out its own width (its table takes the whole window). */
	#content_container.wide{
		max-width: none;
		padding: 0 0 3rem;
	}

	/* One centred column for every page (docs/design.md, "Pages"). */
	#content_container{
		width: 100%;
		max-width: calc(var(--page-max) + 2 * var(--gutter));
		margin: 0 auto;
		padding: 1.25rem var(--gutter) 4rem;
	}
</style>
