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

// Create a new one
router.get('/create', function(req, res, next) {
  res.render('places/new', { title: 'All Places' });
});

router.post('/create', function(req, res, next) {
  var e_name = req.body.e_name;
  var desc = req.body.desc;
  var start = req.body.start;
  var end = req.body.end;
  var e_latitude = req.body.e_latitude;
  var e_longitude = req.body.e_longitude;
  var et_id = req.body.et_id;
  placequery.addEvent(e_name,desc,start,end,e_longitude,e_latitude,et_id).then(function(results){
    res.redirect('/places');
  });
});

// individual
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  placequery.getSingleEvents(id).then(function(results) {
    res.render('places/single', { title: 'hello', array: results });
  });
});

// new
router.get('/geo', function(req, res, next) {
  var key = process.env.MAPS;
  console.log(key);
  res.render('places/geo', { title: 'Geo test', api: key});
});



module.exports = router;
