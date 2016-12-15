// google geocode key AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk

// mapboxgl.accessToken = 'pk.eyJ1Ijoic3VidGxlcmlkZXNub3ciLCJhIjoiY2l3a2F2cnVuMDAzNDJvcDI2Nnc3d3R3MiJ9.2GBe5fY1JXBCg48VcATbZw';
// var map = new mapboxgl.Map({
//     container: 'map', // container id
//     style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
//     center: [-98, 39], // starting position
//     zoom: 3, // starting zoom
//     "pitch": 50 //pitch
// });


$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();

    var city = $('#city').val();
    // console.log(city)
    $('#city').val('');
    var state = $('#state').val();
    $('#state').val('');
    // console.log(city, state)


      // Google city/state latitude/longitude request
      $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+city+"?state="+state+"&key=AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk", function(place) {
        // console.log("i got it");
        // console.log(place)
        var placeLat = place.results[0].geometry.location.lat;
        // console.log(placeLat);
        var placeLng = place.results[0].geometry.location.lng;
        // console.log(placeLng);
      })

      // Counted API request
      var countedAPI = "https://thecountedapi.com/api/counted?state="+state+"&city="+city

      $.get(countedAPI, function(data) {
        var addressList = [];
        for(let i = 0; i < data.length; i++) {
          console.log(data[i].address);
          var addresses = data[i].address;
          addressList.push(addresses);
      }

        // Replaced white space with + for geocode API
        addressList = addressList.toString()
        // console.log(addressList)
        addressList = addressList.split(' ').join('+');
        // console.log(addressList)
        addressList = addressList.split(',');
        // console.log(addressList)


        // // Google address coords request
        addressList.forEach(function(addressStr) {
          $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+addressStr+"+"+city+"+%22?state=%22+"+state+"+%22&key=AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk",
            function(house) {
              // console.log(house);
              var addressLat = house.results[0].geometry.location.lat;
              console.log(addressLat);
              var addressLng = house.results[0].geometry.location.lng;
              console.log(addressLng);
            })
        }) // End of Google address coords







    }) // End of Counted API request


  }) //End of form submit


}) //End of page load
