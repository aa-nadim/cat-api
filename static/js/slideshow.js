// static/js/script.js
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.cat-card');
    const dotsContainer = document.getElementById('dots');
    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update the dots to show the active one
        updateDots(index);
    }

    // Function to create dots for each slide
    function createDots() {
        slides.forEach((slide, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', function() {
                currentIndex = index;
                showSlide(currentIndex);
            });
            dotsContainer.appendChild(dot);
        });
    }

    // Function to update the dots' active class
    function updateDots(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active-dot');
            } else {
                dot.classList.remove('active-dot');
            }
        });
    }

    // Event listeners for Previous and Next buttons
    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Auto slideshow (change slides every 3 seconds)
    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Create the dots and show the first slide
    createDots();
    showSlide(currentIndex);

    // Set interval for auto slideshow (3 seconds)
    setInterval(autoSlide, 3000);
});

