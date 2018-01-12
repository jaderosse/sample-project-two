var waterDrank = 0;
var toDrink = 0;
var exercise = 0;


var $test = $('.test').attr('value')
console.log($test)
	if($test >= 50){
		console.log('drink some goddamn water.');
	} else {
		console.log('dont be baby');
	}


$('#exercise').click(function(){
	exercise += 1;
	toDrink += 8;
	console.log('added exercise!!');
	console.log(exercise);
	console.log(toDrink);
});

$('#water').click(function(){
	waterDrank += 8;
	console.log('added some water!!');
	console.log(waterDrank);
});

$("#reset").click(function(){
	console.log(waterDrank - toDrink);
	console.log('reset all the things.');
	exercise = 0;
	waterDrank = 0;
	toDrink = 0;
	console.log(exercise, waterDrank, toDrink);
});