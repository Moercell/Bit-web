(function() {

  var cf1 = $('.cf1');
  var cf2 = $('.cf2');
  var cf3 = $('.cf3');
  var cf4 = $('.cf4');

  $('.cf1').mouseover(function() {
    cf1.toggleClass('cf1-on');
    cf2.removeClass('cf2-on');
    cf3.removeClass('cf3-on');
    cf4.removeClass('cf4-on');
    return false;
  });

  $('.cf2').mouseover(function() {
    cf2.toggleClass('cf2-on');
    cf1.removeClass('cf1-on');
    cf3.removeClass('cf3-on');
    cf4.removeClass('cf4-on');
    return false;
  });

  $('.cf3').mouseover(function() {
    cf3.toggleClass('cf3-on');
    cf2.removeClass('cf2-on');
    cf1.removeClass('cf1-on');
    cf4.removeClass('cf4-on');
    return false;
  });

  $('.cf4').mouseover(function() {
    cf4.toggleClass('cf4-on');
    cf2.removeClass('cf2-on');
    cf3.removeClass('cf3-on');
    cf1.removeClass('cf1-on');
    return false;
  });

})();
