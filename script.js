var numberOfSquares = 36;

$(document).ready(function (){
	for (i = 0 ; i < numberOfSquares ; i++){
		$('#grid').append('<div class="grid-item"></div>');
	}

	$('.grid-item').hover(
		function(){	
			var colors = $(this).css('background-color');
			var rgb = colors.match(/\d+/g);
			currentColor = rgb[0] // r == g == b, always
			$(this).addClass('highlight');
		},
		function(){
			$(this).removeClass('highlight');
		}
	);
});