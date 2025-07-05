<script>
import WorkItem from '$lib/components/WorkItem.svelte';


    // These would ideally come from a database or API
    const works = [
      {
        id: 1,
        title: "Project One",
        slug: "project-one",
        description: "A minimal interface design for a digital experience.",
        image: "/src/lib/images/logo_short_black.png",
        tags: ["UI/UX", "Branding"]
      },
      {
        id: 2,
        title: "Project Two",
        slug: "project-two",
        description: "Interactive installation with visual components.",
        image: "/src/lib/images/logo_short_light.png",
        tags: ["Live Visuals", "Interactive"]
      },
      {
        id: 3,
        title: "Project Three",
        slug: "project-three",
        description: "Brand identity system for a tech startup.",
        image: "/src/lib/images/svelte-welcome.png",
        tags: ["Branding", "Typography"]
      }
    ];
  </script>
  
  <svelte:head>
    <title>Works | Portfolio</title>
  </svelte:head>
  
  <main>
    <section class="works py-lg">
      <div class="container">
        <h1>My Works</h1>
        <p class="section-desc">A collection of selected projects showcasing my approach to design and development.</p>
        
        <div class="works-grid">
          {#each works as work}
            <WorkItem {work} />
          {/each}
        </div>
      </div>
    </section>
  </main>
  
  <style>
    .works {
      padding-top: 10rem;
    }
    
    h1 {
      margin-bottom: 1rem;
    }
    
    .section-desc {
      max-width: 600px;
      margin-bottom: 4rem;
    }
    
    .works-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 3rem;
    }
  </style>