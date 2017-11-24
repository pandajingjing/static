$('.anchor').click(function() {
	$('body,html').animate({
		scrollTop : $('#' + $(this).data('anchor-target')).offset().top - 70
	}, 1000);
	return false
});

$('.backtotop').click(function() {
	$('body,html').animate({
		scrollTop : 0
	}, 1000);
	return false
});