// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});


// add timestamp

var dateTime = Date();
var date = dateTime.split(' ', 5).join(' ');
$('#created_at').val(date);