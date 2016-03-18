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


    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var url = window.location.href;
    var id = url.substr(url.length - 1);

    if(url.substr(0,url.length -1) === 'http://localhost:5000/places/' && $.isNumeric(id)) {
        $.get('/places/'+id+'/proximity?lat=' + lat + '&lon=' + lon, function (result) {
        	if ( result ) {
                $("#imprintBox").show() 
            } else {
                $("#imprintBox").hide()
                $("#out_of_location").addClass("alert alert-warning").append("<p>You must be within range to post</p>");
            }
        })
    }
}


// date/time issue

var dateTime = Date();
var date = dateTime.split(' ', 5).join(' ');
$('#created_at').val(date);
