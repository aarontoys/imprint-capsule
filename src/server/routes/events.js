var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'All Events' });
});

router.get('/:id', function(req, res, next) {
  res.render('index', { title: 'All Events' });
});

module.exports = router;
