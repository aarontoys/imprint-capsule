
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(), 

    // Inserts seed entries
    knex('posts').insert(
        {
          post: 'I am happy to say that this place is on it now! ',
          p_img: '../images/post1.jpg',
          e_id: 1,
          u_id: 3,
          created_at: 2016-03-16 20:07:28-06
        }),
    knex('posts').insert(
        {
          post: 'This park is absolutely wonderful.',
          p_img: '../images/post2.jpg',
          e_id: 2,
          u_id: 2,
          created_at: 2016-03-14 20:07:28-06
        }),
    knex('posts').insert(
        {
          post: 'If you do not actually work here it is still a good place to stop',
          p_img: '../images/post3.jpg',
          e_id: 5,
          u_id: 1,
          created_at: 2016-03-13 20:07:28-06
        }),
    knex('posts').insert(
        {
          post: 'Washington Park is sweet',
          p_img: '../images/post4.jpg',
          e_id: 8,
          u_id: 4,
          created_at: 2016-03-11 20:07:28-06
        }),
    knex('posts').insert(
        {
          post: 'Amazing view!!!!',
          p_img: '../images/post5.jpg',
          e_id: 3,
          u_id: 4,
          created_at: 2016-03-09 20:07:28-06
        })


    );
};