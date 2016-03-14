
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', function(table){
    table.increments('u_id');
    table.string('fname');
    table.string('lname');
    table.string('email');
    table.string('password');
    table.string('u_img');
    table.string('sm_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('users');
};
