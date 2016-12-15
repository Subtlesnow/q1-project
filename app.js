// google geocode key AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk

$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();

    var city = $('#city').val();
    // clear field function
    var state = $('#state').val();
    // clear field function
    console.log(city, state)


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
          // console.log(data[i].address);
          var addresses = data[i].address;
          addressList.push(addresses);
      }

        // Replaced white space with + for geocode API
        addressList = addressList.toString()
        // console.log(addressList)
        addressList = addressList.split(' ').join('+');
        // console.log(addressList)
        addressList = addressList.split();
        console.log(addressList)

        // // Google address coords request
        // var coords = new Promise((resolve, reject) => .)



        // addressList.forEach(function(element) {
        //   $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+addresses+"?city="+city+"?state="+state+"&key=AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk",
        //     function() {
        //       console.log(element);
        //       console.log('up in here');
        //     })
        //   })
      // $.ajax({
      //   url: "https://maps.googleapis.com/maps/api/geocode/json?address="+addresses+"?city="+city+"?state="+state+"&key=AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk",
      //   type: "GET",
      //   success: console.log("success"),
      //   dataType: 'json'
      // });


      function initMap() {
      mapboxgl.accessToken = 'pk.eyJ1Ijoic3VidGxlcmlkZXNub3ciLCJhIjoiY2l3a2F2cnVuMDAzNDJvcDI2Nnc3d3R3MiJ9.2GBe5fY1JXBCg48VcATbZw';
      var map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/subtleridesnow/ciwn3f9w400452ppll27n9i56', //hosted style id
          center: [-98, 39], // starting position
          zoom: 3, // starting zoom
          "pitch": 50 //pitch
      });
      initMap();
    }

    }) // End of Counted API request


  }) //End of form submit



}) //End of page load
