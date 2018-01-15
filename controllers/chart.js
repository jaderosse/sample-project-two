var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();

router.get('/', isLoggedIn, function(req, res){
	db.stat.findAll({
		where: {
			userId: res.locals.currentUser.id
		}	
	}).then(function(stats){
		res.render('chart', {stats: stats});
	});
});

router.post('/', function(req, res) {
  	db.stat.create(req.body) 
	.then(function(stat) {
    	res.redirect('/chart');
	}).catch(function(err){
		console.log('error', err.message);
		res.redirect('/profile');
	});
});

module.exports = router;