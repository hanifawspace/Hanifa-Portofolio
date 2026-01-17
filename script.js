console.log("Portfolio loaded successfully");

// smooth scroll navbar
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// skill animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "0.5s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});

// ===== HERO SLIDER =====
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
const hero = document.querySelector('.hero');

let current = 0;
let slideInterval;

// pindah slide
function goSlide(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');

  current = index;

  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

// auto slide
function autoSlide() {
  let next = current + 1;
  if (next >= slides.length) next = 0;
  goSlide(next);
}

// start auto slide
slideInterval = setInterval(autoSlide, 2000);

// pause saat hover
hero.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

// lanjut saat mouse keluar
hero.addEventListener('mouseleave', () => {
  slideInterval = setInterval(autoSlide, 2000);
});
