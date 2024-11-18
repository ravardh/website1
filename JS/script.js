let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector('.sliding-container').style.transform = `translateX(-${currentSlide * 100}vw)`;
}

// Start the automatic sliding
setInterval(changeSlide, 5000);

document.getElementsByTagName
