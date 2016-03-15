
var knex = require('../../../db/knex.js')
 


module.exports = {
  getPlaces: function(){
    //get all places
  },

  getPlace: function(){
    //get individual place
  },

  getCommentsFromPlace: function(){
    //get all comments from a single place
  },

  getUsersFromPlace: function(){
    //get all users who commented from a single place
  },

  getUsers: function(){
    //get all users
  },

  getUser: function(){
    //get single user
  },

  getPlacesFromUser: function(){
    //get places the user went to 
  },

  getCommentsFromUser: function(){
    //get get comments from the user 
  }

};
