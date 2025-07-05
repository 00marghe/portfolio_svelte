<script>
  import { onMount } from 'svelte';
  import Menu from './Menu.svelte';
  
  export let currentPath = '/';
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<!-- Header with menu button and logo -->
<header>
  <div class="container header-container">
    <a href="/" class="site-title">
      <img src="/logo_short_light.png" alt="meg logo" class="site-logo">
    </a>
    <div class="header-controls">
      <a href="/contact" class="chat-button">let's chat</a>
      <button class="menu-button" on:click={toggleMenu}>menu</button>
    </div>
  </div>
</header>

<!-- Menu component with props -->
<Menu bind:isOpen={isMenuOpen} {currentPath} on:closeMenu={closeMenu} />

<style>
  /* Header styling */
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 1.5rem 0;
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .site-title {
    font-size: 1.5rem;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  
  .site-logo {
    height: 1.5rem;
  }
  
  .header-controls {
    display: flex;
    gap: 1rem;
  }
  
  .chat-button, .menu-button {
    background: transparent;
    border: 1px solid var(--text-color, #FFFFFF);
    color: var(--text-color, #FFFFFF);
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
  }
  
  .chat-button:hover, .menu-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  /* Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .header-controls {
      gap: 0.5rem;
    }
    
    .chat-button, .menu-button {
      padding: 0.4rem 0.8rem;
      font-size: 0.7rem;
    }
  }
</style>