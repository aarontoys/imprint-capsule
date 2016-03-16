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
        .fullOuterJoin('event_types', 'events.et_id', 'event_types.et_id')
        .fullOuterJoin('posts', 'events.e_id', 'posts.e_id')
        .fullOuterJoin('users', 'users.u_id', 'posts.u_id')
        .where('events.e_id', id)
        .then(function(results) {
            console.log(results);
            return results;
        });
    },
    addEvent: function(e_name, desc, start, end, e_latitude, e_longitude, et_id){
        return events().insert({
            e_name: e_name,
            desc: desc,
            start: start,
            end: end,
            e_latitude: e_latitude ,
            e_longitude: e_longitude,
            et_id: et_id
        })
        .then(function(results) {
            return results;
        });
    }
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
