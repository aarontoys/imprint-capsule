
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(), 

    // Inserts seed entries
    knex('posts').insert(
        {
          post: 'I am happy to say that this place is on it now! They had a full raft of beers. The beers are good quality and it is a fun place overall. Kyle was our bartender and he did a great job. Well done, I will be back! The brown and the Red IPA were my faves.',
          p_img: '../images/post1.jpg',
          e_id: 1,
          u_id: 3
        }),
    knex('posts').insert(
        {
          post: 'This park is absolutely wonderful. If you are considering biking, hiking, and/or rock climbing here I absolutely recommend it. North Table Mountain is very close to the city of Denver and is also easy to access. Moreover, there are many different trail options and so you are not constantly bumping into people.',
          p_img: '../images/post2.jpg',
          e_id: 2,
          u_id: 2
        }),
    knex('posts').insert(
        {
          post: 'If you do not actually work here it is still a good place to stop and have a beer and meet like-minded entrepreneurs. Galvanize is also a prime supporter of Denver startup week, their efforts are much appreciated.',
          p_img: '../images/post3.jpg',
          e_id: 5,
          u_id: 1
        }),
    knex('posts').insert(
        {
          post: 'Washington Park, or as it is more commonly known as Wash Park, is a very nice, large city park.',
          p_img: '../images/post4.jpg',
          e_id: 8,
          u_id: 4
        }),
    knex('posts').insert(
        {
          post: 'Amazing view!!! Definitely somewhere to see while in the area. Be prepared for it to be super windy!',
          p_img: '../images/post5.jpg',
          e_id: 3,
          u_id: 4
        })


    );
};