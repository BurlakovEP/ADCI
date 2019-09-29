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
