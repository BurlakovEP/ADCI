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
