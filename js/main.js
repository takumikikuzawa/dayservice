(window.onload = function () {
  $(window).scroll(function () {
    $('.fadeout').each(function () {
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi) {
        $(this).addClass('fadein');
      } else {
        $(this).removeClass('fadein');
      }
    });
  });
})();

function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 250) {
    $('.reservation').removeClass('DownMove');
    $('.reservation').addClass('UpMove'); //
  } else {
    if ($('.reservation').hasClass('UpMove')) {
      $('.reservation').removeClass('UpMove');
      $('.reservation').addClass('DownMove');
    }
  }
}
$(window).scroll(function () {
  PageTopAnime();
});

$(function () {
  $('.js-btn').on('click', function () {
    $('.ham , .ham-btn__line').toggleClass('open');
  });
});

$(function () {
  $('.reservation__allow').on('click', function () {
    $('.reservation__img').toggleClass('slidein');
  });
});

$(function () {
  $('.reservation__allow').on('click', function () {
    $('.reservation__allow').toggleClass('rotate');
  });
});
