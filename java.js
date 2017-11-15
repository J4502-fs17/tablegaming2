$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('#nav').slideToggle(710);
  });
  $(window).resize(function(){
    if( $(window).width()>710){
      $('#nav').removeAttr('style');
    }
  });
});
