$(function () {

    // Header aside

    $('.header__btn').on('click', function () {
        $('.menu').toggleClass('menu--active');
    });

    $('.menu__close').on('click', function () {
        $('.menu').removeClass('menu--active');
    });

    const headerSwiper = new Swiper('.header-slider__container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        // responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 15,
            },
            600: {
                items: 2,
                margin: 30,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
                margin: 50,
            },
            1920: {
                items: 3,
                margin: 100,
            }
        }

    });

    const reviewsSwiper = new Swiper('.reviews__slider-wrapper', {
        slidesPerView: 2,
        spaceBetween: 100,
        loop: true,
        navigation: {
            nextEl: '.reviews__slider-button-next',
            prevEl: '.reviews__slider-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,

            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50,
            },

        }
    });

    // Toggler

    $('.plan__toggler-btn').on('click', function (evt) {
        $('.plan__toggler-btn').toggleClass('plan__toggler-btn--active');
        $('.plan__items-wrapper').slideToggle();
    });

});