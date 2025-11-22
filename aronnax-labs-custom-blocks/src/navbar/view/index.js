import { createRoot } from '@wordpress/element';
import { useState } from 'react';
import HamburgerMenu from 'react-animated-burgers';

function NavbarToggle({ menu }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
    menu.classList.toggle('active', !isOpen);
  };
  
  return (
    <HamburgerMenu 
      isActive={isOpen}
      toggleButton={handleClick}
      barColor="#333"
      buttonWidth={24}
      type="squeeze"
    />
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const navbars = document.querySelectorAll('[data-navbar]');
  
  navbars.forEach(navbar => {
    const toggleContainer = navbar.querySelector('[data-navbar-toggle]');
    const menu = navbar.querySelector('[data-navbar-menu]');
    
    if (toggleContainer && menu) {
      const root = createRoot(toggleContainer);
      root.render(<NavbarToggle menu={menu} />);
    }
  });
});
