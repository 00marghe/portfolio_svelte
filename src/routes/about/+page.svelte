<script>
    // Sample skills data
    const skills = [
      { category: 'Design', items: ['UI/UX Design', 'Brand Identity', 'Typography', 'Motion Design'] },
      { category: 'Development', items: ['HTML/CSS', 'JavaScript', 'Svelte', 'React'] },
      { category: 'Tools', items: ['Figma', 'Adobe CC', 'Blender', 'VS Code'] }
    ];
  </script>
  
  <svelte:head>
    <title>About | meg iannilli</title>
    <meta name="description" content="About meg iannilli - designer and developer crafting digital experiences." />
  </svelte:head>
  
  <section class="about-page py-lg">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">03 about</h1>
      </div>
      
      <div class="about-content">
        <!-- Bio section -->
        <div class="bio-section">
          <div class="bio-image">
            <img src="/images/img04.png" alt="meg iannilli" />
          </div>
          
          <div class="bio-text">
            <h2>Hello, I'm Meg</h2>
            <p>I'm a designer and developer focused on creating minimal, thoughtful digital experiences that blend creativity with functionality.</p>
            <p>With a background in both design and technology, I approach each project with a holistic perspective, ensuring that aesthetics and usability work together seamlessly.</p>
            <p>Based in New York, I work with clients globally to bring their digital visions to life.</p>
            
            <div class="contact-links">
              <a href="mailto:info@example.com" class="contact-link">info@example.com</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="contact-link">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="contact-link">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <!-- Skills section -->
        <div class="skills-section">
          <h2>Skills & Expertise</h2>
          
          <div class="skills-grid">
            {#each skills as skillSet}
              <div class="skill-category">
                <h3>{skillSet.category}</h3>
                <ul class="skill-list">
                  {#each skillSet.items as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Experience section -->
        <div class="experience-section">
          <h2>Experience</h2>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-year">2023-Present</div>
              <div class="timeline-content">
                <h3>Creative Director</h3>
                <p>Studio Name, New York</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-year">2020-2023</div>
              <div class="timeline-content">
                <h3>Senior Designer</h3>
                <p>Agency Name, Brooklyn</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-year">2018-2020</div>
              <div class="timeline-content">
                <h3>UI/UX Designer</h3>
                <p>Tech Company, San Francisco</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA section -->
      <div class="cta-section">
        <h2>Let's work together</h2>
        <a href="/contact" class="btn">Get in touch</a>
      </div>
    </div>
  </section>
  
  <style>
    .about-page {
      padding-top: 8rem;
    }
    
    .section-title {
      font-size: 3rem;
      font-weight: 400;
      color: var(--text-color);
      margin-bottom: 2rem;
      text-transform: lowercase;
    }
    
    .about-content {
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }
    
    /* Bio section */
    .bio-section {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      align-items: start;
    }
    
    .bio-image {
      width: 100%;
    }
    
    .bio-image img {
      width: 100%;
      height: auto;
      display: block;
      filter: grayscale(100%);
    }
    
    .bio-text h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-weight: 400;
    }
    
    .bio-text p {
      margin-bottom: 1.5rem;
      color: var(--text-color-secondary);
      max-width: 600px;
    }
    
    .contact-links {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .contact-link {
      position: relative;
      color: var(--text-color);
    }
    
    .contact-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--text-color);
      transition: width 0.3s ease;
    }
    
    .contact-link:hover::after {
      width: 100%;
    }
    
    /* Skills section */
    .skills-section h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      font-weight: 400;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .skill-category h3 {
      margin-bottom: 1rem;
      font-weight: 400;
      color: var(--text-color-secondary);
    }
    
    .skill-list {
      list-style: none;
    }
    
    .skill-list li {
      margin-bottom: 0.5rem;
      position: relative;
    }
    
    /* Experience section */
    .experience-section h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      font-weight: 400;
    }
    
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .timeline-item {
      display: grid;
      grid-template-columns: 150px 1fr;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 2rem;
    }
    
    .timeline-year {
      color: var(--text-color-secondary);
    }
    
    .timeline-content h3 {
      margin-bottom: 0.5rem;
      font-weight: 400;
    }
    
    .timeline-content p {
      color: var(--text-color-secondary);
    }
    
    /* CTA section */
    .cta-section {
      margin-top: 5rem;
      text-align: center;
    }
    
    .cta-section h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      font-weight: 400;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .section-title {
        font-size: 2.5rem;
      }
      
      .bio-section {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .bio-image {
        max-width: 300px;
      }
      
      .contact-links {
        flex-direction: column;
        gap: 1rem;
      }
      
      .timeline-item {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
      
      .cta-section h2 {
        font-size: 2rem;
      }
    }
  </style>