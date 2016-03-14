
exports.up = function(knex, Promise) {
  return knex.schema
};

exports.down = function(knex, Promise) {
  return ('events_users.ut_id').unsigned();
};
