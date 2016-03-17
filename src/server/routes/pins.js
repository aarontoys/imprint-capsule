var express = require('express');
var router = express.Router();
var queries = require('./queries');
var pinquery = require('../queries/pin');

router.get('/', function(req, res, next) {
    res.render('places/pin');
  });

router.get('/api', function(req, res, next) {
  pinquery.getPins()
  .then(function(pinsList) {
    // console.log(pinsList);
    res.json(pinsList);
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});


module.exports = router;