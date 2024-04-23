document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
  
    let currentIndex = 0;
    const maxIndex = carouselImages.children.length - 1;
  
    function showImage(index) {
      carouselImages.style.transform = `translateX(-${index * 300}px)`;
    }
  
    prevButton.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
      }
    });
  
    nextButton.addEventListener('click', function () {
      if (currentIndex < maxIndex) {
        currentIndex++;
        showImage(currentIndex);
      }
    });
  });
  