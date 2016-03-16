var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/imprints';
var knex = require('../../../db/knex');
var queries = require('./queries')

router.get('/', function(req, res, next) {
	queries.getEventImagePost()
	.then(function(data){
	  var info = data.rows
	  console.log(data.rows)


	  res.render('index', { 
	  	image: info[0].e_img,
	  	name: info[0].e_name,
	  	post: info[0].post,
 	    image2: info[1].e_img,
	  	name2: info[1].e_name,
	  	post2: info[1].post,
 	    image3: info[2].e_img,
	  	name3: info[2].e_name,
	  	post3: info[2].post,
	  	user: req.user
      });
	})

  
});

module.exports = router;
