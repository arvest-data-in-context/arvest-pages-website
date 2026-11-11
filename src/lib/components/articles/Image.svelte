<script>
    import { base } from '$app/paths';
    export let src = "";
    export let alt = "";
    export let width = "100%";
</script>

<figure class="img_cont" style="--w: {width};">
    <img class="framed" src={base + "/" + src} {alt} loading="lazy">
</figure>

<style>
    .img_cont {
        width: var(--w, 100%);
        max-width: 100%;
        margin: 0 0 1.5rem;
    }

    .img_cont img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 700px) {
        .img_cont {
            width: 100%;
        }
    }
</style>
