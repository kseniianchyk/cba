$(document).ready(() => {

    $('.portfolio__sliders-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        adaptiveHeight: true,
        appendArrows: (".portfolio__arrows-content"),
        appendDots: (".portfolio__arrows-content"),
        asNavFor: '.portfolio__sliders-nav',
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        }]
    });

    $('.portfolio__sliders-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.portfolio__sliders-for',
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                vertical: false,
            }
        }]
    });

    $('.reviews__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        dots: true,
        appendArrows: (".reviews__slider-arrows"),
        appendDots: (".reviews__slider-arrows"),
        cssEase: 'linear'
    });

    $('.burger').click(() => {
        $('.header__bottom').toggleClass('menu-open');
    });

    $('.header__menu-link').click(() => {
        $('.header__bottom').removeClass('menu-open');
    });

    $('.header__btn').click(() => {
        $('.header__bottom').removeClass('menu-open');
    });

    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });





});