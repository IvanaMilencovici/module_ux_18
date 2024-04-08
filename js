document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = 1;
      element.style.transition = 'opacity 1s ease-in-out'; // Add transition effect
    }, index * 200); // Add delay for staggered animation
  });
});
const toggleBtn = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});