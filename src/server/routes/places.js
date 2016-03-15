var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/imprints';
var knex = require('../../../db/knex');
var queries = require('./queries');


router.get('/', function(req, res, next) {
  res.render('places/all', { title: 'All Places' });
});

router.get('/geo', function(req, res, next) {
  var key = process.env.MAPS;
  console.log(key);
  res.render('places/geo', { title: 'Geo test', api: key});
});

router.get('/create', function(req, res, next) {
  res.render('places/new', { title: 'All Places' });
});

router.get('/:id', function(req, res, next) {
  res.render('places/single', { title: 'All Places' });
});

module.exports = router;
