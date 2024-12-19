$(document).ready(function () {
    
    /**
    * Smooth Scroll Js
    */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    //humberger Menu
    $('.hamburger').click(function () {
        $(this).toggleClass('active');
        
        if ($(this).hasClass('active')) {
            $('.js-nav').fadeIn();
            $('.header .navbar a').click(function () {
                $('.js-nav').fadeOut();
                $('.hamburger').removeClass('active');
            });
        } else {
            $('.js-nav').fadeOut();
        }
    });
    
    $(window).on("scroll load", function () {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
    
        $(".js-animation").each(function () {
            var offsetTop = $(this).offset().top;
    
            if (scrollTop >= offsetTop - windowHeight + 200) {
                $(this).addClass("active");
            }
        });
    });
});