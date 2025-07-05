<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CustomCursor from '$lib/components/CustomCursor.svelte';
  import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';
  
  let isLoaded = false;
  let currentPath = '';
  
  onMount(() => {
    // Get current path
    currentPath = window.location.pathname;
    
    // Animation delay
    setTimeout(() => {
      isLoaded = true;
    }, 300);
  });
</script>

<!-- Custom cursor for entire site -->
<CustomCursor />

<!-- Header component -->
<Header {currentPath} />

<!-- Scroll indicators -->
<ScrollIndicator position="left" />
<ScrollIndicator position="right" />

<!-- Main content -->
<main class:loaded={isLoaded}>
  <slot />
</main>

<!-- Footer component -->
<Footer />

<style>
  /* Page transition */
  main {
    opacity: 0;
    transition: opacity 1s ease;
    min-height: calc(100vh - 6rem);
  }
  
  main.loaded {
    opacity: 1;
  }
</style>