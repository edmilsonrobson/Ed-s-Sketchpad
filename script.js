var number_of_squares = 36;
var brush_power = 40;

var BrushMode = {
	GRAYSCALE: 1,
	RAINBOW: 2
};

var current_mode = BrushMode.GRAYSCALE;

$(document).ready(function (){
	populate(number_of_squares);
});

function populate(){
	for (i = 0 ; i < number_of_squares ; i++){
		$('#grid').append('<div class="grid-item"></div>');
	}

	$('.grid-item').hover(
		function(){	
			var colors = $(this).css('background-color');
			var rgb = colors.match(/\d+/g);
			currentColor = rgb[0] // r == g == b, always	
			newColor = Math.max(0, currentColor - brush_power);			
			$(this).css('background-color', 'rgb(' + newColor + ',' + newColor + ',' + newColor + ')');
		},
		function(){
			//$(this).removeClass('highlight');
		}
	);
}

function askNumberOfGrids(){
	var new_number_of_grids = prompt("Please enter the desired number of squares (between 1 and 40).", 36);
	if (new_number_of_grids > 0 && new_number_of_grids <= 40){
		number_of_squares = new_number_of_grids;
	} else{
		alert("Invalid number of grids. Please pick a number between 1 and 40.")
	}

	emptyGrid();
	populate();
}

function emptyGrid(){
	$('#grid').empty();
}

function setGrayscaleMode(){
	emptyGrid();
	populate();
	current_mode = Brushmode.GRAYSCALE;
}

function setRainbowMode(){
	emptyGrid();
	populate();
	current_mode = Brushmode.RAINBOW;
}