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
