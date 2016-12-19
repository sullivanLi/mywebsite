$('.mobile-toggle').on('click', function(){
  $('.mobile-toggle').toggleClass('is-open');
  $('header').toggleClass('is-open');
  $('.home-sections').toggleClass('is-open');
});

$('.home-sections').on('click', function(){
  if ($(this).hasClass('is-open')) {
    $('.mobile-toggle').removeClass('is-open');
    $('header').removeClass('is-open');
    $('.home-sections').removeClass('is-open');
  }
});