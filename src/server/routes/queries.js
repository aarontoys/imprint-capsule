
var knex = require('../../../db/knex.js')
 


module.exports = {
 
  getEventImagePost: function(e_id){
    return knex.raw('select events.e_id, e_name, e_img, post from events inner join posts on events.e_id = posts.e_id;');
           // .then(function(result){
           //  console.log('user join:', JSON.stringify(results));
           //  return results;
           // })
  }
};
