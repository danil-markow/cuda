$(document).ready(function () {
	$('.burger').click(function () {
		$('.burger').toggleClass('open-menu');
		$('.menu').toggleClass('open-menu');
	});
});