<script>
    import { lang } from '$lib/scripts/stores.js';
    import PlaceholderVocab from '$lib/data/vocab/placeholder.json';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});
</script>

<div class="cont">
    <p>{PlaceholderVocab.connect[langVal]}</p>
</div>

<style>
    .cont{
        padding-bottom: 5em;
        padding-top: 5em;
    }

    p{
        font-size: 0.5em;
    }
</style>