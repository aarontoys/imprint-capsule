
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('event_types').del(), 

    // Inserts seed entries
    knex('event_types').insert(
        {
          e_type: 'Art'
        }),
    knex('event_types').insert(
        {
          e_type: 'Event'
        }),
    knex('event_types').insert(
        {
          e_type: 'Food-Drink'
        }),
    knex('event_types').insert(
        {
          e_type: 'Nature'
        }),
    knex('event_types').insert(
        {
          e_type: 'Sports'
        }),
    knex('event_types').insert(
        {
          e_type: 'Other'
        })


    );
};