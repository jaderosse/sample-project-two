var waterDrank = 0;
var toDrink = 64;
var exercise = 0;

var test = $('.test').attr('value')
console.log(test)
	if(test >= 50){
		//for each additional 10 degrees add 8oz
		toDrink += 8;
		var diff = toDrink-waterDrank;
		$('#diff').val(diff);
		console.log(toDrink);
	}

$('#exercise').click(function(){
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
