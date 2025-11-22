document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-hamburger').forEach(button => {
    const menu = button.nextElementSibling;
    
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      button.classList.toggle('open');
      menu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!button.contains(e.target) && !menu.contains(e.target)) {
        button.classList.remove('open');
        menu.classList.remove('open');
      }
    });
  });
});
