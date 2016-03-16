
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', function(table){
    table.increments('p_id');
    table.text('post');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('p_img');
    table.integer('e_id').references('e_id').inTable('events');
    table.integer('u_id').references('u_id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
