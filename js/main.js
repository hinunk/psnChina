//nav
$(document).ready(function() {
	var navHeight = $("#navHeight").offset().top;
	var navFix = $("#nav-wrap");
	$(window).scroll(function() {
		if($(this).scrollTop() > navHeight) {
			navFix.addClass("navFix");
		} else {
			navFix.removeClass("navFix");
		}
	})
})

$('.nav-wrap').navScroll({
	mobileDropdown: true,
	mobileBreakpoint: 768,
	scrollSpy: true
});

$('.click-me').navScroll({
	navHeight: 0
});

$('.nav-wrap').on('click', '.nav-mobile', function(e) {
	e.preventDefault();
	$('.nav-wrap ul').slideToggle('fast');
});

