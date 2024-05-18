document.addEventListener("DOMContentLoaded", function () {
  //Homepage Slideshow
  var slides = document.querySelectorAll(".slide");
  var currentIndex = 0;
  console.log(slides);

  function updateSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  setInterval(updateSlide, 3000); // Change slide every 3 seconds
});
