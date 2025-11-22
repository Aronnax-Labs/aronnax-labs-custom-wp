document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.2s ease-in';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 10);

  document.querySelectorAll('.simple-navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.target === '_blank') return;
      
      const href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('#')) {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => {
          window.location.href = href;
        }, 200);
      }
    });
  });
});
