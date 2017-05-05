// Firebase URL https://q1-project-2fde6.firebaseapp.com
// google geocode key AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk

$(document).ready(function() {


  $('form').on('submit', function(event) {
    event.preventDefault();
    var city = $('#city').val();
    $('#city').val('');
    var state = $('#state').val();
    $('#state').val('');


      // Google city/state latitude/longitude request
      $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+city+"?state="+state+"&key=AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk",
       function(place) {
          var placeLat = place.results[0].geometry.location.lat;
          console.log(placeLat);
          var placeLng = place.results[0].geometry.location.lng;
          console.log(placeLng);
      })

      // Counted API request
      var countedAPI = "https://thecountedapi.com/api/counted?state="+state+"&city="+city

      $.get(countedAPI, function(data) {
        var addressList = [];
        for(let i = 0; i < data.length; i++) {
          $('.allData').append('<p> Address: ' + data[i].address + ' ' + city + ' ' + state)
          console.log(data[i].address);
          var addresses = data[i].address;
          addressList.push(addresses);
      }


        // Replaced white space with + for geocode API
        addressList = addressList.toString()
        addressList = addressList.split(' ').join('+');
        addressList = addressList.split(',');


        // Google address coords request
        addressList.forEach(function(addressStr) {
          $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+addressStr+"+"+city+"+%22?state=%22+"+state+"+%22&key=AIzaSyB_btmf41ZGYvX0ru8FBtb9gOgVWBOp5Lk",
            function(house) {
              var addressLat = house.results[0].geometry.location.lat;
              console.log(addressLat);
              var addressLng = house.results[0].geometry.location.lng;
              console.log(addressLng);


          }) //End of get request

        }) // End of Google address coords

    }) // End of Counted API request

  }) //End of form submit

}) //End of page load
