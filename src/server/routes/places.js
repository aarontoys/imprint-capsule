var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/imprints';
var knex = require('../../../db/knex');
var queries = require('./queries');
var placequery = require('../queries/placequeries');
var util = require('../helpers/util.js');

// get all
router.get('/', function(req, res, next) {
 placequery.getAllEvents().then(function(results) {
 res.render('places/all', { title: 'All Guestbooks', array: results });
  });
});


// Create a new one
router.get('/create', util.ensureAuthenticated, function(req, res, next) {
  res.render('places/new', { title: 'All Places' });
});


// Get info to create a new guestbook
router.get('/create/:id', function(req, res, next) {
  var usrid = req.params.id;
  var usrtype = 1;
  var key = process.env.MAPS;
  res.render('places/new', { title: 'Create A Place', usrid:usrid, usrtype:usrtype, api:key });
});

//Post to create a new guestbook
router.post('/create', function(req, res, next) {
  var e_name = req.body.e_name;
  var desc = req.body.desc;
  var start = null;
  var end = null;
  var e_latitude = req.body.e_latitude;
  var e_longitude = req.body.e_longitude;
  var public = true;
  var code = null;
  var e_img = req.body.e_img;
  var et_id = parseInt(req.body.et_id);
  placequery.addEvent(e_name,desc,start,end,e_latitude,e_longitude,public,code,e_img,et_id).then(function(results){
    res.redirect('/places');
  });
});


// get for an individual guestbook
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  placequery.getSingleEvents(id).then(function(results) {
    res.render('places/single', { title: 'hello', array: results, id:id });
  });
});

//post to create new imprint
router.post('/:id', function(req,res,next) {
  var post = req.body.post;
  var created_at = req.body.created_at;
  var e_id = req.params.id;
  var u_id = req.body.u_id;
  placequery.addImprint(post,created_at,e_id,u_id).then(function(results) {
  res.redirect('/places/'+e_id);
  });
});

router.get('/:id/proximity', function (req, res, next) {
  console.log('query params:', req.query);
  // res.status(200).json('ok');

  var id = req.params.id;
  placequery.getSingleEvents(id).then(function(results) {
    var eventLat = parseFloat(results[0].e_latitude);
    var eventLon = parseFloat(results[0].e_longitude);
    
    var locationProximity = placequery.proximity(eventLat, eventLon, .03);
    var userProx = placequery.proximity(req.query.lat, req.query.lon, .000);
    var overlap = placequery.proximityOverlap(userProx, locationProximity);
    console.log('eventLat:', eventLat, 'locationProximityTopRight:', locationProximity.topRightLat)
    console.log('user:', userProx, 'locationProximity:', locationProximity)
    console.log(overlap)
    res.status(200).json(overlap);
  });
});

// new
router.get('/geo', function(req, res, next) {
  var key = process.env.MAPS;
  // console.log(key);
  res.render('places/geo', { title: 'Geo test', api: key});
});



module.exports = router;
