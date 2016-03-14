
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events_users', function (table) {
    table.integer('e_id');
    table.integer('ut_id');
    table.integer('u_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events_users');
};
