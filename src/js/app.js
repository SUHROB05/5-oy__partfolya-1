const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth;
let currentIndex = 0;

// Clone elements for infinite scrolling
function cloneItems() {
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });
}
cloneItems();

// Scroll function
function scrollCarousel(direction) {
  if (direction === 'next') {
    currentIndex++;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    if (currentIndex >= items.length) {
      setTimeout(() => {
        carousel.style.transition = 'none';
        currentIndex = 0;
        carousel.style.transform = `translateX(0px)`;
      }, 500);
    }
  } else if (direction === 'prev') {
    if (currentIndex <= 0) {
      carousel.style.transition = 'none';
      currentIndex = items.length;
      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    setTimeout(() => {
      currentIndex--;
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }, 0);
  }
}
