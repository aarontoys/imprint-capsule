
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('events').del(), 

    // Inserts seed entries
    knex('events').insert(
        {
          e_name: 'Saint Patrick\'s Brewery',
          desc: 'description here',
          start: 'timestamp',
          end: 'timestamp'
          e_latitude: 39.612633,
          e_longitude: -105.024532,
          public: null
          code: null
          e_img: 
          et_id
        }),
    knex('users').insert(
        {
          fname: 'Aaron',
          lname: 'Toys',
          email: 'aaron.toys@gmail.com',
          password: '123abc'
          u_img: null,
          sm_id: null
        }),
    knex('users').insert(
        {
          fname: 'Robby',
          lname: 'Gaines',
          email: 'robert.gaines@gmail.com',
          password: '123abc'
          u_img: null,
          sm_id: null
        }),
     knex('users').insert(
        {
          fname: 'Andy',
          lname: 'Gross',
          email: 'andy.Gross@gmail.com',
          password: '123abc'
          u_img: null,
          sm_id: null
        }),   
    );
};