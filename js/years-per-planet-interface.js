$(document).ready(function() {
  $('#years-per-planet-form').submit(function(event) {
    event.preventDefault();
    let dateOfBirth = $('#dateOfBirth').val();
    let lifeExpectancy = $('#lifeExpectancy').val();
    let timePeriod = new TimeDifference(dateOfBirth, lifeExpectancy);
    let ar = dateOfBirth.split("-")
    let earthAge = timePeriod.earthYears();
    $('#result').append(`<p>You entered ${dateOfBirth}. That's ${earthAge} Earth years, ${timePeriod.mercuryYears(earthAge)} years on Mercury, ${timePeriod.venusYears(earthAge)} years on Venus, ${timePeriod.marsYears(earthAge)} years on Mars, ${timePeriod.jupiterYears(earthAge)} years on Jupiter.</p><p>Given your life expectancy you can expectancy you can expect to live ${lifeExpectancy - earthAge} Earth years, ${timePeriod.mercuryYears(lifeExpectancy - earthAge)} Mercury years, ${timePeriod.venusYears(lifeExpectancy - earthAge)} Venus years, ${timePeriod.marsYears(lifeExpectancy - earthAge)} Mars years, ${timePeriod.jupiterYears(lifeExpectancy - earthAge)} Jupiter years.</p>`);
    if (earthAge > lifeExpectancy) {
      $('#result').append("<p>Negative life expectancy? Uh-oh... Don't worry about it too much. I ate some expired cream corn the other day, and it was almost palatable.</p>");
    }
  });
});
