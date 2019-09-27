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
