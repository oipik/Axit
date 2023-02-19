$(function(){

   $(".header a").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

   $('.header__menu-btn').on('click', function(){
      $('.header__menu').toggleClass('header__menu--active');
   });

   $('.tabs__link').on('click', function(e){
      e.preventDefault();
      $('.tabs__link').removeClass('tabs__link--active');
      $(this).addClass('tabs__link--active');
  
      $('.tabs__content-item').removeClass('tabs__content-item--active');
      $($(this).attr('href')).addClass('tabs__content-item--active');
    });

});