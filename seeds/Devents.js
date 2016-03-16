
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('events').del(), 

    // Inserts seed entries
    knex('events').insert(
        {
          e_name: 'Saint Patrick\'s Brewery',
          desc: 'Founded in 2012 by Chris Phelps. Saint Patrick’s Brewing Company’s primary mission is to use the freshest and highest quality ingredients to create craft beers that are deep, complex, very flavorful, balanced and smooth! Our secondary mission is to educate. Educate ourselves, educate our guests and educate all current/potential craft beer lovers about what craft beer was, is and what it can be!',
          start: null,
          end: null,
          e_latitude: 39.612633,
          e_longitude: -105.024532,
          public: null,
          code: null,
          e_img: 'http://saintpatricksbrewing.com/wp-content/uploads/2015/12/FoosBall-150x150.jpg',
          et_id: 3
        }),
    knex('events').insert(
        {
          e_name: 'North Table Mountain Trail Head',
          desc: 'North Table Mountain Trail is 1.5 miles and traverses the southwest side of North Table Mountain below the cliff band. There are excellent views of the Golden Valley. The trail is moderate to advanced in difficulty, with 300 feet elevation gain from the north and 400 feet elevation gain from the south. The trail branches left to the Golden Cliffs Trail shortly after the trailhead in the north. Stay right to keep on the North Table Mountain Trail. The trail terminates near Peary Parkway at its southern end.',
          start: null,
          end: null,
          e_latitude: 39.780184,
          e_longitude: -105.229772,
          public: null,
          code: null,
          e_img: 'http://www.cityofgolden.net/wp-content/uploads/North-Table-Mountain-Trail3.jpg',
          et_id: 4
        }),
    knex('events').insert(
        {
          e_name: 'Lookout Mountain Overlook',
          desc: 'Lookout Mountain Park is a nice and easy drive right outside the city of Denver. Once you get to the top, there\'s wonderful views overlooking the city of Denver. Outside of graffiti spray painted on the rocks, which is so disappointing because it iss so picturesque from the top, it is a great way to get outside the city and soak up how pretty Colorado really is.',
          start: null,
          end: null,
          e_latitude: 39.7335063,
          e_longitude: -105.2419151,
          public: null,
          code: null,
          e_img: 'http://s3-media2.fl.yelpcdn.com/bphoto/VWoDXG1DvZLDId5XqBXAGA/o.jpg',
          et_id: 4
        }),
     knex('events').insert(
        {
          e_name: 'Bird\'s Nest Disc Park',
          desc: 'Bird\'s Nest Disc Park is a 24-hole, disc-golf-only park located in Arvada, Colorado. Built on 40 acres of Jefferson County Open Space, the course features rolling pastures, tree-lined holes and some elevation change. Well established trails and spacious design make it a challenge for players of all ages and skill levels. Holes can range from 170 to over 700 feet in length.',
          start: null,
          end: null,
          e_latitude: 39.816871,
          e_longitude: -105.200526,
          public: null,
          code: null,
          e_img: 'http://www.dgcoursereview.com/course_pics/352/2132b721_m.jpg',
          et_id: 5
        }),
      knex('events').insert(
        {
          e_name: 'Galvanize Golden Triangle',
          desc: 'The very first Galvanize campus. Opening in October 2012, this open, industrial space with vast ceilings lends itself to collaboration, learning, and big ideas. Our in-house cafe and bar, Gather, is the perfect setting for a morning latte, meetings with new and old friends, or an end-of-the-day beer to celebrate your accomplishments. Galvanize’s education programs and entrepreneurial energy come together here to create an incredible community.',
          start: null,
          end: null,
          e_latitude: 39.733911,
          e_longitude: -104.993014,
          public: null,
          code: null,
          e_img: 'http://s3-media3.fl.yelpcdn.com/bphoto/e97NSCxvPJWV1QC2rm4uWw/o.jpg',
          et_id: 3
        }),
    knex('events').insert(
        {
          e_name: 'Cherry Creek Family Shooting Center',
          desc: 'We are a full service public outdoor range offering pistol shooting, rifle shooting at 50 yards and 100 yards, shotgun shooting and archery.  Our shotgun ranges include pedestal trap, American trap, and 5-stand sporting clays.  We also have a patterning board.',
          start: null,
          end: null,
          e_latitude: 39.617554,
          e_longitude: -104.843701,
          public: null,
          code: null,
          e_img: 'http://familyshootingcenter.com/machine_guns/t_center.jpg',
          et_id: 5
        }),
    knex('events').insert(
        {
          e_name: 'Shepard Fairey\'s Mural',
          desc: 'The cars\' license plates, “Empire” and “Nowhere,” are separated by a logo that is familiar to fans of Fairey\'s graphics-intensive pop art — the eyes of deceased WWF wrestler Andre the Giant peering out from an iconic star.',
          start: null,
          end: null,
          e_latitude: 39.731647,
          e_longitude: -104.998955,
          public: null,
          code: null,
          e_img: 'http://blogs.denverpost.com/artmosphere/files/2012/08/CVA2-495x369.jpg',
          et_id: 1
        }),
    knex('events').insert(
        {
          e_name: 'Washington Park',
          desc: 'Washington Park is a neighborhood and public urban park in Denver, Colorado. The Washington Park located in Denver, Colorado, United States is a blend of historic and contemporary styles of architecture. Its historic buildings, lakes, tennis courts, lawns, large flower gardens, and recreation center provide various experiences for visitors',
          start: null,
          end: null,
          e_latitude: 39.700198,
          e_longitude: -104.9711,
          public: null,
          code: null,
          e_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Washington_Park_Denver.JPG/250px-Washington_Park_Denver.JPG',
          et_id: 4
        }),
    knex('events').insert(
        {
          e_name: 'St Patrick\'s Day Denver',
          desc: 'St Patrick\'s day in Denver is a fun time!',
          start: null,
          end: null,
          e_latitude: 39.700198,
          e_longitude: -104.9711,
          public: true,
          code: null,
          e_img: 'http://svcdn.simpleviewinc.com/v3/cache/www_denver_org/10EAFEA142012702B25D650E1BACB63B.png',
          et_id: 2
        })                      
    );
};