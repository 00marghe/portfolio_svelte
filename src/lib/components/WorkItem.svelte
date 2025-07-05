<script>
  // Props for the work item
  export let work = {};
  export let showLink = true;
</script>

<div class="work-card">
  <div class="work-image">
    {#if work.image}
      <img src={work.image} alt={work.title} />
    {/if}
    
    <div class="work-tags">
      {#each work.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  </div>
  
  <div class="work-info">
    <div class="work-header">
      <h3>{work.title}</h3>
      {#if work.year}
        <span class="work-year">{work.year}</span>
      {/if}
    </div>
    <p>{work.description}</p>
    
    {#if showLink}
      <a href="/works/{work.slug}" class="work-link">view project</a>
    {/if}
  </div>
</div>

<style>
  .work-card {
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
  }
  
  .work-image {
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;
    margin-bottom: 1rem;
    border-radius: 0;
    overflow: hidden;
    background-color: rgba(192,192,192,0.1);
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .work-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .work-card:hover .work-image {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .work-tags {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .tag {
    background-color: var(--dark-bg, #000000);
    color: var(--text-color, #FFFFFF);
    padding: 0.25rem 0.75rem;
    font-size: 0.7rem;
    border-radius: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .work-info {
    padding: 0.5rem 0;
  }
  
  .work-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .work-info h3 {
    margin: 0;
    color: var(--text-color, #FFFFFF);
    text-transform: lowercase;
  }
  
  .work-year {
    color: var(--text-color-secondary, rgba(255, 255, 255, 0.7));
    font-size: 0.8rem;
  }
  
  .work-info p {
    color: var(--text-color-secondary, rgba(255, 255, 255, 0.7));
    margin-bottom: 1rem;
  }
  
  .work-link {
    display: inline-block;
    position: relative;
    color: var(--text-color, #FFFFFF);
    font-size: 0.9rem;
    text-transform: lowercase;
  }
  
  .work-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--text-color, #FFFFFF);
    transition: width 0.3s ease;
  }
  
  .work-link:hover::after {
    width: 100%;
  }
</style>