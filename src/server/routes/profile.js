var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/imprints';
var knex = require('../../../db/knex');
var queries = require('./queries')

router.get('/new', function(req, res, next) {
  var id = req.params.id;
  res.render('users/new', { title: 'Add User Profile' });
});

router.get('/:id/edit', function(req, res, next) {
  var id = req.params.id;
  res.render('users/edit', { title: 'Edit User Profile' });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  res.render('users/profile', { title: 'Show User Profile'+id });
});

router.get('/', function(req, res, next) {
  var id = req.params.id;
  res.render('users/all', { title: 'Show All Users' });
});






module.exports = router;
