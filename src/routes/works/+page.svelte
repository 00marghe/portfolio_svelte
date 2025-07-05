<script>
    import { works } from '$lib/data/works';
    import WorkItem from '$lib/components/WorkItem.svelte';
    
    // Filter categories for works
    const categories = ['all', 'ui / ux', 'branding', 'live visuals'];
    let activeCategory = 'all';
    
    // Filter works by category
    $: filteredWorks = activeCategory === 'all' 
      ? works 
      : works.filter(work => 
          work.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase())
        );
        
    function setCategory(category) {
      activeCategory = category;
    }
  </script>
  
  <svelte:head>
    <title>Works | meg iannilli</title>
    <meta name="description" content="Portfolio of selected works by meg iannilli." />
  </svelte:head>
  
  <section class="works-page py-lg">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">01 works</h1>
      </div>
      
      <!-- Category filters -->
      <div class="category-filters">
        {#each categories as category}
          <button 
            class="category-btn" 
            class:active={activeCategory === category}
            on:click={() => setCategory(category)}
          >
            {category}
          </button>
        {/each}
      </div>
      
      <!-- Works grid -->
      <div class="works-grid">
        {#each filteredWorks as work (work.id)}
          <WorkItem {work} showLink={true} />
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .works-page {
      padding-top: 8rem;
    }
    
    .section-title {
      font-size: 3rem;
      font-weight: 400;
      color: var(--text-color);
      margin-bottom: 2rem;
      text-transform: lowercase;
    }
    
    .category-filters {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }
    
    .category-btn {
      background: transparent;
      border: 1px solid var(--text-color-secondary);
      color: var(--text-color-secondary);
      padding: 0.5rem 1.5rem;
      font-size: 0.9rem;
      text-transform: lowercase;
      transition: var(--transition);
      border-radius: 0;
    }
    
    .category-btn.active,
    .category-btn:hover {
      border-color: var(--text-color);
      color: var(--text-color);
    }
    
    .works-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 3rem;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .works-page {
        padding-top: 6rem;
      }
      
      .section-title {
        font-size: 2.5rem;
      }
      
      .works-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  </style>