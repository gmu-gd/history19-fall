$(document).ready(function() {
    // run function on initial page load
    menuSlide();

    // run function on resize of the window
    $(window).resize(function() {

    });
    // run function on scroll
    $(window).scroll(function() {

    });
});


function menuSlide() {
  $('.menu-icon').click(function() {
    $('body').toggleClass('lock-y');
    $('.hamburger').toggleClass('is-active');
    $('.menu-list').toggleClass('menu-animate', 500);
  });
}
