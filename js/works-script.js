// Arrow top

(function () {
    'use strict';

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -20); // -80
            setTimeout(backToTop, 0);
        }
    }

    let goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

// Arrow
$(function () {
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let scrollId = $(this).data("scroll");
        let elementOffset = $(scrollId).offset().top;

        $("html,body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });
})

// Fixed header

$(function(){
    let header = $("#header"),
        introH = $("#Intro").innerHeight();
        scrolloffsize = $(window).scrollTop();

        checkScroll(scrolloffsize,introH);

        $(window).on("scroll resize", function(){
            introH = $("#Intro").innerHeight();
            scrolloffsize = $(this).scrollTop();

            checkScroll(scrolloffsize,introH);
        });

        function checkScroll(scrolloffsize,introH){
            if(scrolloffsize > introH){
                header.addClass("fixed");
            }

            else{
                header.removeClass("fixed");
            }
        };
})