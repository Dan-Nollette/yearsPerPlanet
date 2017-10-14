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
