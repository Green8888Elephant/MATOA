"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Probably navigationof Header
  $("#inpt_search").on('focus', function () {
    $(this).parent('label').addClass('active');
  });
  $("#inpt_search").on('blur', function () {
    if ($(this).val().length == 0) $(this).parent('label').removeClass('active');
  });
  $(".carousel-watches").owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<div class="watches-nav-left"><i class="fa fa-angle-left"></i></div>', '<div' + ' class="watches-nav-right"><i class="fa' + ' fa-angle-right"></i></div>'],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<div class="testimonials-carousel-item__button"><i class=""><<img src="images/src/testimonual_left" alt=""></i></div>', '<div' + ' class="testimonials-carousel-item__button"><i class="fas fa-long-arrow-alt-right"></i></div>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});