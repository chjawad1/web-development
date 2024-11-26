let carouselElement = document.querySelector('#carouselExampleSlidesOnly');
let carousel = new bootstrap.Carousel(carouselElement, {
  interval: 2000,
  ride: 'carousel'
});

document.getElementById('playButton').addEventListener('click', () => {
  carousel.cycle(); // Start slider
});

document.getElementById('pauseButton').addEventListener('click', () => {
  carousel.pause(); // Stop slider
});
