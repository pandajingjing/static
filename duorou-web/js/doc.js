SyntaxHighlighter.all();
$(document).ready(function() {
	var anchor_id = window.location.hash;
	if (anchor_id != '' && anchor_id != undefined) {
		anchor_id = anchor_id.substr(2);
		$('body,html').delay(100).animate({
			scrollTop : $('#'+anchor_id).offset().top - 70
		}, 1000);
	}
});