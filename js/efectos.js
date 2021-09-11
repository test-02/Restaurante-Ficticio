$(document).ready(function(){

// --- Scroll Elementos Menu
	var acercaDe = $('#acerda_de').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btn_acerda_de').on('click', function(e) {
		e.preventDefault(); // Quitar el # del link de los a

		$('html, body').animate({
			scrollTop: 470 // 380 // acercaDe - 100
		}, 500);
	});

	$('#btn_menu').on('click', function(e) {
		e.preventDefault(); // Quitar el # del link de los a

		$('html, body').animate({
			scrollTop: menu - 40
		}, 500);
	});

	$('#btn_galeria').on('click', function(e) {
		e.preventDefault(); // Quitar el # del link de los a

		$('html, body').animate({
			scrollTop: galeria + 60 //40
		}, 500);
	});

	$('#btn_ubicacion').on('click', function(e) {
		e.preventDefault(); // Quitar el # del link de los a

		$('html, body').animate({
			scrollTop: ubicacion + 50 //40
		}, 500);
	});


// --- Efecto Menu
	$('.manu_navegacion a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 900 + (index * 500));
	});


// --- Efecto del titulo del HEADER
	if($(window).width() > 800) {
		$('header .texto').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .texto').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
	}


});