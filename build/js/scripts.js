window.onload = () => {
  function setClass(event) {
    const { target } = event;
    const items = document.querySelectorAll(`.${target.classList[0]}`);
  
    items.forEach((item) => {
      item.classList.remove(`${target.classList[0]}_active`);
    });
    target.classList.add(`${target.classList[0]}_active`);
  }
  
  document.querySelector('.navbar__list').addEventListener('click', setClass);
  document.querySelector('.footer__language').addEventListener('click', setClass);
  function moveBlock(event) {
    const dropup = event.target;
    const dropupContent = document.querySelector('.dropup__content');
  
    if (dropup.classList.contains('dropup__button_open')) {
      dropup.classList.remove('dropup__button_open');
      dropup.classList.add('dropup__button_close');
  
      dropupContent.classList.remove('dropup__content_invisible');
      dropupContent.classList.add('dropup__content_visible');
    } else {
      dropup.classList.remove('dropup__button_close');
      dropup.classList.add('dropup__button_open');
  
      dropupContent.classList.remove('dropup__content_visible');
      dropupContent.classList.add('dropup__content_invisible');
    }
  }
  
  document.querySelector('.dropup__button').addEventListener('click', moveBlock);
  function changeState() {
    const popup = document.querySelector('.popup');
  
    if (popup.classList.contains('popup_invisible')) {
      popup.classList.remove('popup_invisible');
      popup.classList.add('popup_visible');
  
      document.addEventListener('click', (event) => {
        if (event.target === popup) {
          popup.classList.remove('popup_visible');
          popup.classList.add('popup_invisible');
        }
      });
    } else {
      popup.classList.remove('popup_visible');
      popup.classList.add('popup_invisible');
    }
  }
  
  document.querySelector('.header__reserved').addEventListener('click', changeState);
  document.querySelector('.popup__close').addEventListener('click', changeState);
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
};