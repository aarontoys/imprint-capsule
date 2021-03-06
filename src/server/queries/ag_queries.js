var knex = require('../../../db/knex');
var Users = function() { return knex('users');};
var Events = function() {return knex('events');};
var Posts = function() {return knex('posts');};

module.exports = {
    getAllUserPage: function(){
        return Users()
        .then(function(results) {
            return results;
        });
    },
    getSingleUser: function(id){
        return knex.from('users').fullOuterJoin('posts', 'users.u_id', 'posts.u_id')
        .fullOuterJoin('events', 'posts.e_id', 'events.e_id')
        .where('users.u_id',id)
        .then(function(results) {
            return results;
        });
    },

    addUser: function(fname,lname,email,password,img,bio){
        return Users().insert({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            u_img: img,
            bio: bio
        })
        .then(function(results) {
            return results;
        });
    },
    editUser: function(id,fname,lname,email,password,img,bio) {
        return Users().where('u_id',id).update({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            u_img: img,
            bio: bio
        })
        .then(function(results) {
            return results;
        }); 
    },
    deleteUser: function(id) {
      return Users().where('u_id', id).del().then(function(results) {
          return results;
        });
     }

};
