$(function () {

    var html = $('#test').html();
	
	var block1 = {
		title: 'Алла Логозинская',
		url: 'jpg/111.jpg',
		content: 'Закончила Восточноукраинский Национальный университет им. В.Даля.',
		target: 'Хочу учить фронтенд, потому, что:',
		why1: 'Мне это интересно',
		why2: 'Это творческая работа',
		why3: 'Я уже немного с этим знакома',
		contacts: 'мой контактный телефон: <br>+38(050)838-74-72',
		profile: ' мой профиль в фейсбуке:<br><a href="https://www.facebook.com/alla.vladimirovna.568" target=_blank>facebook.com</a>',
		fidback: 'Мой фидбек:<br>Заборы строить не умею'
	};
	var data = tmpl(html, block1);
	$('body').append(data);
});

