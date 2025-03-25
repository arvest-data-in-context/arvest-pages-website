<script>
    import { lang } from '$lib/scripts/stores.js';
    import PlaceholderVocab from '$lib/data/vocab/placeholder.json';
    import PageVocab from '$lib/data/vocab/top_nav.json';
    import BigButton from '$lib/components/general_ui/BigButton.svelte';

    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<div class="cont">
    <p>{PlaceholderVocab.connect[langVal]}</p>

    <BigButton
        label = {PageVocab.connect[langVal]}
        url = {"https://workspace.arvest.app/"}
    />
</div>

<style>
    .cont{
        padding-bottom: 5em;
        padding-top: 5em;
    }

    p{
        font-size: 0.5em;
        margin-bottom: 1em;
    }
</style>