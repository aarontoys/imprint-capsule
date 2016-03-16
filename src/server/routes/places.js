var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/imprints';
var knex = require('../../../db/knex');
var queries = require('./queries');
var placequery = require('../queries/placequeries');

// get all
router.get('/', function(req, res, next) {
 placequery.getAllEvents().then(function(results) {
 res.render('places/all', { title: 'All Places', array: results });
  });
});

// new
router.get('/geo', function(req, res, next) {
  var key = process.env.MAPS;
  console.log(key);
  res.render('places/geo', { title: 'Geo test', api: key});
});

router.get('/create', function(req, res, next) {
  res.render('places/new', { title: 'All Places' });
});

// individual
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  placequery.getSingleEvents(id).then(function(results) {
    res.render('places/single', { title: 'hello', array: results });
  })
});

module.exports = router;
