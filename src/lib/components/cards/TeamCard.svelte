<script>
    export let member_data;
    
    import { lang } from '$lib/scripts/stores.js';
    let langVal;
	lang.subscribe(value => {
		langVal = value;
	});

    import { base } from '$app/paths';
</script>

<article class="card team_card_cont">
    <img src="{base}/{member_data.img}" alt={member_data.name} loading="lazy">
    <div class="text">
        <h2>{member_data.name}</h2>
        {#if member_data.site}
            <a href="{member_data.site}">{member_data.site.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a>
        {/if}
        <p>{member_data.description[langVal]}</p>
    </div>
</article>

<style>
    .team_card_cont{
        display: flex;
        gap: 1.25rem;
        align-items: flex-start;
        padding: 1.1rem;
    }

    img{
        flex: none;
        width: 120px;
        height: 120px;
        object-fit: cover;
        border: 1.5px solid var(--primary-text);
        border-radius: var(--card-radius);
    }

    .text{
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    h2{
        font-size: 1.5rem;
    }

    a{
        color: var(--primary);
        font-size: 0.9rem;
        overflow-wrap: anywhere;
    }

    p{
        margin-top: 0.35rem;
        color: var(--secondary-text);
        line-height: 1.55;
    }

    @media (max-width: 560px){
        .team_card_cont{
            flex-direction: column;
        }
        img{
            width: 96px;
            height: 96px;
        }
    }
</style>
