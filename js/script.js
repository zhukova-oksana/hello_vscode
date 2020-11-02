$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
	});
	$('.single-slide').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false,
					arrows: false
				}
			}
		]
	});
	$('.projects__slide').slick({
		infinite: true,
		dots: false,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					centerMode: true,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 425,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			}
		]
	});
	$('.training__slide').slick({
		infinite: true,
		dots: false,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					centerMode: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					focusOnSelect: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					focusOnSelect: true
				}
			}
		]
	});
	$('.events__slide').slick({
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$('.staff__slide').slick({
		infinite: true,
		dots: false,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$(window).scroll(function () {
		var height = $(window).scrollTop();
		/*Если сделали скролл на 100px задаём новый класс для header*/
		if (height > 100) {
			$('header').addClass('header-fixed');
		} else {
			/*Если меньше 100px удаляем класс для header*/
			$('header').removeClass('header-fixed');
		}
	});
})


