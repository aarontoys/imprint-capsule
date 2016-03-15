
exports.up = function(knex, Promise) {
   return knex.schema.createTable('events', function(table){
    table.increments('e_id');
    table.string('e_name');
    table.text('desc');
    table.timestamp('start');
    table.timestamp('end');
    table.decimal('e_latitude', 10, 7);
    table.decimal('e_longitude', 10, 7);
    table.boolean('public');
    table.string('code');
    table.string('e_img');
    table.integer('et_id').references('et_id').inTable('event_types');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};  
