var knex = require('../../../db/knex');
var Users = function() { return knex('users');};
var Events = function() {return knex('events');};
var Posts = function() {return knex('posts');};

module.exports = {
    getAllUserPage: function(){
        return Users()
        .then(function(results) {
            console.log(results);
            return results;
        });
    },
    getSingleUser: function(id){
        return Users().where('u_id', id)
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
            console.log("edit user results"+results);
            return results;
        }); 
    },
    deleteUser: function(id) {
      return Users().where('u_id', id).del().then(function(results) {
          return results;
        });
     }

};
