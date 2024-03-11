(function($) {
    'use strict'; // Start of use strict
    $(window).on("load scroll", function() {
        /*------------------------------------------------------------------
        Loader
        ------------------------------------------------------------------*/
        $("#loader").fadeOut("fast");

        /*----------------------------------------------------
          Start Change Menu Bg
		 ----------------------------------------------------*/
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
    });
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");
    const bgOverlay = document.querySelector(".overlay");

    // Show Menu when Click the Burger
    // Hide Menu when Click the Overlay
    if (burgerMenu && navbarMenu && bgOverlay) {
        burgerMenu.addEventListener("click", () => {
            navbarMenu.classList.toggle("is-active");
            bgOverlay.classList.toggle("is-active");
        });

        bgOverlay.addEventListener("click", () => {
            navbarMenu.classList.toggle("is-active");
            bgOverlay.classList.toggle("is-active");
        });
    }

    // Hide Menu when Click the Links   
    document.querySelectorAll(".smoth-scroll").forEach((link) => {
        link.addEventListener("click", () => {
            navbarMenu.classList.remove("is-active");
            bgOverlay.classList.remove("is-active");
        });
    });

    // $(document).ready(function(){
    //     $('.toggle').click(function(){
    //         $('.sidebar-contact').toggleClass('active')
    //         $('.toggle').toggleClass('active')
    //     })
    // })

    const tabs = document.querySelectorAll('[data-role="tab"]'),
        tabContents = document.querySelectorAll(".tab-panel");
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach((tc) => {
                tc.classList.remove("is-active");
            });
            target.classList.add("is-active");

            tabs.forEach((t) => {
                t.classList.remove("is-active");
            });
            tab.classList.add("is-active");
        });
    });

    $(function() {
        //----- OPEN
        $('[data-popup-open]').on('click', function(e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

            e.preventDefault();
        });

        //----- CLOSE
        $('[data-popup-close]').on('click', function(e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

            e.preventDefault();
        });
    });

    /*------------------------------------------------------------------
     Scroll Top
     ------------------------------------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*------------------------------------------------------------------
    Navigation Hover effect
    ------------------------------------------------------------------*/
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.smoth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    // Highlight the top nav as scrolling occurs

    $(".banner-slider-owl").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 25,
        touchDrag: true,
        mouseDrag: true,
        items: 1,
        nav: false,
        dots: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // responsive: {
        //     0: {
        //         items: 2
        //     },
        //     480: {
        //         items: 2
        //     },
        //     600: {
        //         items: 2
        //     },
        //     1200: {
        //         items: 5
        //     },
        //     1500: {
        //         items: 6
        //     }
        // }
    });

    $(".our-amenities").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 12,
        touchDrag: true,
        mouseDrag: true,
        items: 1,
        nav: false,
        dots: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 2
            },
            600: {
                items: 2
            },
            1200: {
                items: 5
            },
            1500: {
                items: 6
            }
        }
    });
    $(".realated-project").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 5,
        touchDrag: true,
        mouseDrag: true,
        items: 1,
        nav: false,
        dots: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1200,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1200: {
                items: 3
            }
        },
    });

})(jQuery),


function(e) {
    e.fn.loadScroll = function(t) {
        var n, i, o = e(window),
            r = this;
        r.one("loadScroll", function() {
            if (this.getAttribute("data-src")) {
                if (this.setAttribute("src", this.getAttribute("data-src")), this.removeAttribute("data-src"), !t) return !1;
                e(this).hide().fadeIn(t).add("img").removeAttr("style")
            }
        }), o.scroll(function() {
            n = r.filter(function() {
                var t = o.scrollTop(),
                    n = o.height(),
                    i = e(this).offset().top;
                return i + e(this).height() >= t && i <= t + n
            }), i = n.trigger("loadScroll"), r = r.not(i)
        })
    }
}
(jQuery), $(function() {
    $("img").loadScroll(500)
})