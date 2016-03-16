//Global map variable
var map;

$(document).ready(function () {
  $.getJSON("/pins/api", function(json) {
    initMap(json);
  });
});

function initMap(pins) {

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

    //Current position
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    //Create google map object
    map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 11
    });

    //Create a single infowindow object
    var infowindow = new google.maps.InfoWindow({
        content: 'test'
      });

    //Create markers with pins from database
    for (var i = 0; i < pins.length; i++) {
      var latitude = parseFloat(pins[i].e_latitude);
      var longitude = parseFloat(pins[i].e_longitude);
      var contentString = '<div id="content"><h1>'+ pins[i].e_name + '</h1><h3>'+pins[i].e_type+'</h3><p>' + pins[i].desc +
      '</p></div>';

      var marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
        windowContent: contentString
      });
      //Add event listener for pin clicks
      google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(this.windowContent);
            infowindow.open(map, this);

        });
    }
    //Error function
  },function() {
      //Client declined to allow current location, center map at enter map at city & county bldg
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.7364597, lng: -104.9881456},
      zoom: 11
      });

    //Create a single infowindow object
    var infowindow = new google.maps.InfoWindow({
        content: 'test'
      });

    //Create markers with pins from database
    for (var i = 0; i < pins.length; i++) {
      var latitude = parseFloat(pins[i].e_latitude);
      var longitude = parseFloat(pins[i].e_longitude);
      var contentString = '<div id="content"><h1>'+ pins[i].e_name + '</h1><h3>'+pins[i].e_type+'</h3><p>' + pins[i].desc +
      '</p></div>';

      var marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
        windowContent: contentString
      });
      //Add event listener for pin clicks
      google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(this.windowContent);
            infowindow.open(map, this);

        });
    }
    });
  } else {
    // Browser doesn't support Geolocation, center map at city & county bldg
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7364597, lng: -104.9881456},
    zoom: 11
    });

    //Create a single infowindow object
    var infowindow = new google.maps.InfoWindow({
        content: 'test'
      });

    //Create markers with pins from database
    for (var i = 0; i < pins.length; i++) {
      var latitude = parseFloat(pins[i].e_latitude);
      var longitude = parseFloat(pins[i].e_longitude);
      var contentString = '<div id="content"><h1>'+ pins[i].e_name + '</h1><h3>'+pins[i].e_type+'</h3><p>' + pins[i].desc +
      '</p></div>';

      var marker = new google.maps.Marker({
        position: {lat: latitude, lng:longitude},
        map: map,
        windowContent: contentString
      });
      //Add event listener for pin clicks
      google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(this.windowContent);
            infowindow.open(map, this);

        });
    }
  }
}