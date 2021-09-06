const swiper = new Swiper('.directory__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 5,
  autoheight: true,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    }
  }
});
