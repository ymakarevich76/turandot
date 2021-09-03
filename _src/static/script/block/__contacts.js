const iconArrow = document.querySelector('.header__arrow');
if (iconArrow) {
  const modal = document.querySelector('.modal');
  iconArrow.addEventListener('click', (e) => {
    document.body.classList.toggle('lock');
    iconArrow.classList.toggle('active');
    modal.classList.toggle('active');
  })
}
