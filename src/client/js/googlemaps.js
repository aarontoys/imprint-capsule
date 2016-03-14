$(document).on('ready', function(){

  // getting a new map from google and putting it on map-canvas
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    // putting the center at SF
    center: {lat: 39.737252, lng: -104.9875367},
    // declaring how close (high is close, low is far)
    zoom: 10
  });

  // calling funtion 
  initMap(map);

});

// declaring a function of initmap, that takes a map
function initMap(map) {

    // creating markers empty array
    var markers = [];
    //declaring marker variable
    var marker;
    // list of store data, name, lat, long
    var locations = [
      ['Saint Patrick\'s Brewery', 39.612633, -105.024532],
      ['North Table Mountain Trail Head', 39.780184, -105.229772],
      ['Lookout Mountain Overlook', 39.735262, -105.245669],
      ['Bird\'s Nest Disc Park', 39.816871, -105.200526],
      ['Galvanize Golden Triangle', 39.733911, -104.993014],
      ['Cherry Creek Family Shooting Center', 39.617554, -104.843701],
      ['Shepard Fairey\'s Mural', 39.731647, -104.998955],
      ['Washington Park', 39.700198, -104.9711]
    ];

    //for loop to go through all the stores
    for (i = 0; i < locations.length; i++) {  
      //make new marker in google maps
      marker = new google.maps.Marker({
        position: {
          //declaring lat by the store value
          lat: locations[i][1],
          // determining the long of a store by value
          lng: locations[i][2]
        },
        // calling this to the map
        map: map,
        // making the title the store name
        title: locations[i][0]
      });
      // pushing each marker to the array
      markers.push(marker);
    }

  // // finding the user location function
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   // setting location of the user to the center
  //   var pos = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   };
  //   // making map center
  //   map.setCenter(pos);

  //   // drawing circle
  //   search_area = {
  //     // circle color
  //     strokeColor: '#FF0000',
  //     // opacity of circle
  //     strokeOpacity: 0.8,
  //     // how big the stroke is
  //     strokeWeight: 2,
  //     // center is the  pos
  //     center : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
  //     radius : 2200
  //   };

  //   // search area is now the size of the circle
  //   search_area = new google.maps.Circle(search_area);
  //   // setting area in map
  //   search_area.setMap(map);

  //   // finding markers inside circle
  //   var bounds = search_area.getBounds();

  //   // searching to each if any of the markers are in the area
  //   var markersWithinBounds = markers.filter(function(marker){
  //     return bounds.contains(marker.getPosition());
  //   });

  //   console.log(markersWithinBounds);
  //   // calling a function with the pins in the area
  //   closestStores(markersWithinBounds);


  // });

}

// // making a function called closest stores that takes an array
// function closestStores(arr){
//  // searching through an array
//   for(i=0;i<arr.length;i++){
//     // appends the array title to closeStores ul id.
//     $('#closeStores').append('<li>'+arr[i]["title"]+'</li>');
//   }
// }
