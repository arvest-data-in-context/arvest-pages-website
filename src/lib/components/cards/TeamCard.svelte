<script>
    export let member_data;
    
    import { lang } from '$lib/scripts/stores.js';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    import { base } from '$app/paths';
</script>

<div class="team_card_cont">
    <img src="{base}/{member_data.img}" alt={member_data.name}>
    <div>
        <h3>{member_data.name}</h3>
        <a href="{member_data.site}">{member_data.site}</a>
        <p>{member_data.description[langVal]}</p>
    </div>
</div>

<style>
    .team_card_cont{
        margin-top: 1em;
        width: 80%;
        display: flex;
        gap: 1em;
        /* align-items: center; */
    }

    h3{
        font-size: 0.7em;
    }

    p{
        margin-top: 1em;
        font-size: 0.3em;
        color: var(--secondary-text);
        font-family: 'Input-Mono-Narrow-Thin', monospace;
    }

    a{
        font-size: 0.3em;
        color: var(--secondary-text);
        font-family: 'Input-Mono-Narrow-Thin', monospace;
        font-style: normal;
    }

    img{
        width: auto;
        height: 100px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }

    /* LARGE SCREENS */
    @media (min-width: 1500px) {
        .team_card_cont{
            margin-top: 1em;
            width: 80%;
            display: flex;
        }

        h3{
            margin-top: 0em;
        }
    }

    /* MEDIUM SCREENS */
    @media (min-width: 1200px) and (max-width: 1499px)  {
        .team_card_cont{
            margin-top: 1em;
            width: 80%;
            display: flex;
        }

        h3{
            margin-top: 0em;
        }
    }

    /* SMALL SCREENS */
    @media (min-width: 700px) and (max-width: 1199px) {
        .team_card_cont{
            margin-top: 3em;
            width: 100%;
            display: block;
        }

        h3{
            margin-top: 1em;
        }
    }

    /* VERY SMALL SCREENS */
    @media (max-width: 699px) {
        .team_card_cont{
            margin-top: 3em;
            width: 100%;
            display: block;
        }

        h3{
            margin-top: 1em;
        }
    }
</style>