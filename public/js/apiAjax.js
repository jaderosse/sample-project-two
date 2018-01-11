$.ajax({
  url: 'http://api.wunderground.com/api/af1c838078e4bd8f/conditions/q/WA/Seattle.json',
  method: 'GET',
}).done(function(data) {
  console.log(data.current_observation.display_location.city);
  console.log(data.current_observation.temp_f, '°F');
});
