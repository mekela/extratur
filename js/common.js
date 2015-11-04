$(function(){
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	$('input[placeholder], textarea[placeholder]').placeholder();
});