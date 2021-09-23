$(function () {
    $(document).scroll(function () {
      var $nav = $(".bar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

$(document).ready(function(){
$(this).scrollTop(0);
});