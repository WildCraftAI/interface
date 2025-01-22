$(function () {

    "use strict";

    //======MENU FIX JS=======   ¸ü¶àÏÂÔØ£ºHttp://www.bootstrapmb.com
    var navoff = $('.main_menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });


    //=======BANNER SLIDER======
    $('.banner_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            }
        ]
    });


    //*=====REVIEW 2  SLIDER===== 
    $('.review_2_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fal fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="fal fa-arrow-left prevArrow"></i>',
    });

    //*=====venobox js===== 
    $('.venobox').venobox({});



    //=======SMALL DEVICE MENU ICON======
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });



    //======SCROLL BUTTON=======
    $('.scroll_btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 300);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 1000) {
            $('.scroll_btn').fadeIn();
        } else {
            $('.scroll_btn').fadeOut();
        }
    });


    //======wow js=======
    new WOW().init();



    //======marquee js=======
    $('.marquee_animi').marquee({
        speed: 100,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });



});



















