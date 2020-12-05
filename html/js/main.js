jQuery(document).ready(function($) {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
});
});


(function ($) {
	"use strict";

  $(document).ready(function () {
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });
  });
    // auto generated side menu from top header menu start
  var topHeaderMenu = $('header nav > ul').clone();
  var sideMenu = $('.side-menu-wrap nav');
  sideMenu.append(topHeaderMenu);
  if ($(sideMenu).find('.sub-menu').length != 0) {
    $(sideMenu).find('.sub-menu').parent().append('<i class="fas fa-chevron-down d-flex align-items-center"></i>');
  }
  // auto generated side menu from top header menu end

  // close menu when clicked on menu link start
  // $('.side-menu-wrap nav > ul > li > a').on('click', function () {
  //   sideMenuCloseAction();
  // });
  // close menu when clicked on menu link end

  // open close sub menu of side menu start
  var sideMenuList = $('.side-menu-wrap nav > ul > li > i');
  $(sideMenuList).on('click', function () {
    if (!($(this).siblings('.sub-menu').hasClass('d-block'))) {
      $(this).siblings('.sub-menu').addClass('d-block');
    } else {
      $(this).siblings('.sub-menu').removeClass('d-block');
    }
  });
  // open close sub menu of side menu end

  // side menu close start
  $('.side-menu-close').on('click', function () {
    if (!($('.side-menu-close').hasClass('closed'))) {
      $('.side-menu-close').addClass('closed');
    } else {
      $('.side-menu-close').removeClass('closed');
    }
  });
  // side menu close end

  // auto append overlay to body start
  $('.wrapper').append('<div class="custom-overlay h-100 w-100"></div>');
  // auto append overlay to body end

  // open side menu when clicked on menu button start
  $('.side-menu-close').on('click', function () {
    if (!($('.side-menu-wrap').hasClass('opened')) && !($('.custom-overlay').hasClass('show'))) {
      $('.side-menu-wrap').addClass('opened');
      $('.custom-overlay').addClass('show');
    } else {
      $('.side-menu-wrap').removeClass('opened');
      $('.custom-overlay').removeClass('show');
    }
  })
  // open side menu when clicked on menu button end

  // close side menu when clicked on overlay start
  $('.custom-overlay').on('click', function () {
    sideMenuCloseAction();
  });
// close side menu when clicked on overlay end

// close side menu when swiped start
var isDragging = false, initialOffset = 0, finalOffset = 0;
$(".side-menu-wrap")
.mousedown(function(e) {
    isDragging = false;
  initialOffset = e.offsetX;
})
.mousemove(function() {
    isDragging = true;
 })
.mouseup(function(e) {
    var wasDragging = isDragging;
    isDragging = false;
  finalOffset = e.offsetX;
    if (wasDragging) {
        if(initialOffset>finalOffset) {
           sideMenuCloseAction();
           }
    }
});
// close side menu when swiped end


  function sideMenuCloseAction() {
    $('.side-menu-wrap').addClass('open');
    $('.wrapper').addClass('freeze');
    $('.custom-overlay').removeClass('show');
    $('.side-menu-wrap').removeClass('opened');
    $('.side-menu-close').removeClass('closed');
    $(sideMenuList).siblings('.sub-menu').removeClass('d-block');
  }
  // close side menu when clicked on overlay end

  // close side menu over 992px start
    $(window).on('resize', function() {
        if($(window).width() >= 992) {
            sideMenuCloseAction();
        }
    })
    // close side menu over 992px end

   
    $(".custom-select").each(function() {
      var classes = $(this).attr("class"),
          id      = $(this).attr("id"),
          name    = $(this).attr("name");
      var template =  '<div class="' + classes + '">';
          template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
          template += '<div class="custom-options">';
          $(this).find("option").each(function() {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
          });
      template += '</div></div>';
      
      $(this).wrap('<div class="custom-select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
      $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
      $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function() {
      $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
      });
      $(this).parents(".custom-select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
      $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
      $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });


    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })


    
  

}(jQuery));
