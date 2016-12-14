// google geocode key AIzaSyB3B_9IQ1q64ipGFN0nMo0sGOMg0-jjtoU


$(document).ready(function() {
  // console.log('hello hello');

  $('form').on('submit', function(event) {
    event.preventDefault();
    var city = $('#city');
    console.log("city")
    var state = $('#state');
    console.log("state");
    console.log("hello");
    // var $input = $('input[name=search]');
    // var place = $input.val('');
    // console.log(place);

  })

  // $.get(" https://thecountedapi.com/api/counted", function(data) {
  //   for (let i = 0; i < data.length; i++) {
  //     console.log(data[i].age);
  //
  //   }
  // })

  // get geocode of city and state
  // function getLocation(place) {
  //   $.get("https://maps.googleapis.com/maps/api/geocode/json?city=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyB3B_9IQ1q64ipGFN0nMo0sGOMg0-jjtoU",
  // function(place ))
  // }



})
