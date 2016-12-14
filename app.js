// google geocode key AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk

$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();

    var city = $('#city');
    var state = $('#state');
    console.log("city", "state")
    getPlace()
  })

  // $.get(" https://thecountedapi.com/api/counted", function(data) {
  //   for (let i = 0; i < data.length; i++) {
  //     console.log(data[i].age);
  //
  //   }
  // })


}) //End of page load


function getPlace(city, state) {
  $.get("https://maps.googleapis.com/maps/api/geocode/json?city=" + city + "state=" + state + "&key=AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk", function(place) {
    console.log("i got it");
    console.log(place);
  })
}
