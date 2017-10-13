$(document).ready(function() {
  $('#years-per-planet-form').submit(function(event) {
    event.preventDefault();
    var dateOfBirth = $('#dateOfBirth').val();
    var timePeriod = new TimeDifference(dateOfBirth);
    var ar = dateOfBirth.split("-")
    $('#result').append(`<p>You entered ${dateOfBirth}. That's ${timePeriod.earthYears()} Earth years, ${timePeriod.mercuryYears()} years on Mercury, ${timePeriod.venusYears()} years on Venus, ${timePeriod.marsYears()} years on Mars, ${timePeriod.jupiterYears()} years on Jupiter.</p>`);
  });
});
