<script>
    import { onMount } from 'svelte';
    import ImageList from '$lib/data/image_grid.json';
    let images = ImageList.images;
    let draw_images = [];
    let num_images = 5;

    onMount(async () => {
        for(let i = 0; i < num_images; i ++){
            
        }
    });

    function randomSize() {
        return Math.floor(Math.random() * 4) + 1;
    }

    function randomPosition() {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        return `background-position: ${x}% ${y}%;`;
    }
</script>

<div class="image_grid_cont">
    <div class="grid">
        {#each images as image}
          <div
            class="image-cell"
            style="
              grid-column: span {randomSize()};
              grid-row: span {randomSize()};
              background-image: url('{image}');
              {randomPosition()}
            ">
          </div>
        {/each}
      </div>
</div>

<style>
    .image_grid_cont{
        margin-top: 0.5em;
        background-color: red;
        width: 100%;
        height: 500px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 8px;
    }

    .image-cell {
        overflow: hidden;
        background-size: cover;
        aspect-ratio: 1; /* Ensures square cells */
    }
</style>