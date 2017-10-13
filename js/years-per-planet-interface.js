
$(document).ready(function() {
  $('#years-per-planet-form').submit(function(event) {
    event.preventDefault();
    var DayOfBirthParts = $('#dateOfBirth').val().split('-');
    var dateOfBirth = new Date(DayOfBirthParts[], month[, date[, hours[, minutes[, seconds[, milliseconds]]]]])
    var currentDate = Math.floor(Date.now());
    var dif = currentDate - dateOfBirth
    var ar = dateOfBirth.split("-")
    $('#result').append("<li>'hello:  '" + dif + currentDate + dateOfBirth + "--------" + ar[0] +"</li> ");
  });
});
