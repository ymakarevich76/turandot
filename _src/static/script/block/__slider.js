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
      slidesPerView: 1.9,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    }
  }
});

let swiperImg = new Swiper('.product__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  autoheight: true,
});

let swiperThumb = new Swiper('.product__thumb-slider', {
  slidesPerView: 3,
  autoheight: true,
  spaceBetween: 10,
});


swiperImg.controller.control = swiperThumb;
swiperThumb.controller.control = swiperImg;
