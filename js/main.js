//轮播
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 1,
	paginationClickable: true,
	spaceBetween: 30,
	loop: true
});

//tab
window.tabH = function(element) {
	let $tabs = $(element)
	let selevtor = 'ol[data-role="nav"]>li'
	$tabs.on('mouseenter', selevtor, e => {
		let $li = $(e.currentTarget)
		let index = $li.index()
		$li.addClass('active')

		let second = $li.closest('ol[data-role="nav"]').siblings('ol[data-role="shows"]').find('li').eq(index).addClass('active')

		$tabs.on('mouseleave', selevtor, e => {
			$li.removeClass('active')
			second.removeClass('active')
		})
	})
}
tabH($('.tabs'))

//navFix

window.addEventListener("load", function() {
	var navHeight = $("#navHeight").offset().top;
	var navFix = $("#nav-wrap");
	$(window).scroll(function() {
		if($(this).scrollTop() > navHeight) {
			navFix.addClass("navFix");
		} else {
			navFix.removeClass("navFix");
		}
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

});

//banner
var wrapImg = document.getElementById('wrapImage')
wrapImg.addEventListener('mousemove', function(e) {
	let wiLeft = e.pageX - wrapImg.offsetLeft
	let wiTop = e.pageY - wrapImg.offsetTop
	//	console.log(wiLeft,wiTop)
	let wiWidth = wrapImg.offsetWidth
	let wiHeigth = wrapImg.offsetHeight

	let wXcenter = wrapImg.offsetLeft + wiWidth / 2
	let wYcenter = wrapImg.offsetTop + wiHeigth / 2

	let mouseXcenter = e.pageX - wXcenter
	let mouseYcenter = e.pageY - wYcenter

	let maxDistance = Math.sqrt(wiWidth * wiWidth + wiHeigth * wiHeigth) / 2

	let Xpercent = mouseXcenter / maxDistance
	let Ypercent = mouseYcenter / maxDistance

	let xDeg = Xpercent * 5
	let yDeg = Ypercent * 15
	banner.style.transform = `translateZ(-70px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`

})

//goto
$(document).ready(function() {
	$.goup({
		trigger: 100,
		bottomOffset: 150,
		locationOffset: 100,
		title: '返回顶部',
		titleAsText: true
	});
});

//轮播暂停
window.addEventListener('load', function() {
	let timer
	$('.imgaes-header').on('mouseenter', () => {
		window.clearInterval(timer)
	})
	$('.imgaes-header').on('mouseleave', () => {
		aotuTimer()
	})

	function aotuTimer() {
		timer = setInterval(() => {
			$('.swiper-button-next').click()
		}, 2500)
	}
	aotuTimer()
})