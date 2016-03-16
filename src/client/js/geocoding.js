function makeCoords() {

  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder);
  });
}


function geocodeAddress(geocoder) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      $('#cords').append('<p>'+'Lat: '+latitude+' Long: '+longitude+'</p>');
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}