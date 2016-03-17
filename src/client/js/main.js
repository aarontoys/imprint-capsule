// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  getLocation();
});

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var url = window.location.href;
    var id = url.substr(url.length - 1)

    $.get('/places/'+id+'/proximity?lat=' + lat + '&lon=' + lon, function (result) {
    	if ( result ) {
            $("#imprintBox").show() 
        } else {
            $("#imprintBox").hide()
            $("#out_of_location").append("<h3>You are out of Range - you must be nearby to imprint</h3>");
        }
    })
}


// date/time issue

var dateTime = Date();
var date = dateTime.split(' ', 5).join(' ');
$('#created_at').val(date);










