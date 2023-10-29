console.log('slider running...');

new Swiper('.staff__slider', {
  loop: false,
  navigation: {
    prevEl: '.slider__btn-prev--1',
    nextEl: '.slider__btn-next--1',
  },
  breakpoints: {
    1920: {
      slidesPerView: 6,
    },
    1280: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

// --------------------------

new Swiper('.staff-clients__slider', {
  loop: false,
  navigation: {
    prevEl: '.slider__btn-prev--2',
    nextEl: '.slider__btn-next--2',
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

// --------------------------------------------

new Swiper('.clients__slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.slider__btn-prev--3',
    nextEl: '.slider__btn-next--3',
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});
