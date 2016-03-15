
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('events_users').del(), 

    // Inserts seed entries
    knex('events_users').insert(
        {
          e_id: 1,
          ut_id: 1,
          u_id: 2
        }),
    knex('events_users').insert(
        {
          e_id: 2,
          ut_id: 1,
          u_id: 3
        }),
    knex('events_users').insert(
        {
          e_id: 3,
          ut_id: 1,
          u_id: 4
        }),
    knex('events_users').insert(
        {
          e_id: 4,
          ut_id: 1,
          u_id: 5
        }),
    knex('events_users').insert(
        {
          e_id: 5,
          ut_id: 1,
          u_id: 6
        }),
    knex('events_users').insert(
        {
          e_id: 6,
          ut_id: 1,
          u_id: 1
        }),
    knex('events_users').insert(
        {
          e_id: 7,
          ut_id: 1,
          u_id: 2
        }),
    knex('events_users').insert(
        {
          e_id: 8,
          ut_id: 1,
          u_id: 3
        })

    );
};