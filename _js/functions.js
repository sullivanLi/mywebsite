$(function() {
  // Handler for .ready() called.
  show_block($('#box1'));
});

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

$('.circle').on('click', function(){
  if(!$(this).hasClass('disabled')){
    let $prepareBox = $('#'+$(this).data('boxid'));
    let $showBox = $('.box .item.show').parent().parent();
    hide_block($showBox);
    setTimeout(function(){
      show_block($prepareBox);
    }, 100);
    $(this).addClass('disabled');
    $(this).siblings().removeClass('disabled');
    $('.web').removeClass('preactive-left preactive-right active');
    if($('.circle').first().hasClass('disabled')){
      $('.web').first().addClass('active');
      $('.web').last().addClass('preactive-right');
    } else {
      $('.web').first().addClass('preactive-left');
      $('.web').last().addClass('active');
    }
  }
});

function show_block($box) {
  $box.find('.item').each(function(i){
    setTimeout(function(){
      $box.find('.item').eq(i).addClass('show');
    }, 50 * i);
  });
}

function hide_block($box) {
  let item_length = $box.find('.item').length;
  $box.find('.item').each(function(i){
    setTimeout(function(){
      $box.find('.item').eq(i).addClass('hiding');
      if(item_length === (i +1) ) {
        //last animation and remove all class
        $box.find('.item').removeClass('show hiding');
      }
    }, 50 * i);
  });
}