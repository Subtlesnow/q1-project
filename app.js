$(document).ready(function() {
  // console.log('hello hello');

  $.get(" https://thecountedapi.com/api/counted", function(data) {
    console.log(data);
  })

  // $('form').on('submit', function(event) {
  //   event.prevent
  // })
})
