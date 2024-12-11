// script.js
let currentIndex = 0;

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    showSlide(currentIndex);
}

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.style.display = "none";
    });

    // Show the current slide
    slides[index].style.display = "block";
}

// Initial slide setup
showSlide(currentIndex);

// Automatic slide change (every 3 seconds)
setInterval(() => {
    moveSlide(1); // Move to the next slide
}, 3000);
