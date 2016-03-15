
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('user_types').del(), 

    // Inserts seed entries
    knex('user_types').insert(
        {
          u_type: 'Event Creator'
        }),
    knex('user_types').insert(
        {
          u_type: 'User'
        })

    );
};