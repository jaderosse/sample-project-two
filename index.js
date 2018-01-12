require('dotenv').config();
var express = require('express');
var db = require('./models');
var ejsLayouts = require('express-ejs-layouts');
var request = require('request');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var passport = require('./config/passportConfig')
var session = require('express-session');
var isLoggedIn = require('./middleware/isLoggedIn');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});

app.get('/', function(req, res){
	res.render('home');
});

// app.get('/profile', isLoggedIn, function(req, res){
// 	var city = req.user.locationcity;
// 	var state = req.user.locationstate;
// 	var weatherUrl = 'http://api.wunderground.com/api/af1c838078e4bd8f/conditions/q/' + state
// 	+ '/' + city + '.json'
// 		request({
// 			url: weatherUrl,
// 			apikey: process.env.API_KEY
// 		}, function(error, response, body){
// 		var dataObj = JSON.parse(body);
// 		var cityName = dataObj.current_observation.display_location.city;
// 		var temp = dataObj.current_observation.temp_f
// 		res.send(cityName + temp);
// 	});	
// });

app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));

app.listen(process.env.PORT || 3000);

module.exports = app;