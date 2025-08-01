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