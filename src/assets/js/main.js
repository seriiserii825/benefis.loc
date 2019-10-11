$(function () {
	/*
		https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
		===========================*/
	$("html").easeScroll({
		frameRate: 60,
		animationTime: 1000,
		stepSize: 90,
		pulseAlgorithm: 1,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 20,
		accelerationMax: 1,
		keyboardSupport: true,
		arrowScroll: 50,
		touchpadSupport: true,
		fixedBackground: true
	});

	$('#js-search input[type="text"]').on('click', function () {
		$(this).addClass('changed');
	});

	let sandwitch = function () {
		$('.sandwitch').on('click', function () {
			$('#js-main-menu').toggleClass('active');
			$(this).toggleClass('sandwitch--active');
			$('body').toggleClass('fixed');
		});
	};
	sandwitch();

});



