var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  }
};

if (isMobile.any()) {
  document.body.classList.add('touch');
  // let menuArrows = document.querySelectorAll('.icon-arrow');
  // if (menuArrows.length > 0) {
  //   for (let i = 0; i < menuArrows.length; i++) {
  //     const arrow = menuArrows[i];
  //     arrow.addEventListener('click', (e) => {
  //       arrow.parentElement.classList.toggle('active');
  //     })
  //   }
  // }
} else {
  document.body.classList.add('pc');
}
