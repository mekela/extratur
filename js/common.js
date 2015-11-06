$(function(){
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	$('input[placeholder], textarea[placeholder]').placeholder();

	 $('.our_workers ul').bxSlider({
	    slideWidth: 176,
	    minSlides: 4,
	    maxSlides: 4,
	    pager: false,
	    slideMargin: 64
	  });
});