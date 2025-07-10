let current = 0;
const slides = document.querySelectorAll(".slider img");

function showNextSlide() {
  slides[current].style.display = "none";
  current = (current + 1) % slides.length;
  slides[current].style.display = "block";
}

setInterval(showNextSlide, 3000);
