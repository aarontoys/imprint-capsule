var knex = require('../../../db/knex');
var Users = function() { return knex('users');}
var Events = function() {return knex('events');}
var Posts = function() {return knex('posts');}

module.exports = {
    getAllUserPage: function(){
        return Users()
        .then(function(results) {
            console.log(results);
            return results;
        }) 
    },
    getSingleUser: function(id){
        return Users().where('u_id', id)
        .then(function(results) {
            console.log("single users results"+JSON.stringify(results));
            return results;
        }) 
    },    
};