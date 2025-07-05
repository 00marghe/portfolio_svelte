<style>
    .contact-page {
      padding-top: 8rem;
    }
    
    .section-title {
      font-size: 3rem;
      font-weight: 400;
      color: var(--text-color);
      margin-bottom: 2rem;
      text-transform: lowercase;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-top: 2rem;
    }
    
    /* Contact intro */
    .contact-intro h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-weight: 400;
    }
    
    .contact-intro p {
      margin-bottom: 2rem;
      color: var(--text-color-secondary);
      max-width: 500px;
    }
    
    .contact-details {
      margin-top: 3rem;
    }
    
    .contact-item {
      margin-bottom: 2rem;
    }
    
    .contact-item h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: 400;
      color: var(--text-color-secondary);
    }
    
    .contact-item a {
      display: inline-block;
      position: relative;
      margin-bottom: 0.5rem;
    }
    
    .contact-item a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--text-color);
      transition: width 0.3s ease;
    }
    
    .contact-item a:hover::after {
      width: 100%;
    }
    
    .social-links {
      display: flex;
      gap: 1.5rem;
    }
    
    /* Contact form */
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .form-group label {
      font-size: 0.9rem;
      color: var(--text-color-secondary);
    }
    
    .form-group input,
    .form-group textarea {
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-color);
      padding: 0.75rem 1rem;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
      width: 100%;
      border-radius: 0;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.3);
    }
    
    .form-group input.error,
    .form-group textarea.error {
      border-color: #ff3860;
    }
    
    .error-message {
      color: #ff3860;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    .submit-btn {
      align-self: flex-start;
      margin-top: 1rem;
    }
    
    /* Form success message */
    .form-success {
      background-color: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 0;
      text-align: center;
    }
    
    .form-success h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 400;
    }
    
    .form-success p {
      margin-bottom: 2rem;
      color: var(--text-color-secondary);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .section-title {
        font-size: 2.5rem;
      }
      
      .contact-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }
  </style>
  <script>
    import { onMount } from 'svelte';
    
    let name = '';
    let email = '';
    let message = '';
    let formSubmitted = false;
    let formError = false;
    
    // Contact form submission
    async function handleSubmit(event) {
      event.preventDefault();
      
      // Form validation
      if (!name || !email || !message) {
        formError = true;
        return;
      }
      
      // In a real app, you would send the form data to a server
      // This is just a simulation for demonstration purposes
      
      // Simulated API call with timeout
      try {
        // This would be replaced with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        formSubmitted = true;
        formError = false;
        
        // Reset form fields
        name = '';
        email = '';
        message = '';
      } catch (error) {
        formError = true;
      }
    }
  </script>
  
  <svelte:head>
    <title>Contact | meg iannilli</title>
    <meta name="description" content="Get in touch with meg iannilli for collaborations and inquiries." />
  </svelte:head>
  
  <section class="contact-page py-lg">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">04 contact</h1>
      </div>
      
      <div class="contact-content">
        <!-- Contact intro -->
        <div class="contact-intro">
          <h2>Let's collaborate</h2>
          <p>I'm available for freelance projects, collaborations, and open to discuss new opportunities. Feel free to reach out with any questions or inquiries.</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <h3>Email</h3>
              <a href="mailto:info@example.com">info@example.com</a>
            </div>
            
            <div class="contact-item">
              <h3>Social</h3>
              <div class="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            
            <div class="contact-item">
              <h3>Location</h3>
              <p>New York, NY</p>
            </div>
          </div>
        </div>
        
        <!-- Contact form -->
        <div class="contact-form-wrapper">
          {#if formSubmitted}
            <div class="form-success">
              <h3>Message sent!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button class="btn" on:click={() => formSubmitted = false}>Send another message</button>
            </div>
          {:else}
            <form class="contact-form" on:submit={handleSubmit}>
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  bind:value={name} 
                  required
                  class:error={formError && !name}
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  bind:value={email} 
                  required
                  class:error={formError && !email}
                />
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  bind:value={message} 
                  required
                  class:error={formError && !message}
                ></textarea>
              </div>
              
              {#if formError}
                <div class="error-message">Please fill out all fields.</div>
              {/if}
              
              <button type="submit" class="btn submit-btn">Send Message</button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </section>