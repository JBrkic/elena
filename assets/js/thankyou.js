$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    $('#overlay').toggleClass('open');
    $('#toggle').toggleClass('active');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        target.focus(); // Setting focus
        if (target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          target.focus(); // Setting focus
        };
        return false;
      }
    }
  });
});

$(function () {
  setTimeout(function () {
    window.location.href = "https://www.josipbrkic.com";
  }, 4000);
});