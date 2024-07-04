// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Projects slider
let slideIndex = 0; // Initialize slide index to 0 for automatic sliding
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slides every 4 seconds (4000ms)
}

// Optional: If you want to pause on hover
document.querySelector('.projects-slider').addEventListener('mouseenter', function() {
    clearTimeout(slideshowTimeout);
});

document.querySelector('.projects-slider').addEventListener('mouseleave', function() {
    showSlides();
});

// Initial call to start the slideshow
showSlides();

// Function for manual navigation through slides
function plusSlides(n) {
    clearTimeout(slideshowTimeout); // Clear timeout to prevent automatic sliding during manual navigation
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Automatic sliding
let slideshowTimeout = setTimeout(showSlides, 4000); // Start the slideshow automatically
