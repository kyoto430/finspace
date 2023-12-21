console.log('slider running...');

new Swiper('.staff__slider', {
  loop: false,
  pagination: {
    el: '.s__p--1',
    clickable: true,
  },
  navigation: {
    prevEl: '.slider__btn-prev--1',
    nextEl: '.slider__btn-next--1',
  },
  uniqueNavElements: false,
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1230: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  },
});

// --------------------------

new Swiper('.staff-clients__slider', {
  loop: false,
  pagination: {
    el: '.s__p--2',
    clickable: true,
  },
  navigation: {
    prevEl: '.slider__btn-prev--2',
    nextEl: '.slider__btn-next--2',
  },
  uniqueNavElements: false,
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 4,
    },
    1230: {
      slidesPerView: 2,
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
  loop: false,
  pagination: {
    el: '.s__p--3',
    clickable: true,
  },
  navigation: {
    prevEl: '.slider__btn-prev--3',
    nextEl: '.slider__btn-next--3',
  },
  uniqueNavElements: false,
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 4,
    },
    1230: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});
