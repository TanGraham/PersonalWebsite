$(document).ready(function (){
  var windowheight = window.innerHeight;
  var divheight = windowheight;
  var barheight = $('.links').height();
  $(".a").height(divheight);
  $('.barbuffer').height(barheight);
  $("#1").click(function() {
      $('html,body').animate({
          scrollTop: $(".a").offset().top-barheight},
          'slow');
  });
  $("#2").click(function() {
      $('html,body').animate({
          scrollTop: $(".b").offset().top},
          'slow');
  });
  $("#3").click(function() {
      $('html,body').animate({
          scrollTop: $(".c").offset().top},
          'slow');
  });
  $("#4").click(function() {
      $('html,body').animate({
          scrollTop: $(".d").offset().top},
          'slow');
  });
  $("#5").click(function() {
      $('html,body').animate({
          scrollTop: $(".e").offset().top},
          'slow');
  });
  $(".top").click(function() {
      $('html,body').animate({
          scrollTop: $(".a").offset().top},
          'slow');
  });

  var navtop = $('.links').offset().top
  $(window).scroll(function () {
    if ($(window).scrollTop() > navtop) {
      $('.links').addClass('toolbar-fixed');
    }
    if ($(window).scrollTop() <  navtop) {
      $('.links').removeClass('toolbar-fixed');
    }
    if ($(window).scrollTop() > windowheight-barheight) {
      $('.toolbar-fixed').css('background-color','rgba(1,1,1,0.5)');
      $('.toolbar-fixed').height($('.list').height()+10);
      $('.top').css('visibility',"visible");
    }
    if ($(window).scrollTop() <  windowheight-barheight) {
        $('.toolbar-fixed').css('background-color','');
        $('.top').css('visibility',"hidden");
    }
});
  $(window).on( 'resize', function(){
    var barheight = $('.links').height();
    $(".a").height(divheight);
    $('.barbuffer').height(barheight);
    $('.toolbar-fixed').height($('.list').height()+10);
  //  console.log(window.scrollTop, $(".a").offset().top)
    if($(window).scrollTop()+200 > $(".c").offset().top){
          $('html,body').animate({
              scrollTop: $(".c").offset().top},
              'slow');
    }
  });
  var $el = $(".ski");
  $el.hover( function(event){
    $(".popup").css("visibility","visible");},
    function(event){
      $(".popup").css("visibility","hidden");;
  });
    $(window).mousemove(function(event){
      topd = event.pageY-$(window).scrollTop();
      leftd = event.pageX;//$el.offset().left;
      $(".popup").css({left:leftd,top:topd});
    });



});
