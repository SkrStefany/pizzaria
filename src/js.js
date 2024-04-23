document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    nextBtn.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= carousel.children.length) {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carousel.children.length - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * carousel.clientWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var carouselImgs = document.querySelectorAll('.carousel-img');
    
    carouselImgs.forEach(function(img) {
        img.addEventListener("mouseover", function() {
            var name = this.getAttribute('data-name');
            var span = document.createElement('span');
            span.className = 'img-name';
            span.textContent = name;
            this.parentNode.insertBefore(span, this.nextSibling);
        });

        img.addEventListener("mouseout", function() {
            var imgNames = document.querySelectorAll('.img-name');
            imgNames.forEach(function(span) {
                span.parentNode.removeChild(span);
            });
        });
    });
});