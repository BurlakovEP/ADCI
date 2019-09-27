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
