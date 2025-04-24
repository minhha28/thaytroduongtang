const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let index = 0;

function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
}
function updateCountdown() {
  const endDate = new Date("2025-04-30T23:59:59").getTime();
  const now = new Date().getTime();
  const diff = endDate - now;

  if (diff <= 0) {
    document.querySelector(".countdown-box").innerHTML = "<strong>Ưu đãi đã kết thúc!</strong>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
}

updateCountdown();
setInterval(updateCountdown, 60000);