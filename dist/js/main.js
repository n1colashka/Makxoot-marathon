$(function () {
    const headerSwiper = new Swiper('.header-slider__container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    $('.owl-carousel').owlCarousel({
        margin: 100,
        loop: true,
        autoplay: true,
        // responsiveClass: true,
        dots: false,
        // responsive: {
        //     0: {
        //         items: 1,
        //         nav: true
        //     },
        //     600: {
        //         items: 3,
        //         nav: false
        //     },
        //     1000: {
        //         items: 5,
        //         nav: true,
        //         loop: false
        //     }
        // }

    });

    const reviewsSwiper = new Swiper('.reviews__slider-wrapper', {
        slidesPerView: 'auto',
        // centeredSlides: true,
        spaceBetween: 100,
        loop: true,
        navigation: {
            nextEl: '.reviews__slider-button-next',
            prevEl: '.reviews__slider-button-prev',
        }
    });

    // Toggler

    $('.plan__toggler-btn').on('click', function(evt) {
        $('.plan__toggler-btn').toggleClass('plan__toggler-btn--active');
        $('.plan__items-wrapper').slideToggle();
    });
});