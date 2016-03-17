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
    // ajax call to your route
    // return json from the route with a boolean
    // if true, show comment box
    // if false, hide comment box
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var url = window.location.href;
    var id = url.substr(url.length - 1)
    // console.log(window.location.href, id);

    $.get('/places/'+id+'/proximity?lat=' + lat + '&lon=' + lon, function (result) {
    	( result ) ? $("#imprintBox").show() : $("#imprintBox").hide();
    })
}



// function proximity(lat, long){
// 	var threeHundredFeet = .0001;
// 	var proximityObj = {};

// 	proximityObj.topRightLat = lat + threeHundredFeet;
// 	proximityObj.topRightLong = long + threeHundredFeet;
// 	proximityObj.bottomRightLat = lat - threeHundredFeet;
// 	proximityObj.bottomRightLong = long + threeHundredFeet;
// 	proximityObj.topLeftLat = lat + threeHundredFeet;
// 	proximityObj.topLeftLong = long - threeHundredFeet;
// 	proximityObj.bottomLeftLat = lat - threeHundredFeet;
// 	proximityObj.bottomLeftLong = long - threeHundredFeet;

// 	return proximityObj;
// }


// function userProximityComparison(lat, long){
// 	var proximityObj = proximity(lat, long);
// 	console.log(proximityObj)

// }









