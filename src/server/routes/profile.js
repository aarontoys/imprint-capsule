var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  res.render('profile', { title: 'User Profile' });
});

module.exports = router;
