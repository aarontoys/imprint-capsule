var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('places', { title: 'All Places' });
});

router.get('/:id', function(req, res, next) {
  res.render('index', { title: 'All Places' });
});

module.exports = router;
