$(document).ready(function() {
	var anchor_id = window.location.hash;
	if (anchor_id != '' && anchor_id != undefined) {
		var anchor_target = $('#' + anchor_id.substr(1));
		if (anchor_target.length > 0) {
			$('body,html').delay(100).animate({
				scrollTop : anchor_target.offset().top - 70
			}, 1000);
		}
	}
});

$('.anchor').click(function() {
	var anchor_target = $('#' + $(this).data('anchor-target'));
	if (anchor_target.length > 0) {
		$('body,html').animate({
			scrollTop : anchor_target.offset().top - 70
		}, 1000);
		return false;
	} else {
		return true;
	}
});

$('.backtotop').click(function() {
	$('body,html').animate({
		scrollTop : 0
	}, 1000);
	return false
});