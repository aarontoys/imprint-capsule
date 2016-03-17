var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/imprints';
var knex = require('../../../db/knex');
var queries = require('./queries');
var passport = require('passport');

router.get('/facebook', function (req, res, next) {
  req.session.returnTo = req.headers.referer;
  next();
},passport.authenticate('facebook',{ authType: 'rerequest', scope: ['email'] })); 

router.get('/facebook/callback', passport.authenticate('facebook', {successReturnToOrRedirect: '/'}));

router.post('/', function (req, res, next) {
  req.session.returnTo = req.headers.referer;
  next();
}, passport.authenticate('local', {successReturnToOrRedirect: '/'}
));

router.get('/logout', function (req, res, next) {
  console.log('Req Headers: ',req.headers);
  req.session = null;
  res.redirect(req.headers.referer);
})

module.exports = router;
