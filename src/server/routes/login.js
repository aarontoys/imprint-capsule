var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/imprints';
var knex = require('../../../db/knex');
var queries = require('./queries');
var passport = require('passport');

router.get('/facebook', passport.authenticate('facebook')); 

router.get('/facebook/callback', passport.authenticate('facebook', {successReturnToOrRedirect: '/'}));
  // { failureRedirect: '/' }),
  // function (req, res, next) {
  //   // Successful authentication, redirect home.
  //   // console.log('user: ', req.user);
  //   res.redirect('/');
  // });

router.get('/logout', function (req, res, next) {
  console.log('Req Headers: ',req.headers);
  req.session = null;
  res.redirect(req.headers.referer);
})

module.exports = router;
