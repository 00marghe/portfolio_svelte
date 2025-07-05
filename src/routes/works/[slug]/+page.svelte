<script>
    import { page } from '$app/stores';
    import { works } from '$lib/data/works';
    import { onMount } from 'svelte';
    
    // Get the work based on slug
    $: slug = $page.params.slug;
    $: work = works.find(w => w.slug === slug);
    
    // For navigation between works
    $: currentIndex = works.findIndex(w => w.slug === slug);
    $: nextWork = works[(currentIndex + 1) % works.length];
    $: prevWork = works[(currentIndex - 1 + works.length) % works.length];
    
    // Scroll to top on mount or slug change
    onMount(() => {
      window.scrollTo(0, 0);
    });
    
    $: if (slug) {
      window.scrollTo(0, 0);
    }
  </script>
  
  <svelte:head>
    <title>{work ? work.title : 'Project'} | meg iannilli</title>
    <meta name="description" content={work ? work.description : 'Project details'} />
  </svelte:head>
  
  {#if work}
    <section class="work-detail py-lg">
      <div class="container">
        <!-- Project header -->
        <div class="project-header">
          <div class="project-title-wrapper">
            <h1 class="project-title">{work.title}</h1>
            <div class="project-year">{work.year}</div>
          </div>
          
          <div class="project-tags">
            {#each work.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </div>
        
        <!-- Project image -->
        <div class="project-image-wrapper">
          <img src={work.image} alt={work.title} class="project-image" />
        </div>
        
        <!-- Project info -->
        <div class="project-content">
          <div class="project-desc">
            <h2>Overview</h2>
            <p>{work.description}</p>
            <p>This is a placeholder text for the detailed project description. In a real implementation, this content would come from a CMS or database with rich text formatting.</p>
          </div>
        </div>
        
        <!-- Project navigation -->
        <div class="project-nav">
          <a href="/works/{prevWork.slug}" class="nav-link prev">← Previous Project</a>
          <a href="/works" class="nav-link all">All Projects</a>
          <a href="/works/{nextWork.slug}" class="nav-link next">Next Project →</a>
        </div>
      </div>
    </section>
  {:else}
    <section class="not-found py-lg">
      <div class="container">
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <a href="/works" class="btn">Back to Works</a>
      </div>
    </section>
  {/if}
  
  <style>
    .work-detail {
      padding-top: 8rem;
    }
    
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .project-title-wrapper {
      flex: 1;
    }
    
    .project-title {
      font-size: 3rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      text-transform: lowercase;
    }
    
    .project-year {
      color: var(--text-color-secondary);
      font-size: 1rem;
    }
    
    .project-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      align-self: flex-end;
    }
    
    .tag {
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--text-color);
      padding: 0.25rem 0.75rem;
      font-size: 0.8rem;
      text-transform: lowercase;
    }
    
    .project-image-wrapper {
      margin-bottom: 3rem;
      width: 100%;
    }
    
    .project-image {
      width: 100%;
      height: auto;
      display: block;
    }
    
    .project-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 4rem;
    }
    
    .project-desc h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 400;
    }
    
    .project-desc p {
      margin-bottom: 1rem;
      color: var(--text-color-secondary);
    }
    
    .project-nav {
      display: flex;
      justify-content: space-between;
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .nav-link {
      font-size: 0.9rem;
      color: var(--text-color-secondary);
      position: relative;
      transition: color 0.3s ease;
    }
    
    .nav-link:hover {
      color: var(--text-color);
    }
    
    .not-found {
      padding-top: 8rem;
      text-align: center;
    }
    
    .not-found h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .not-found p {
      margin-bottom: 2rem;
      color: var(--text-color-secondary);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .project-header {
        flex-direction: column;
      }
      
      .project-title {
        font-size: 2.5rem;
      }
      
      .project-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .project-nav {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  </style>