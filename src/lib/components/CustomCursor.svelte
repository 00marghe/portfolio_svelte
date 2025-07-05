<script>
    import { onMount, onDestroy } from 'svelte';
    
    let mouseX = 0;
    let mouseY = 0;
    let scale = 1;
    let browser = false;
    
    // Function to handle mouse movement
    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
    
    // Function to handle scaling the cursor
    export function scaleCursor(newScale) {
      scale = newScale;
    }
    
    // Reset cursor scale
    export function resetCursor() {
      scale = 1;
    }
    
    onMount(() => {
      // Set browser flag once component is mounted
      browser = true;
      
      // Add event listener
      if (typeof document !== 'undefined') {
        document.addEventListener('mousemove', handleMouseMove);
        
        // Add hover detection for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, .collage-image');
        
        interactiveElements.forEach(element => {
          element.addEventListener('mouseenter', () => {
            scale = 1.5;
          });
          
          element.addEventListener('mouseleave', () => {
            scale = 1;
          });
        });
      }
    });
    
    onDestroy(() => {
      // Remove event listener to prevent memory leaks
      if (browser && typeof document !== 'undefined') {
        document.removeEventListener('mousemove', handleMouseMove);
      }
    });
  </script>
  
  {#if browser}
    <!-- Custom cursor element - only render on client -->
    <div
      class="custom-cursor"
      style="
        left: {mouseX}px; 
        top: {mouseY}px; 
        transform: translate(-50%, -50%) scale({scale});
      "
    ></div>
  {/if}
  
  <style>
    .custom-cursor {
      position: fixed;
      width: 12px;
      height: 12px;
      background: #FFFFFF;
      border-radius: 0;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
    }
  </style>