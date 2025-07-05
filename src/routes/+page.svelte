<script>
	import { works } from '$lib/data/works';
	import ImageCollage from '$lib/components/ImageCollage.svelte';
	import WorkItem from '$lib/components/WorkItem.svelte';
	import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';
  </script>
  
  <svelte:head>
	<title>meg iannilli | creative portfolio</title>
	<meta name="description" content="Digital experience designer crafting engaging experiences blending creativity with human knowledge." />
  </svelte:head>
  
  <!-- Hero Section -->
  <section class="hero">
	<!-- Image collage -->
	<ImageCollage />
  
	<!-- Central hero content -->
	<div class="container">
	  <div class="hero-content">
		<div class="hero-greeting">hi there, it's</div>
		
		<div class="hero-name-row">
		  <h1 class="hero-title">meg iannilli</h1>
		  <div class="hero-year">est 2025</div>
		</div>
		
		<div class="hero-tagline">
		  <p>crafting digital experience that blend creativity with human knowledge crafting digital experience that blend creativity with human knowledge</p>
		</div>
	  </div>
	</div>
	
	<!-- Vertical scroll indicator -->
	<ScrollIndicator position="vertical" />
  </section>
  
  <!-- Featured Works -->
  <section class="works py-lg">
	<div class="container">
	  <div class="section-header">
		<h2>selected works</h2>
	  </div>
	  
	  <div class="works-grid">
		{#each works as work}
		  <WorkItem {work} />
		{/each}
	  </div>
	  
	  <div class="view-all">
		<a href="/works" class="btn">view all projects</a>
	  </div>
	</div>
  </section>
  
  <style>
	/* Hero section */
	.hero {
	  height: 100vh;
	  width: 100%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  position: relative;
	  overflow: hidden;
	}
	
	.hero-content {
	  text-align: center;
	  position: relative;
	  z-index: 10;
	  max-width: 800px;
	  margin: 0 auto;
	}
	
	.hero-greeting {
	  color: var(--text-color-secondary, rgba(255, 255, 255, 0.7));
	  font-size: 1.2rem;
	  margin-bottom: 1rem;
	}
	
	.hero-name-row {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  margin-bottom: 2rem;
	}
	
	.hero-title {
	  font-family: "Helvetica Neue", sans-serif;
	  font-size: 5rem;
	  font-weight: 400;
	  margin: 0;
	  color: var(--text-color, #FFFFFF);
	}
	
	.hero-year {
	  color: var(--text-color-secondary, rgba(255, 255, 255, 0.7));
	  font-size: 1rem;
	}
	
	.hero-tagline {
	  color: var(--text-color-secondary, rgba(255, 255, 255, 0.7));
	  max-width: 600px;
	  margin: 0 auto;
	}
	
	.hero-tagline p {
	  font-size: 1rem;
	  line-height: 1.6;
	}
	
	/* Works section */
	.works h2 {
	  color: var(--text-color, #FFFFFF);
	  font-size: 2.5rem;
	  text-transform: lowercase;
	  letter-spacing: -0.03em;
	}
	
	.section-header {
	  display: flex;
	  align-items: center;
	  gap: 2rem;
	  margin-bottom: 3rem;
	}
	
	.works-grid {
	  display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	  gap: 3rem;
	}
	
	.view-all {
	  margin-top: 4rem;
	  text-align: center;
	}
	
	/* Container */
	.container {
	  width: 100%;
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 0 2rem;
	}
	
	/* Spacing classes */
	.py-lg {
	  padding-top: 5rem;
	  padding-bottom: 5rem;
	}
	
	/* Responsive styling */
	@media (max-width: 768px) {
	  .hero-title {
		font-size: 3rem;
	  }
	  
	  .hero-name-row {
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	  }
	  
	  .section-header {
		flex-direction: column;
		gap: 1rem;
		align-items: flex-start;
	  }
	  
	  .works-grid {
		grid-template-columns: 1fr;
		gap: 2rem;
	  }
	}
  </style>