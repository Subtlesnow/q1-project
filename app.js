$(document).ready(function() {
  // console.log('hello hello');

  $.get(" https://thecountedapi.com/api/counted", function(data) {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].city);

    }
  })

  


})
