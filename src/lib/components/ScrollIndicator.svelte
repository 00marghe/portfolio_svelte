<script>
    export let position = 'left'; // 'left', 'right', or 'vertical'
  
    // Determine CSS classes based on position
    let positionClass = '';
  
    if (position === 'left') {
      positionClass = 'left';
    } else if (position === 'right') {
      positionClass = 'right';
    } else if (position === 'vertical') {
      positionClass = 'vertical';
    }
  </script>
  
  {#if position === 'vertical'}
    <div class="scroll-indicator vertical">[scroll]</div>
  {:else}
    <div class="scroll-indicator {positionClass}">[scroll]</div>
  {/if}
  
  <style>
    /* Scroll indicators */
    .scroll-indicator {
      position: fixed;
      font-size: 0.9rem;
      color: var(--text-color, #FFFFFF);
      z-index: 90;
    }
    
    .scroll-indicator.left {
      bottom: 2rem;
      left: 2rem;
    }
    
    .scroll-indicator.right {
      bottom: 2rem;
      right: 2rem;
    }
    
    .scroll-indicator.vertical {
      right: 2rem;
      top: 50%;
      transform: rotate(90deg) translateY(-50%);
      transform-origin: center right;
    }
    
    /* Hide on mobile */
    @media (max-width: 768px) {
      .scroll-indicator {
        display: none;
      }
    }
  </style>