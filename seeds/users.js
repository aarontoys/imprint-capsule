
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert(
        {
          fname: 'Super',
          lname: 'User',
          email: 'super.user@gmail.com',
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
     knex('users').insert(
        {
          fname: 'Jim',
          lname: 'Bobby',
          email: 'jim.bobby@gmail.com',
          password: '123abc'
          u_img: null,
          sm_id: null
        }),  
     knex('users').insert(
        {
          fname: 'Susan',
          lname: 'Sarandon',
          email: 'susan.sarandon@gmail.com',
          password: '123abc'
          u_img: null,
          sm_id: null
        })                     
    );
};