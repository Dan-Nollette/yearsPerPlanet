$(document).ready(function() {
  $('#years-per-planet-form').submit(function(event) {
    event.preventDefault();
    var dateOfBirth = $('#dateOfBirth').val();
    var timePeriod = new TimeDifference(dateOfBirth);
    var ar = dateOfBirth.split("-")
    $('#result').append(`<p>You entered ${dateOfBirth}. That's ${timePeriod.earthYears()} Earth years, ${timePeriod.mercuryYears()} years on Mercury, ${timePeriod.venusYears()} years on Venus, ${timePeriod.marsYears()} years on Mars, ${timePeriod.jupiterYears()} years on Jupiter.</p>`);
  });
});

export class TimeDifference {
  constructor(dateOfBirth) {
    let dobArrary = dateOfBirth.split('-');
    let dob = new Date([dobArrary[0], dobArrary[1], dobArrary[2]]);
    let dobNum = Math.floor(dob);
    this.present = Math.floor(Date.now());
    this.differenceInSeconds = (this.present - dobNum)
  }

  earthYears() {
    return (this.differenceInSeconds/ 31557600000)  ;
  }

  mercuryYears() {
    return this.earthYears() /.24
  }

  venusYears() {
    return this.earthYears() /.62
  }

  marsYears() {
    return this.earthYears() /1.88
  }

  jupiterYears() {
    return this.earthYears() /11.86
  }
}
