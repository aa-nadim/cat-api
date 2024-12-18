document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;

    // List of cat image URLs (passed from the backend)
    const catImages = {{.Cats | json}};

    // Update the image on the page
    function updateImage() {
        const imageElement = document.getElementById('catImage');
        imageElement.src = catImages[currentIndex].URL;
    }

    // Handle the "Previous" button click
    document.getElementById('prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + catImages.length) % catImages.length;
        updateImage();
    });

    // Handle the "Next" button click
    document.getElementById('next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % catImages.length;
        updateImage();
    });

    // Initial image update
    updateImage();
});
