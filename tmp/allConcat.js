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
      $('#result').append("<p>Negative life expectancy? Uh-oh... Don't worry about it too much. I ate some expired cream corn the other day, and it was almost palatable</p>");
    }
  });
});

export class TimeDifference {
  constructor(dateOfBirth, lifeExpectancy) {
    this.lifeExpectancy = lifeExpectancy;
    const dobArrary = dateOfBirth.split('-');
    const dob = new Date([dobArrary[0], dobArrary[1], dobArrary[2]]);
    const dobNum = Math.floor(dob);
    this.present = Math.floor(Date.now());
    this.differenceInSeconds = (this.present - dobNum)
  }

  earthYears() {
    return (this.differenceInSeconds/ 31557600000)  ;
  }

  mercuryYears(earthYears) {
    return earthYears /.24
  }

  venusYears(earthYears) {
    return earthYears /.62
  }

  marsYears(earthYears) {
    return earthYears /1.88
  }

  jupiterYears(earthYears) {
    return earthYears /11.86
  }
}
