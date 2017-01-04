(function($){
  'use strict';
  var $worksBtn,
      $web,
      $box,
      $box1,
      $prepareBox,
      $showBox;

  function onWorkBtnClick(e) {
    var $this = $(this);
    if(!$this.hasClass('disabled')){
      $prepareBox = $('#' + $this.data('boxid'));
      $showBox = $box.find('.item.show').parent().parent();
      hideBlock($showBox);
      setTimeout(function(){
        showBlock($prepareBox);
      }, 100);
      $this.addClass('disabled');
      $this.siblings().removeClass('disabled');
      $web.removeClass('preactive-left preactive-right active');
      if($worksBtn.first().hasClass('disabled')){
        $web.first().addClass('active');
        $web.last().addClass('preactive-right');
      } else {
        $web.first().addClass('preactive-left');
        $web.last().addClass('active');
      }
    }
  }

  function showBlock($box) {
    $box.find('.item').each(function(i){
      setTimeout(function(){
        $box.find('.item').eq(i).addClass('show');
      }, 50 * i);
    });
  }

  function hideBlock($box) {
    var item_length = $box.find('.item').length;
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

  function binding() {
    $worksBtn.on('click', onWorkBtnClick);
  }

  $(document).ready(function() {
    $worksBtn = $('.circle');
    $web = $('.web');
    $box = $('.box');
    $box1 = $('#box1');
    binding();
    showBlock($('#box1'));
  });
})(jQuery);
