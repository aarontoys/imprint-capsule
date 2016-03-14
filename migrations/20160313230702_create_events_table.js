
exports.up = function(knex, Promise) {
   return knex.schema.createTable('events', function(table){
    table.increments('e_id');
    table.string('e_name');
    table.text('desc');
    table.timestamp('start');
    table.timestamp('end');
    table.string('location');
    table.boolean('public');
    table.string('code');
    table.string('e_img');
    table.integer('et_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};  
