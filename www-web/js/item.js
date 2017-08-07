$('.form_date').datetimepicker({
	language : 'zh-CN',
	weekStart : 1,
	todayBtn : 1,
	autoclose : 1,
	todayHighlight : 1,
	startView : 2,
	minView : 2,
	forceParse : 0
});

$('#log_custom').click(function() {
	showLogCustom()
});

$(document).ready(function() {
	showLogCustom()
});

function showLogCustom() {
	if ($('#log_custom').is(':checked')) {
		$('#container_event_id').hide();
		$('#container_event_log').show();
	} else {
		$('#container_event_log').hide();
		$('#container_event_id').show();
	}
}