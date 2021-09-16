/**
* Template Name: Ninestars - v2.0.0
* Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight();
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Initi AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });


  $('.services').hover(
    function(){
      $('.ps_span').stop().animate({'width': '95%', 'border-radius': '12px'}, 1000);
      $('.ai_span').stop().animate({'width': '95%', 'border-radius': '12px'}, 1000);
      $('.xd_span').stop().animate({'width': '75%', 'border-radius': '12px'}, 1000);

      $('.html_span').stop().animate({'width': '90%', 'border-radius': '12px'}, 1000);
      $('.css_span').stop().animate({'width': '85%', 'border-radius': '12px'}, 1000);
      $('.jQ_span').stop().animate({'width': '65%', 'border-radius': '12px'}, 1000);

      $('.hancom_span').stop().animate({'width': '75%', 'border-radius': '12px'}, 1000);
      $('.ppt_span').stop().animate({'width': '85%', 'border-radius': '12px'}, 1000);
      $('.excell_span').stop().animate({'width': '60%', 'border-radius': '12px'}, 1000);

      $('.dsmax3_span').stop().animate({'width': '55%', 'border-radius': '12px'}, 1000);
      $('.clip_span').stop().animate({'width': '80%', 'border-radius': '12px'}, 1000);
    
    },

    function(){
      $('.ps_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);
      $('.ai_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);
      $('.xd_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);

      $('.html_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);
      $('.css_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);
      $('.jQ_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);

      $('.hancom_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);
      $('.ppt_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);
      $('.excell_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);

      $('.dsmax3_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);
      $('.clip_span').stop().delay(1500).animate({'width': '0%', 'border-radius': '12px'}, 1500);

  });

})(jQuery);