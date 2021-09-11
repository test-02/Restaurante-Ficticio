$(document).ready(function() {

	$(window).scroll(function() {
		var windowWidth = $(window).width();

		if (windowWidth > 800) {

			// document.body.style.zoom = "80%"; 

			var scroll = $(window).scrollTop();

			$('header .texto').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});


	$(window).resize(function() { // Problema arreglado en tableta con el acerca de
		var windowWidth = $(window).width();

		if (windowWidth < 800) {
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});

});