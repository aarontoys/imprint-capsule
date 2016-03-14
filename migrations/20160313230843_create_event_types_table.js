
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event_types', function (table ) {
    table.increments('et_id');
    table.string('e_type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event_types');
};
