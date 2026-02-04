let current = 0;
const slides = document.querySelectorAll(".slide");
const audio = document.getElementById("voice");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("slideshow").classList.remove("hidden");

  audio.currentTime = 0;
  audio.volume = 1.0;

  audio.play().catch(() => {
    alert("Tap again to enable sound ❤️");
  });

  setInterval(nextSlide, 5000);
});

function nextSlide() {
  slides[current].classList.remove("show");
  current = (current + 1) % slides.length;
  slides[current].classList.add("show");
}
