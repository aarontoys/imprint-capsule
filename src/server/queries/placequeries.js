var knex = require('../../../db/knex');
var events = function() {return knex('events');};
var eventtypes = function() {return knex('event_types');};
var posts = function() {return knex('posts');};
var users = function() { return knex('users');};

module.exports = {
    getAllEvents: function(){
        return events()
        .innerJoin('event_types', 'events.et_id', 'event_types.et_id')
        .then(function(results) {
            console.log(results);
            return results;
        });
    },
    getSingleEvents: function(id){
        return events()
        .innerJoin('event_types', 'events.et_id', 'event_types.et_id')
        .innerJoin('posts', 'events.e_id', 'posts.e_id')
        .where('e_id', id)
        .then(function(results) {
            console.log(results);
            return results;
        });
    }
    // addUser: function(fname,lname,email,password,img,bio){
    //     return Users().insert({
    //         fname: fname,
    //         lname: lname,
    //         email: email,
    //         password: password,
    //         u_img: img,
    //         bio: bio
    //     })
    //     .then(function(results) {
    //         return results;
    //     });
    // },
    // editUser: function(id,fname,lname,email,password,img,bio) {
    //     return Users().where('u_id',id).update({
    //         fname: fname,
    //         lname: lname,
    //         email: email,
    //         password: password,
    //         u_img: img,
    //         bio: bio
    //     })
    //     .then(function(results) {
    //         console.log("edit user results"+results);
    //         return results;
    //     }); 
    // },
    // deleteUser: function(id) {
    //   return Users().where('u_id', id).del().then(function(results) {
    //       return results;
    //     });
    //  }

};
