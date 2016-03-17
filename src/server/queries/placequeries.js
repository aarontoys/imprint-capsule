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
            // console.log(results);
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

    proximity: function(lat, long, bounds){
        var bounds = bounds;
        var proximityObj = {};
        console.log(lat, long)
        proximityObj.topRightLat = lat + bounds;
        proximityObj.topRightLong = long + bounds;
        proximityObj.bottomRightLat = lat - bounds;
        proximityObj.bottomRightLong = long + bounds;
        proximityObj.topLeftLat = lat + bounds;
        proximityObj.topLeftLong = long - bounds;
        proximityObj.bottomLeftLat = lat - bounds;
        proximityObj.bottomLeftLong = long - bounds;

        return proximityObj;
    },


    proximityOverlap: function(userProx, locProx){
        if((userProx.topRightLat < locProx.topRightLat && userProx.bottomLeftLat > locProx.bottomLeftLat
         && userProx.topRightLong < locProx.topRightLong && userProx.bottomLeftLong >locProx.bottomLeftLong) ||
            (userProx.topLeftLat < locProx.topLeftLat && userProx.bottomRightLat > locProx.bottomRightLat
         && userProx.topLeftLong < locProx.topLeftLong && userProx.bottomRightLong >locProx.bottomRightLong)
            )

            //attempt 1
        //((userProx.topRightLat < locProx.topRightLat && userProx.topRightLong < locProx.topRightLong) || 
        //    (userProx.topLeftLat < locProx.topLeftLat && userProx.topLeftLong > locProx.topLeftLong) ||
        //    (userProx.bottomLeftLat > locProx.bottomLeftLat && userProx.bottomLeftLong > locProx.bottomLeftLong) ||
        //    (userProx.bottomRightLat > locProx.bottomRightLat && userProx.bottomRightLong < locProx.bottomRightLong)){
           //attempt 2 
           // (locProx.bottomLeftLat < userProx.bottomLeftLat < locProx.topRightLat && locProx.bottomLeftLong < userProx.bottomLeftLong < locProx.topRightLong) ||
           //  (locProx.bottomLeftLat < userProx.topRightLat < locProx.topRightLat && locProx.bottomLeftLong < userProx.topRightLong < locProx.topRightLong)

           { return true;
        } else  {
            return false;
        }
        // compare the two proximity objects
        // if the userProx is completely contained by locProx
        //   return true
        // else
        //   return false
    },




    // addEvent: function(e_name, desc, start, end, e_latitude, e_longitude, et_id){

    addEvent: function(e_name,desc,start,end,e_latitude,e_longitude,public,code,e_img,et_id) {
        return events().insert({
            e_name: e_name,
            desc: desc,           
            start: start,
            end: end,
            e_latitude: e_latitude,
            e_longitude: e_longitude,
            public: public,
            code: code,
            e_img: e_img,
            et_id: et_id
        })
        .then(function(results) {
            console.log("ETID"+et_id)
            return results;
        });
    },
       addImprint: function(post,created_at,e_id,u_id) {
        return posts().insert({
            post: post,
            created_at: created_at,           
            e_id: e_id,
            u_id: u_id,
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
