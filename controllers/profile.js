var express = require('express');
var request = require('request');
var isLoggedIn = require('../middleware/isLoggedIn');
var db = ('../models');
var router = express.Router();

router.get('/', isLoggedIn, function(req, res){
	var city = req.user.locationcity;
	var state = req.user.locationstate;
	var weatherUrl = 'http://api.wunderground.com/api/af1c838078e4bd8f/conditions/q/' + state
	+ '/' + city + '.json'
		request({
			url: weatherUrl,
			apikey: process.env.API_KEY
		}, function(error, response, body){
		var dataObj = JSON.parse(body);
		var temp = dataObj.current_observation.temp_f
		res.render('profile', {results: dataObj});
		return temp;
	});	
});




module.exports = router;