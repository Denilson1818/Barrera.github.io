document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    }

    function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    }

    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // Optional: Auto-play
    setInterval(showNext, 5000);
});