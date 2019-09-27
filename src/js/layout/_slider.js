const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__slide');

function setActive(index) {
  const dots = document.querySelectorAll('.slider__dot');

  for (let i = 0; i < slides.length; i++) {
    dots[i].classList.remove('slider__dot_active');
    slides[i].classList.remove('slider__slide_active');
  }

  dots[index].classList.add('slider__dot_active');
  slides[index].classList.add('slider__slide_active');
}

function toggleSlides(event) {
  const dot = event.target.closest('.slider__dot');
  if (!dot) return;

  const position = Array.from(document.querySelectorAll('.slider__dot')).indexOf(dot);
  setActive(position);
}

slider.addEventListener('click', toggleSlides);
