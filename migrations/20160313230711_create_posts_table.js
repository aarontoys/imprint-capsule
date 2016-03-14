
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', function(table){
    table.increments('p_id');
    table.string('post');
    table.string('p_img');
    table.integer('e_id');
    table.integer('u_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
