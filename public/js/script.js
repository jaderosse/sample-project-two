var waterDrank = 0;
var toDrink = 64;
var exercise = 0;
var count = 0;
 
var sunAnimation = function(){
	document.body.style.backgroundImage = "url('/img/bike_turn_sun-ANIMATION.gif')";
}

var endSun = function(){
	document.body.style.backgroundImage = "url('/img/bike_sun.png')";
}

var rainAnimation = function(){
	document.body.style.backgroundImage = "url('/img/bike_rain-ANIMATION.gif')";
}

var endRain = function(){
	document.body.style.backgroundImage = "url('/img/bike_rain.png')";
}


var test = $('.test').attr('value');
var weather = $('.weather').attr('value');
// var weather = 'heavy rain';
if(test >= 50){
		console.log(test);
		console.log(weather);
		//for each additional 10 degrees add 8oz
		toDrink += 8;
		var diff = toDrink-waterDrank;
		$('#diff').val(diff);
		console.log(toDrink);
	}
if(weather.includes("rain")){
	console.log('contains rain');
		document.body.style.backgroundImage = "url('/img/bike_rain.png')";
	} else {
	console.log('does not contain rain');
		document.body.style.backgroundImage = "url('/img/bike_sun.png')";
	}


$('#exercise').click(function(){
	if(weather.includes("rain")){
		rainAnimation();
		setTimeout(endRain, 5000);
	} else {
		sunAnimation();
		setTimeout(endSun, 5000);
	}
	toDrink += 8;
	var diff = toDrink-waterDrank;	
	$('#diff').val(diff);
	console.log(toDrink);
});

$('#water').click(function(){
	waterDrank += 8;
	var diff = toDrink-waterDrank;
	$('#hasDrank').val(waterDrank);
	$('#diff').val(diff);
	console.log(waterDrank)
});

function endWater(){
	$('form').on('submit', function(event) {
    event.preventDefault();
    this.submit();
	});	
}

function endDiff(){
	$('form').on('submit', function(event) {
    event.preventDefault();
    this.submit();
	});	
}

$("#reset").click(function(){
	endWater();
	endDiff();
	exercise = 0;
	waterDrank = 0;
	toDrink = 64;
});