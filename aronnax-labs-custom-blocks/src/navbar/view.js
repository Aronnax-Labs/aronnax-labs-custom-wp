document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-hamburger').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('open');
      button.nextElementSibling.classList.toggle('open');
    });
  });
});
