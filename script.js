document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const images = slider.getElementsByTagName('img');
    const imageWidth = images[0].clientWidth;
    let currentIndex = 0;

    function carousel() {
        currentIndex = (currentIndex + 1) % images.length;
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        }
    }
    setInterval(carousel, 1000);
});