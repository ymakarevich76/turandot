const hamburger = document.querySelector('.header__icon-menu');
const nav = document.querySelector('.header__nav');
const btnClose = document.querySelector('.icon__menu--close');
const body = document.querySelector('body');

const openMenu = () => {
  body.classList.add('fixed');
  nav.classList.add('header__nav--active');
};

const closeMenu = () => {
  body.classList.remove('fixed');
  nav.classList.remove('header__nav--active');
}

hamburger.addEventListener('click', () => {
  openMenu();
  console.log(111)
});

btnClose.addEventListener('click', () => {
  closeMenu();
});

nav.addEventListener('click', (evt) => {
  if (evt.target === nav) {
    closeMenu();
  }
});
