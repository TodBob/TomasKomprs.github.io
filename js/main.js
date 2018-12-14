
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




// Solution from W3schools.com
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 430 || document.documentElement.scrollTop > 430) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
