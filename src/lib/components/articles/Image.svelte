<script>
    import { base } from '$app/paths';
    export let src = "";
    export let alt = "";
    export let width = "100%";
</script>

<div class="img_cont" style="width: {width};">
    <img src={base + "/" + src} alt={alt}>
</div>

<style>
    .img_cont{
        width: 100%;
        height: 100%;
        margin-bottom: 1em;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    }

    .img_cont img{
        width: 100%;
    }
</style>