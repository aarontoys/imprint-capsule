// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  getLocation();

  $(".allbtn").click(function(){
        // $(".Food/Drink").fadeOut("slow");
        $(".Event").show();
        $(".Food-Drink").show();
        $(".Nature").show();
        $(".Sports").show();
        $(".Other").show();
        $(".Art").show();
    });
  $(".artbtn").click(function(){
        // $(".Food/Drink").fadeOut("slow");
        $(".Event").fadeOut("slow");
        $(".Food-Drink").fadeOut("slow");
        $(".Nature").fadeOut("slow");
        $(".Sports").fadeOut("slow");
        $(".Other").fadeOut("slow");
        $(".Art").show();
    });
  $(".eventbtn").click(function(){
        // $(".Food/Drink").fadeOut("slow");
        $(".Art").fadeOut("slow");
        $(".Food-Drink").fadeOut("slow");
        $(".Nature").fadeOut("slow");
        $(".Sports").fadeOut("slow");
        $(".Other").fadeOut("slow");
        $(".Event").show();
    });
  $(".foodbtn").click(function(){
        // $(".Food/Drink").fadeOut("slow");
        $(".Art").fadeOut("slow");
        $(".Event").fadeOut("slow");
        $(".Nature").fadeOut("slow");
        $(".Sports").fadeOut("slow");
        $(".Other").fadeOut("slow");
        $(".Food-Drink").show();
    });
  $(".naturebtn").click(function(){
        // $(".Food/Drink").fadeOut("slow");
        $(".Art").fadeOut("slow");
        $(".Event").fadeOut("slow");
        $(".Food-Drink").fadeOut("slow");
        $(".Sports").fadeOut("slow");
        $(".Other").fadeOut("slow");
        $(".Nature").show();
    });
  $(".sportsbtn").click(function(){
        // $(".Food/Drink").fadeOut("slow");
        $(".Art").fadeOut("slow");
        $(".Event").fadeOut("slow");
        $(".Food-Drink").fadeOut("slow");
        $(".Nature").fadeOut("slow");
        $(".Other").fadeOut("slow");
        $(".Sports").show();
    });
  $(".otherbtn").click(function(){
        // $(".Food/Drink").fadeOut("slow");
        $(".Art").fadeOut("slow");
        $(".Event").fadeOut("slow");
        $(".Food-Drink").fadeOut("slow");
        $(".Nature").fadeOut("slow");
        $(".Sports").fadeOut("slow");
        $(".Other").show();
    });

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









