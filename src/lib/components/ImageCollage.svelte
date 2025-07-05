<script>
    import { onMount } from 'svelte';
    import { collageImages } from '$lib/data/works';
    
    let hoveredIndex = -1;
    let scrollY = 0;
    let browser = false;
    
    function handleImageHover(index) {
      hoveredIndex = index;
    }
    
    function handleMouseLeave() {
      hoveredIndex = -1;
    }
    
    onMount(() => {
      // Set browser flag once component is mounted
      browser = true;
    });
  </script>
  
  <!-- svelte:window needs to be at the top level, not in a conditional block -->
  <svelte:window bind:scrollY={scrollY}/>
  
  <!-- Image collage -->
  <div class="image-collage-wrapper">
    {#each collageImages as image, i}
      <div 
        class="collage-image" 
        class:hovered={hoveredIndex === i}
        on:mouseenter={() => handleImageHover(i)}
        on:mouseleave={handleMouseLeave}
        style="
          top: {image.position.top || 'auto'}; 
          left: {image.position.left || 'auto'}; 
          right: {image.position.right || 'auto'};
          bottom: {image.position.bottom || 'auto'};
          width: {image.width}; 
          z-index: {hoveredIndex === i ? 100 : image.zIndex}; 
          transform: rotate({image.rotation}deg) {browser ? `translateY(calc(${scrollY * 0.06}px * (1 + ${i * 0.2})))` : ''};
        "
      >
        <img src={image.src} alt="Portfolio collage element {i + 1}" class="grayscale" />
      </div>
    {/each}
  </div>
  
  <style>
    /* Image Collage styles */
    .image-collage-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .collage-image {
      position: absolute;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      border-radius: 0;
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .collage-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }
    
    .collage-image.hovered {
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
      z-index: 100 !important;
      transform: scale(1.08) rotate(0deg) !important;
    }
    
    .collage-image.hovered img {
      transform: scale(1.1);
      filter: grayscale(0%);
    }
  </style>