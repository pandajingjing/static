$('.anchor').click(function() {
	$('body,html').animate({
		scrollTop : $('#' + $(this).data('val')).offset().top - 70
	}, 1000);
	return false
});

$('#backtotop').click(function() {
	$('body,html').animate({
		scrollTop : 0
	}, 1000);
	return false
});

$('.confirm_form').submit(function() {
	return window.confirm($('#confirm_msg').val());
});