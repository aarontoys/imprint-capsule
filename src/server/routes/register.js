var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/imprints';
var knex = require('../../../db/knex');
var queries = require('./queries')

router.get('/', function(req, res, next) {
  // console.log('user: ',req.user);
  res.render('index', { 
    title: 'Login',
    user: req.user 
  });
});

module.exports = router;
