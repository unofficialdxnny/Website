$(window).on('scroll', function() {
    $('section').each(function() {
      if($(this).offset().top < $(window).scrollTop() + $(window).height() && $(this).css('opacity') == 0) {
        $(this).addClass('animate__fadeIn');
      }
    });
  });
  