const swiper = new Swiper('.aboutUsSwiper', {
    direction: 'vertical',
    loop: true,
    effect: 'fade',
    speed:6000,
    grabCursor: true, // corrected: 'grabbingCursor' → 'grabCursor'
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    fadeEffect: {
        crossFade: true, // smooth fade transition
    },
});