
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert(
        {
          fname: 'Kyle',
          lname: 'Maxwell',
          email: 'kyle.maxwell@gmail.com',
          password: '123abc'
          u_img: null,
          sm_id: null
        }),
    knex('users').insert(
        {
          fname: 'Kyle',
          lname: 'Maxwell',
          email: 'kyle.maxwell@gmail.com',
          password: '123abc'
          u_img: null,
          sm_id: null
        }),

    );
};