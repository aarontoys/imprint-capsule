var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/imprints';
var knex = require('../../../db/knex');
var queries = require('./queries');
var util = require('../helpers/util');

router.get('/', function(req, res, next) {
	queries.getEventImagePost()
	.then(function(data){
	  var info = data.rows;
	  res.render('index', { 
	  	id: info[0].e_id,
	  	image: util.rewriteUrl(info[0].e_img),
	  	name: info[0].e_name,
	  	post: info[0].post,
 	    id2:  info[1].e_id,
 	    image2: util.rewriteUrl(info[1].e_img),
	  	name2: info[1].e_name,
	  	post2: info[1].post,
 	    id3: info[2].e_id,
 	    image3: util.rewriteUrl(info[2].e_img),
	  	name3: info[2].e_name,
	  	post3: info[2].post,
      });
	});
});

// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Login' });
// });


module.exports = router;
