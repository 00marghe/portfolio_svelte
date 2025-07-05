<script>
    import { createEventDispatcher } from 'svelte';
    
    // Props
    export let isOpen = false;
    export let currentPath = '/';
    
    // Create dispatcher for events
    const dispatch = createEventDispatcher();
    
    // Navigation items
    const navItems = [
      { id: 1, number: '01', label: 'home', path: '/' },
      { id: 2, number: '02', label: 'works', path: '/works' },
      { id: 3, number: '03', label: 'about', path: '/about' },
      { id: 4, number: '04', label: 'contact', path: '/contact' }
    ];
    
    // Close menu and dispatch event
    function closeMenu() {
      isOpen = false;
      dispatch('closeMenu');
    }
  </script>
  
  <!-- Menu overlay -->
  <div class="menu-overlay" class:active={isOpen}>
    <div class="menu-header">
      <div class="container">
        <button class="close-button" on:click={closeMenu}>[close]</button>
      </div>
    </div>
    
    <div class="menu-content">
      <div class="container">
        <nav class="main-nav">
          {#each navItems as item}
            <div class="nav-item">
              <span class="nav-number">{item.number}</span>
              <a 
                href={item.path} 
                class="nav-link"
                class:active={currentPath === item.path}
                on:click={closeMenu}
              >
                {item.label}
              </a>
            </div>
          {/each}
        </nav>
      </div>
    </div>
  </div>
  
  <style>
    /* Menu overlay styling */
    .menu-overlay {
      position: fixed;
      top: 0;
      right: 0;
      width: 50%; 
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 200;
      display: flex;
      flex-direction: column;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease, transform 0.4s ease;
      transform: translateX(100%);
    }
    
    .menu-overlay.active {
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    }
    
    .menu-header {
      padding: 1.5rem 0;
    }
    
    .close-button {
      background: none;
      border: none;
      color: var(--text-color, #FFFFFF);
      font-size: 1.1rem;
      margin-left: auto;
      display: block;
      cursor: pointer;
    }
    
    .menu-content {
      flex: 1;
      display: flex;
      align-items: center;
    }
    
    .main-nav {
      margin-bottom: 4rem;
      width: 100%;
    }
    
    .nav-item {
      margin-bottom: 0;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding: 1rem 0;
      display: flex;
      align-items: center;
    }
    
    .nav-number {
      font-size: 1rem;
      color: var(--text-color-secondary, rgba(255, 255, 255, 0.7));
      margin-right: 1rem;
      opacity: 0.7;
    }
    
    .nav-link {
      font-size: 2.5rem;
      color: var(--text-color, #FFFFFF);
      text-decoration: none;
      position: relative;
      transition: color 0.3s ease;
      display: inline-block;
      padding: 0.5rem 0;
    }
    
    /* Orange rectangle highlight on hover */
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 8px;
      background-color: var(--accent-color, #F76B0E);
      transition: width 0.3s ease;
      z-index: -1;
    }
    
    .nav-link:hover::after,
    .nav-link.active::after {
      width: 100%;
    }
    
    /* Container */
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    /* Responsive styling */
    @media (max-width: 768px) {
      .menu-overlay {
        width: 100%;
      }
      
      .nav-link {
        font-size: 2rem;
      }
    }
  </style>