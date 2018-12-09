
(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


// Add transparency to Nav bar

$(document).ready(function () {

  $(window).scroll(function () {

    if ($(window).scrollTop() > 50) {
      $('Nav').addClass('navbar-light bg-light fades');
    } else {
      $('Nav').removeClass('navbar-light bg-light fade3');
    }

  });

});

})(jQuery); // End of use strict
