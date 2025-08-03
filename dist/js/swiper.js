const swiper = new Swiper('.aboutUsSwiper', {
    direction: 'vertical',
    loop: true,
    effect: 'fade',
    speed: 6000,
    grabCursor: true, // corrected: 'grabbingCursor' → 'grabCursor'
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    fadeEffect: {
        crossFade: true, // smooth fade transition
    },
});

const Heroswiper = new Swiper('.heroSwiper', {
    loop: true,
    // effect: 'fade',
    grabCursor: true, // corrected: 'grabbingCursor' → 'grabCursor'
    // autoplay: {
    //     delay: 4000,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    fadeEffect: {
        crossFade: true, // smooth fade transition
    },
});

const category = new Swiper('.categorySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
