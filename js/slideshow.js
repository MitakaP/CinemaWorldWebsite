const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slideshow-prev');
const nextBtn = document.querySelector('.slideshow-next');

let currentSlide = 0;
let slideInterval;

// Show only the slide with class 'active'
function showSlide(index) {
    slides.forEach((slide, i) => {
    slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

// Next / Prev logic
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-cycle every 5 seconds
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); 
}

// Stop auto-cycling (if you want to reset on user interaction)
function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
    });
    nextBtn.addEventListener('click', () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
    });
}

// Initial
showSlide(currentSlide);
startSlideShow();