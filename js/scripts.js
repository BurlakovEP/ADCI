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
  function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
  
    if (navbar.classList.contains('navbar_invisible')) {
      navbar.classList.remove('navbar_invisible');
      navbar.classList.add('navbar_visible');
    } else {
      navbar.classList.remove('navbar_visible');
      navbar.classList.add('navbar_invisible');
    }
  }
  
  document.querySelector('.header__toggle').addEventListener('click', toggleNavbar);
  function moveBlock(event) {
    const dropupButton = event.target;
    const dropupContent = document.querySelector('.dropup__content');
    let height = '';
  
    if (dropupButton.classList.contains('dropup__button_open')) {
      dropupContent.style.height = 'auto';
      height = parseInt(getComputedStyle(dropupContent).height, 10);
      dropupContent.style.height = 0;
  
      moveSlide('up');
    } else {
      height = parseInt(getComputedStyle(dropupContent).height, 10);
  
      moveSlide('down');
    }
  
    function moveSlide(vector) {
      const start = Date.now();
      const timeout = 600;
      const timer = setInterval(() => {
        const duration = Date.now() - start;
        if (duration >= timeout) {
          clearInterval(timer);
          dropupContent.removeAttribute('style');
          return;
        }
        animate(duration);
      }, 20);
  
      function animate(duration) {
        if (vector === 'up') {
          dropupButton.className = 'dropup__button dropup__button_close';
          dropupContent.style.height = `${duration / (timeout / height)}px`;
          dropupContent.className = 'dropup__content dropup__content_visible';
        }
  
        if (vector === 'down') {
          dropupButton.className = 'dropup__button dropup__button_open';
          dropupContent.style.height = `${height - duration / (timeout / height)}px`;
          dropupContent.className = 'dropup__content dropup__content_invisible';
        }
      }
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