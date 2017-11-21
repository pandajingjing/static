//$('.grid').masonry({
//	// options
//	itemSelector : '.grid-item',
//	columnWidth : 246,
//	fitWidth : true,
//	gutter : 20
//});
//
//$('.grid').infiniteScroll({
//	// options
//	path : 'http://duorou.jxu.dev.jxulife.com/home/images/{{#}}',
//	append : '.grid-item',
//	history : false,
//// prefill : true
//});

var $grid = $('.grid').masonry({
	// Masonry options...
	itemSelector : '.grid-item',
	columnWidth : 246,
	fitWidth : true,
	gutter : 20
});

// get Masonry instance
var msnry = $grid.data('masonry');

// init Infinite Scroll
$grid.infiniteScroll({
	// Infinite Scroll options...
	path : 'http://duorou.jxu.dev.jxulife.com/home/images/{{#}}',
	append : '.grid-item',
	history : false,
	prefill : true,
	outlayer : msnry,
});