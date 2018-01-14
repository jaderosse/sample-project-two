var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();

router.get('/', function(req, res){
	db.stat.findAll().then(function(stats){
		res.render('chart', {stats: stats});
	});
});

router.post('/', function(req, res) {
	db.user.findAll().then(function(user) {
  	db.stat.create(req.body)
	}).then(function(stat) {
    	res.redirect('/chart');
	}).catch(function(err){
		console.log('catch error');
		console.log('error', err.message);
		req.flash('error', err.message);
		res.redirect('/profile');
	});
});

module.exports = router;
