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
  slidesPerView: 1,
  
  autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  breakpoints: {
        564:{
          slidesPerView:1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
});
