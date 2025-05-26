window.addEventListener('load', () => {
    const track = document.querySelector('.screenshots__track');
    const slides = track.querySelectorAll('img');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.querySelector('.slider-btn--next');
    const prevBtn = document.querySelector('.slider-btn--prev');

    let currentIndex = 0;
    let slideWidth = slides[0].offsetWidth;

    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth;
        goToSlide(currentIndex);
    });

    function goToSlide(index) {
        const totalSlides = slides.length;

        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        track.scrollTo({
            left: slideWidth * currentIndex,
            behavior: 'smooth'
        });

        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    track.addEventListener('scroll', () => {
        const index = Math.round(track.scrollLeft / slideWidth);
        if (index !== currentIndex) {
            currentIndex = index;
            updateDots();
        }
    });

    goToSlide(0);
});

// js/index.js
const burgerBtn = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
const closeNavBtn = document.getElementById('closeNavBtn');
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownList = document.getElementById('dropdownList');
const dropdownArrow = document.getElementById('dropdownArrow');

burgerBtn.onclick = () => mobileNav.classList.add('open');
closeNavBtn.onclick = () => mobileNav.classList.remove('open');

dropdownBtn.onclick = function() {
    dropdownList.classList.toggle('open');
    dropdownBtn.classList.toggle('open');
};