var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();

router.get('/login', function(req, res){
	res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	successFlash: 'Login successful',
	failureRedirect: '/auth/login',
	failureFlash: 'Invalid credentials'
}));

router.get('/signup', function(req, res){
	res.render('auth/signup');
});

router.post('/signup', function(req, res, next){
	console.log(req.body, '= req.body');
  	db.user.findOrCreate({
    	where: { email: req.body.email },
    	defaults: {
    		firstname: req.body.firstname,
     		lastname: req.body.lastname,
      		password: req.body.password,
      		dob: req.body.dob,
      		locationcity: req.body.locationcity,
      		locationstate:req.body.locationstate
    	}
	}).then(function(user, wasCreated){
		if(wasCreated){
			passport.authenticate('local', {
				successRedirect: '/profile',
				successFlash: 'Successfully logged in',
			})(req, res, next);
		} else {
			req.flash('error', 'Email already exists');
			res.redirect('/auth/login');
		}
	}).catch(function(err){
		req.flash('error', err.message);
		res.redirect('/');
	});
});

router.get('/logout', function(req, res){
	req.logout();
	req.flash('success', 'Successfully logged out');
	res.redirect('/');
});

module.exports = router;