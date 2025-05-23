const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.card, .testimonial');

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      el.style.opacity = 1;
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
