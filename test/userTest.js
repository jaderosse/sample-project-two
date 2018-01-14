var express = require('express');
var expect = ('chai').expect;
var request = require('supertest');
var db = require('../models');
var app = require('../index');

before(function(done){
	db.sequelize.sync({force: true})
	.then(function(){
		done();
	});
});

describe('GET /, home route', function(){
	it('should return a 200 response', function(done){
		request(app).get('/')
		.expect(200, done);
	});
});

describe('GET /auth/login', function(){
	it('should return a 200 response', function(done){
		request(app).get('/auth/login')
		.expect(200, done);
	});
});

describe('POST /auth/login', function(){
	it('should log in user and redirect to profile', function(done){
		request(app).post('/auth/login')
		.type('form')
		.send({
			username: 'test@test.com',
			password: 'test123'
		})
		.expect('Location', '/auth/login')
		.expect(302, done);
	});
});

describe('GET /auth/signup', function(){
	it('should return 200 response', function(done){
		request(app).get('/auth/signup')
		.expect(200, done);
	});
});

describe('POST /auth/signup', function(){
	it('should create a new user and redirect to profile', function(done){
		request(app).post('/auth/signup')
		.type('form')
		.send({
			password: 'test123',
			firstname: 'jade',
			lastname: 'rosse',
			email: 'email@gmail.com',
			dob: 07291995,
			locationcity: 'memphis',
			locaionstate: 'TN'
		})
		.expect('Location', '/')
		.expect(302, done);
	});
});

describe('GET /profile', function(){
	it('should return 200 response', function(done){
		request(app).get('/profile')
		.expect(200, done);
	});
});

describe('GET /chart', function(){
	it('should return 200 response', function(done){
		request(app).get('/chart')
		.expect(200, done);
	});
});

describe('GET /auth/logout', function(){
	it('should logout user, redirect home', function(done){
		request(app).get('/auth/logout')
		.expect(200, done);
	});
});

describe('POST /chart', function(){
	it('should create new stats for user and redirect to chart', function(done){
		setTimeout(function(){
		request(app).post('/chart')
		.type('form')
		.send({
			hasDrank: 8,
			diff: 16,
			userId: 33
		})
		.expect('Location', '/chart')
		.expect(302, done);
		} , 5000);
	});
});

