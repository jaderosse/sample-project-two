require('dotenv').config();
var express = require('express');
var db = require('./models');
var ejs = require('ejs');
var ejsLayouts = require('express-ejs-layouts');
var request = require('request');
var bodyParser = require('body-parser');
var passport = require('./config/passportConfig')
var session = require('express-session');
var isLoggedIn = require('./middleware/isLoggedIn');
var chart = require('chart.js');
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
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

app.get('/', function(req, res){
	res.render('auth/login');
});

app.get('/resources', function(req, res){
	res.render('resources');
});

app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));
app.use('/chart', require('./controllers/chart'));

app.listen(process.env.PORT || 3000);

module.exports = app;