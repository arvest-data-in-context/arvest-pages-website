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

	let global_container;
	let scrolled = false;
	let top_nav_element;

	function handle_scroll(){
		scrolled = global_container.scrollTop > 0;
		top_nav_element.handle_scroll(scrolled);
	};

	onMount(()=> {
		handle_scroll();
		global_container.addEventListener('scroll', function(e) {
			handle_scroll();
		})
	})

	// The page scrolls inside #global_container, so the browser's own scrolling on
	// navigation does not reach it. A new page starts at its top at once; a link to a place
	// (#…), on this page or another, glides there (at once for those who ask for less motion).
	afterNavigate(async ({ to, from }) => {
		if (!global_container) return;
		await tick();
		const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		const hash = to?.url.hash ? decodeURIComponent(to.url.hash.slice(1)) : "";
		const target = hash && document.getElementById(hash);
		if (target) {
			target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
		} else if (from?.url.pathname !== to?.url.pathname) {
			global_container.scrollTo({ top: 0, behavior: 'instant' });
		}
	});

	beforeNavigate(() => {
		top_nav_element.hide_hamburger();
	});
</script>

<div id="global_container" bind:this={global_container}>
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
	#global_container{
		width: 100%;
		height: 100%;
		background: var(--dot-grid);
		position: fixed;
		top: 0;
		left: 0;
		overflow-x: hidden;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}

	#page_container{
		position: relative;
		flex: 1 0 auto;
	}

	#global_container{
		isolation: isolate;
		scroll-behavior: smooth;
	}

	@media (prefers-reduced-motion: reduce){
		#global_container{
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
