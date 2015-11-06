function star(rating){
	$(rating).each(function(){
		var rating = $(this).data('rating');
		var maxrating = 5;
		for (var i = 0; i < maxrating; i++){
			console.log(i);
			$(this).append('<span></span>');
			if (i<rating)
				$(this).find('span').eq(i).addClass('active');
		}
	})
}

$(function(){

	star('.tour-rating');

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