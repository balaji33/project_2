(function ($) {
    "use strict";


    //banner-slider

        $('.owl-one').owlCarousel({
          loop: true,
          margin: 0,
          nav: true,
          dots:true,
          responsiveClass: true,
          autoplay: false,
          autoplayTimeout: 5000,
          autoplaySpeed: 1000,
          autoplayHoverPause: false,
          responsive: {
            0: {
              items: 1,
              nav: false
            },
            480: {
              items: 1,
              nav: false
            },
            667: {
              items: 1,
              nav: true
            },
            1000: {
              items: 1,
              nav: true
            }
          }
        });

        // owl carousel top courses
        $(".top-courses-slider").owlCarousel({
            margin: 30,
            loop: true,
            nav: false,
            responsiveClass: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
                1025: {
                    items: 2,
                },
            },
        });
        // button click slider top courses
        $(".group-btn-top-courses-slider .btn-prev").on("click", function () {
            $(".top-courses-slider .owl-prev").click();
        });
        $(".group-btn-top-courses-slider .btn-next").on("click", function () {
            $(".top-courses-slider .owl-next").click();
        });

        // owl carousel slider best staff
        $(".best-staff-content").owlCarousel({
            margin: 30,
            loop: true,
            nav: false,
            responsiveClass: true,
            //autoplay:true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    margin: 15,
                },
                400: {
                    items: 2,
                    margin: 15,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 3,
                },
                1025: {
                    items: 4,
                },
            },
        });
        // button click slider best staff
        $(".best-staff .group-btn-slider .btn-prev").on("click", function () {
            $(".best-staff .owl-prev").click();
        });
        $(".best-staff .group-btn-slider .btn-next").on("click", function () {
            $(".best-staff .owl-next").click();
        });
   

       
})(jQuery);
