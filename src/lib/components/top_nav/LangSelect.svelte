<script>
    // Get the language store:
    import { lang } from '$lib/scripts/stores.js';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';

    // Retrieve the language:
    let setLang;
	lang.subscribe(value => {
		setLang = value;
	});

    // Update the language:
    function updateLang(){
        lang.set(setLang);
        let new_url = base + "/" + setLang + $page.url.pathname.slice(3);
        //window.location.href = new_url;

        goto(new_url, { replaceState: true });
    }
</script>

<!--Language update select element-->
<select bind:value={setLang} on:change={() => updateLang()}>
    <option value="en">English</option>
    <option value="fr">Français</option>
</select>

<style>
    select{
        font-family: 'Input-Mono-Narrow-Thin', monospace;
        font-size: 0.5em;
        border: none;
        background-color: transparent;
    }

    select:hover{
        cursor: pointer;
    }
</style>