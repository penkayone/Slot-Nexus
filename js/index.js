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

// Burger open/close
const burgerBtn = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
const closeNavBtn = document.getElementById('closeNavBtn');

burgerBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
});

closeNavBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
});

// CASINOS dropdown logic
const casinosDropdownBtn = document.getElementById('casinosDropdownBtn');
const casinosDropdownMenu = document.getElementById('casinosDropdownMenu');
const casinosArrow = document.getElementById('casinosArrow');

casinosDropdownBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const isOpen = casinosDropdownMenu.classList.toggle('open');
    casinosDropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    casinosArrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    // При повторном нажатии – скрываем, и наоборот
});

// Клик по элементам dropdown – скрываем dropdown
casinosDropdownMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        casinosDropdownMenu.classList.remove('open');
        casinosDropdownBtn.setAttribute('aria-expanded', 'false');
        casinosArrow.style.transform = 'rotate(0deg)';
    });
});