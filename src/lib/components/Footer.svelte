<script>
    // Get current year for copyright
    const currentYear = new Date().getFullYear();
  </script>
  
  <footer class="py-md">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <p>© {currentYear} meg</p>
        </div>
        <div class="footer-links">
          <a href="mailto:info@example.com">email</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
      </div>
    </div>
  </footer>
  
  <style>
    footer {
      margin-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-color-secondary, rgba(255, 255, 255, 0.7));
      padding: 1rem 0;
    }
    
    .footer-links {
      display: flex;
      gap: 2rem;
    }
    
    .footer-links a {
      color: var(--text-color-secondary, rgba(255, 255, 255, 0.7));
      text-decoration: none;
      transition: color 0.2s ease;
      text-transform: lowercase;
    }
    
    .footer-links a:hover {
      color: var(--text-color, #FFFFFF);
    }
    
    /* Container */
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    /* Spacing */
    .py-md {
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
      
      .footer-links {
        gap: 1.5rem;
      }
    }
  </style>