// 1. Mobile Menu Toggle Logic
const navToggle = document.querySelector('.menu-toggle');
const primaryNav = document.getElementById('primary-navigation');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});


// 2. Featured Carousel Logic
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let currentSlide = 0;

function showSlide(index) {
    // 1. Hide all slides
    slides.forEach(slide => {
        slide.classList.add('hidden');
    });

    // 2. Wrap around logic for next/prev buttons
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // 3. Show the current slide
    slides[currentSlide].classList.remove('hidden');
}

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Initialize the carousel to show the first slide
showSlide(currentSlide);