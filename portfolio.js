/**
 * @author Karen Bowman
 */
$(document).load(function() {  
	 $(window).scroll(function(){
	 	//an attempt to eliminate any delay while scroll is processed? needs a little work
	 	$('html').addClass('stop-scrolling');
	 	elem = document.elementFromPoint(0, 0);
	 	var offsets = $('#Slide1').offset();
		var top = offsets.top;
	 	$('html').removeClass('stop-scrolling');
	 });
});

/* fix this so that it stops scrolling while overlay is visible*/
$(.button).click(function(){
	$('html').addClass('stop-scrolling');
});
$(.close).click(function(){
	$('html').removeClass('stop-scrolling');
});
	
/*
 * var offsets = $('#11a').offset();
	var top = offsets.top;
 * 
 * var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#my-element').offset().top,
    distance      = (elementOffset - scrollTop);
 * 
 * $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
 */