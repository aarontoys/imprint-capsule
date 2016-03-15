
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_types', function (table) {
    table.increments('ut_id');
    table.string('u_type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_types');
};
