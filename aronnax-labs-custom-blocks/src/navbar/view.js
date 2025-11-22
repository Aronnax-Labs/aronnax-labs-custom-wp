import { createRoot } from '@wordpress/element';
import { Sling } from 'hamburger-react';

document.addEventListener('DOMContentLoaded', () => {
  const navbars = document.querySelectorAll('[data-navbar]');
  
  navbars.forEach(navbar => {
    const toggleContainer = navbar.querySelector('[data-navbar-toggle]');
    const menu = navbar.querySelector('[data-navbar-menu]');
    
    if (toggleContainer && menu) {
      let isOpen = false;
      
      const root = createRoot(toggleContainer);
      root.render(
        <Sling 
          toggled={isOpen} 
          toggle={(toggled) => {
            isOpen = toggled;
            menu.classList.toggle('active', toggled);
          }} 
          size={24} 
          duration={0.3} 
        />
      );
    }
  });
});
