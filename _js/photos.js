(function($){
  'use strict'
  var imgPosition = 0,
      imgNumber,
      $slider,
      $sliderFirstLi,
      $progressbar,
      $forwardBtn,
      $backwardBtn,
      $playPauseBtn,
      $playPauseIcon;

  function onForwardClick(e) {
    imgPosition += 1;
    if (imgPosition >= imgNumber) {
      imgPosition = 0;
      moveImg(false);
    } else {
      moveImg(true);
    }
    showDesc();
  }

  function onBackwardClick(e) {
    imgPosition -= 1;
    if (imgPosition < 0) {
      imgPosition = imgNumber -1;
      moveImg(false);
    } else {
      moveImg(true);
    }
    showDesc();
  }

  function moveImg(normalMode){
    if(normalMode) {
      $sliderFirstLi.css('transition-duration', '0.5s');
      $sliderFirstLi.css('transition-timing-function', 'cubic-bezier(0.4, 1.3, 0.65, 1)');
    } else {
      $sliderFirstLi.css('transition-duration', '1.2s');
      $sliderFirstLi.css('transition-timing-function', 'ease-in-out');
    }
    var pos = '-' + (imgPosition * 101) + '%';
    $sliderFirstLi.first().css('margin-left', pos);
  }

  function showDesc() {
    var $li = $slider.find('li:nth-of-type('+ (imgPosition + 1) +')');
    $li.siblings().removeClass('show');
    $li.addClass('show');
  }

  function onPropressbarEnd(e) {
    onForwardClick();
  }

  function onPlayPauseClick() {
    $playPauseIcon.toggleClass('fa-pause');
    $playPauseIcon.toggleClass('fa-play');
    $progressbar.toggleClass('paused');
  }

  function binding() {
    $forwardBtn.on('click', onForwardClick);
    $backwardBtn.on('click', onBackwardClick);
    $playPauseBtn.on('click', onPlayPauseClick);
    $progressbar.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', onPropressbarEnd);
  }

  $(document).ready(function () {
    imgNumber = $('.slider li').length;
    $slider = $('.slider');
    $sliderFirstLi = $slider.find('li').first();
    $progressbar = $('.progressbar');
    $forwardBtn = $('#forward');
    $backwardBtn = $('#backward');
    $playPauseBtn = $('#play');
    $playPauseIcon = $playPauseBtn.find('.fa-pause');
    binding();
    showDesc();
  });
})(jQuery);
