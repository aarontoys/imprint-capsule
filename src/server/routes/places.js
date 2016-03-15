var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('places/all', { title: 'All Places' });
});

router.get('/create', function(req, res, next) {
  res.render('places/new', { title: 'All Places' });
});

router.get('/:id', function(req, res, next) {
  res.render('places/single', { title: 'All Places' });
});

module.exports = router;
