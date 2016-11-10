var grid_size = 64; // e.g 4 x 4
var brush_power = 40;

var BrushMode = {
	GRAYSCALE: 1,
	RAINBOW: 2
};

var current_mode = BrushMode.GRAYSCALE;

$(document).ready(function (){
	populate();
});

function populate(){
	dimension = $('#grid').height();
	console.log(dimension);
	console.log("Grid Size: " + grid_size);
	console.log("Dimension: " + dimension);
	square_height = parseInt(Math.sqrt(parseInt(dimension*dimension/grid_size)));
	square_width = parseInt(Math.sqrt(parseInt(dimension*dimension/grid_size)));
	console.log("Square Height/Width: " + square_width);
	for (i = 0 ; i < grid_size ; i++){ // e.g 36 x 36
		$('#grid').append('<div class="grid-item"></div>');
		$('.grid-item').css('height', square_height);
		$('.grid-item').css('width', square_width);
	}

	$('.grid-item').hover(
		function(){	
			red_new = 0;
			blue_new = 0;
			green_new = 0;
			if (current_mode == BrushMode.GRAYSCALE){
				var colors = $(this).css('background-color');
				var rgb = colors.match(/\d+/g);
				currentColor = rgb[0] // r == g == b, always	
				newColor = Math.max(0, currentColor - brush_power);			
				red_new = newColor;
				blue_new = newColor;
				green_new = newColor;
			} else{				
				red_new = parseInt(Math.random() * 256);
				blue_new = parseInt(Math.random() * 256);
				green_new = parseInt(Math.random() * 256);
				console.log(red_new);
			}
			$(this).css('background-color', 'rgb(' + red_new + ',' + blue_new + ',' + green_new + ')');
		},
		function(){
			
		}
	);
}

function askNumberOfGrids(){
	var new_number_of_grids = prompt("Please enter the desired number size of the grid (between 1 and 64).", 16);
	if (new_number_of_grids > 0 && new_number_of_grids <= 64){
		grid_size = new_number_of_grids; // e.g 36 x 36
	} else{
		alert("Invalid number of grids. Please pick a number between 1 and 64.")
	}

	emptyGrid();
	populate();
}

function askBrushPower(){
	max_value = 100;
	min_value = 5;

	var new_brush_power = prompt("Please enter the desired brush \"power\" (between " + min_value + " and " + max_value +").", 40);
	if (new_brush_power >= min_value && new_brush_power <= max_value){
		brush_power = new_brush_power;
	} else{
		alert("Invalid brush power. Please pick a number between " + min_value + " and " + max_value + ".");
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
	current_mode = BrushMode.GRAYSCALE;
}

function setRainbowMode(){
	emptyGrid();
	populate();
	current_mode = BrushMode.RAINBOW;
}