
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
          u_id: 3
        }),
    knex('posts').insert(
        {
          post: 'This park is absolutely wonderful.',
          p_img: '../images/post2.jpg',
          e_id: 2,
          u_id: 2
        }),
    knex('posts').insert(
        {
          post: 'If you do not actually work here it is still a good place to stop',
          p_img: '../images/post3.jpg',
          e_id: 5,
          u_id: 1
        }),
    knex('posts').insert(
        {
          post: 'Washington Park is sweet',
          p_img: '../images/post4.jpg',
          e_id: 8,
          u_id: 4
        }),
    knex('posts').insert(
        {
          post: 'Amazing view!!!!',
          p_img: '../images/post5.jpg',
          e_id: 3,
          u_id: 4
        })


    );
};