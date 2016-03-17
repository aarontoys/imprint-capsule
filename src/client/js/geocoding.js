function makeCoords() {

  var geocoder = new google.maps.Geocoder();

  document.getElementById('address').addEventListener('blur', function() {
    console.log("hello")
    geocodeAddress(geocoder);
  });
}


function geocodeAddress(geocoder) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      $('#latitude').val(latitude);
      $('#longitude').val(longitude);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}