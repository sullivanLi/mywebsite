(function($){
  'use strict';
  var $homeSections,
      $header,
      $mobileToggle;

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

  function binding() {
    $mobileToggle.on('click', onMobileToggleClick);
    $homeSections.on('click', onHomeSectionsClick);
  }

  $(document).ready(function() {
    $homeSections = $('.home-sections');
    $header = $('header');
    $mobileToggle = $('.mobile-toggle');
    binding();
  });
})(jQuery);
