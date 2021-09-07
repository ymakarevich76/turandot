if(document.querySelector('.footer__btn')) {
  const footerBtns = document.querySelectorAll('.footer__btn');
  footerBtns.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {
      evt.currentTarget.classList.toggle('footer__btn--active');
    })
  });
}
