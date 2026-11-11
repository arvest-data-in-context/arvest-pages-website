<script>
    import Seo from '$lib/components/Seo.svelte';
    import SeoVocab from '$lib/data/vocab/seo.json';
    import AboutVocab from '$lib/data/vocab/about.json';
    import BreadCrumbs from '$lib/components/general_ui/BreadCrumbs.svelte';
    import { base } from '$app/paths';

    import { lang } from '$lib/scripts/stores.js';
    import BCVocab from '$lib/data/vocab/footer.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<Seo
    title={BCVocab.accessibility[langVal]}
    description={SeoVocab.accessibility[langVal]}
/>

<BreadCrumbs
    breadcrumbs={[
        { text: BCVocab.home[langVal], href: base + "/" + langVal },
        { text: BCVocab.about[langVal] },
        { text: BCVocab.accessibility[langVal], href: base + "/" + langVal + "/about/accessibility"}
      ]}
    />

<header class="page_head">
    <h1>Accessibility declaration</h1>
</header>

<div class="prose">

    <h2>Accessibility statement</h2>
    <p>
        Arvest is committed to making its internet, intranet and extranet sites and software packages accessible (as well as its mobile applications and digital street furniture) in accordance with article 47 of law no. 2005-102 of February 11, 2005. This accessibility declaration applies to the https://arvest.app website.
    </p>

    <h2>Compliance status</h2>
    <p>
        The Arvest site hosted by Huma-Num is currently non-compliant with the RGAA (référentiel général d'amélioration de l'accessibilité), version 4, due to the lack of accessibility.
    </p>

    <h2>Establishment of this declaration of accessibility</h2>
    <p>
        This declaration was drawn up on 26/04/2024 and validated by the PI of <a href="https://stage-to-data.huma-num.fr">STAGE</a>.
    </p>

    <h2>Feedback and contact</h2>
    <p>
        If you are unable to access a content or service, you can contact the website developper of Arvest to be directed to an accessible alternative or obtain the content in another form. Send a message via this address:
    </p>
    <p class="email_ad">clarisse[dot]badriot[at]univ-rennes2[dot]fr</p>
</div>

<style>
    .email_ad{
        font-family: var(--font-ui-regular);
        color: var(--primary-text);
        overflow-wrap: anywhere;
    }
</style>