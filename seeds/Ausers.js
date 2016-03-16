
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
          password: '123abc',
          u_img: '/userimg/4.png',
          sm_id: null,
          bio: 'I enjoy writing databases and seed files. Seed the world with the beautiful database seeds and watch the data trees grow.'
        }),

    knex('users').insert(
        {
          fname: 'Kyle',
          lname: 'Maxwell',
          email: 'kyle.maxwell@gmail.com',
          password: '123abc',
          u_img: '/userimg/3.png',
          sm_id: null,
          bio: 'I am an artist and am really into fashion and art.'
        }),
    knex('users').insert(
        {
          fname: 'Aaron',
          lname: 'Toys',
          email: 'aaron.toys@gmail.com',
          password: '123abc',
          u_img: '/userimg/3.png',
          sm_id: null,
          bio: 'I have 3 kids and like to visit all the kid friendly places around Denver.'
        }),
    knex('users').insert(
        {
          fname: 'Robby',
          lname: 'Gaines',
          email: 'robert.gaines@gmail.com',
          password: '123abc',
          u_img: '/userimg/2.png',
          sm_id: null,
          bio: 'I like sunsets and walks on the beach.'
        }),
     knex('users').insert(
        {
          fname: 'Andy',
          lname: 'Gross',
          email: 'andy.Gross@gmail.com',
          password: '123abc',
          u_img: '/userimg/1.png',
          sm_id: null,
          bio: 'Music and art are my passions. I enjoy hiking, biking, walking and sitting.'
        }),
     knex('users').insert(
        {
          fname: 'Jim',
          lname: 'Bobby',
          email: 'jim.bobby@gmail.com',
          password: '123abc',
          u_img: '/userimg/4.png',
          sm_id: null,
          bio: 'I make my own whiskey.'
        }),  
     knex('users').insert(
        {
          fname: 'Susan',
          lname: 'Sarandon',
          email: 'susan.sarandon@gmail.com',
          password: '123abc',
          u_img: '/userimg/2.png',
          sm_id: null,
          bio: 'I like movies and wine. My favorite role was the one in which I played a mom who did not get along with the rest of her family but grew and learned about herself and had a happy ending.'
        })                     
    );
};