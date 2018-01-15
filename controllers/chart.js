var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();

router.get('/', isLoggedIn, function(req, res){
	db.stat.findAll({
		user: [db.user]
	}).then(function(stats){
		res.render('chart', {stats: stats});
	});
});

// router.get('/', function(req, res){
// 	db.user.findOne({
// 		where: {id: req.params.id},
// 		include: [db.stat]
// 	}).then(function(user){
// 		res.render('chart', {user: user});
// 	});
// });

router.post('/', function(req, res) {
	// db.user.findAll({
	// 	include: [db.stat]
	// }).then(function(user) {
  	db.stat.create(req.body) 
  		// {include: [db.user]})
	.then(function(stat) {
		// res.render('chart', {stat: stat})
    	res.redirect('/chart');
	}).catch(function(err){
		console.log('error', err.message);
		res.redirect('/profile');
	});
});

module.exports = router;