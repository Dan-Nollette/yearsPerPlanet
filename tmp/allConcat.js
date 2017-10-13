
$(document).ready(function() {
  $('#years-per-planet-form').submit(function(event) {
    event.preventDefault();
    var dateOfBirth = $('#dateOfBirth').val();
    var currentDate = $('#currentDate').val();
    var dif = currentDate - dateOfBirth
    var ar = dateOfBirth.split("-")
    $('#result').append("<li>'hello:  '" + dif + currentDate + dateOfBirth + "--------" + ar[0]  + "current time" +  Math.floor(Date.now()) +"</li> ");
  });
});
