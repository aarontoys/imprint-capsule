
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events_users', function (table) {
    table.integer('e_id').references('e_id').inTable('events');
    table.integer('ut_id').references('ut_id').inTable('user_types');
    table.integer('u_id').references('u_id').inTable('users').onDelete('Cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events_users');
};
