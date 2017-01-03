(function($){
  'use strict';
  var $body,
      $homeSections,
      $header,
      $mobileToggle,
      $aboutBtn,
      $worksBtn,
      $photosBtn,
      $contactBtn;

  function onMobileToggleClick(e) {
    $mobileToggle.toggleClass('is-open');
    $header.toggleClass('is-open');
    $homeSections.toggleClass('is-open');
  }

  function onHomeSectionsClick(e) {
    if ($homeSections.hasClass('is-open')) {
      onMobileToggleClick();
    }
  }

  function onNavLinkClick (e) {
     var $this = $(this),
         href = $this.attr('href'),
         $target = $(href);

      if ($target.length == 0)
        return;

      e.preventDefault();

      if ($homeSections.hasClass('is-open')) {
        onMobileToggleClick();
      }

      $body.animate({
          scrollTop: $target.offset().top
      }, 500);
  }

  function binding() {
    $mobileToggle.on('click', onMobileToggleClick);
    $homeSections.on('click', onHomeSectionsClick);
    $('a[href^="#"]').on('click', onNavLinkClick);
  }

  $(document).ready(function() {
    $body = $('body');
    $homeSections = $('.home-sections');
    $header = $('header');
    $mobileToggle = $('.mobile-toggle');
    binding();
  });
})(jQuery);
