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
		console.log('drink some goddamn water.');
		console.log(toDrink);
	} else {
		console.log('dont be baby');
	}

$('#exercise').click(function(){
	var diff = toDrink-waterDrank;	
	exercise += 1;
	toDrink += 8;
	$('#diff').val(diff);
	console.log('added exercise!!');
	console.log(exercise);
	console.log(toDrink);
});

$('#water').click(function(){
	var diff = toDrink-waterDrank;
	waterDrank += 8;
	console.log('added some water!!');
	$('#hasDrank').val(waterDrank);
	$('#diff').val(diff);
	console.log(waterDrank)
	console.log(diff);
});

function endWater(){
	$('form').on('submit', function(event) {
    event.preventDefault();
    this.submit();
    console.log(waterDrank);
	});	
}

function endDiff(){

	$('form').on('submit', function(event) {
    event.preventDefault();
    this.submit();
    console.log(diff);
	});	
}

$("#reset").click(function(){
	endWater();
	endDiff();
	setTimeout(function(){
	console.log('reset all the things.');
	exercise = 0;
	waterDrank = 0;
	toDrink = 64;
	console.log(exercise, waterDrank, toDrink);
	}, 10000);
});

function clearSearchResults() {
  $(".form-group").html("");
}
