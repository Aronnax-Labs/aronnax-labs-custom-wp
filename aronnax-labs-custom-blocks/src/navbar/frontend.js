document.addEventListener('DOMContentLoaded', () => {
  const navbars = document.querySelectorAll('[data-navbar]');
  
  navbars.forEach(navbar => {
    const toggle = navbar.querySelector('[data-navbar-toggle]');
    const menu = navbar.querySelector('[data-navbar-menu]');
    
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
      });
    }
  });
});
