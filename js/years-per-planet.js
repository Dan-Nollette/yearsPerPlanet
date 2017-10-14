export class TimeDifference {
  constructor(dateOfBirth) {
    const dobArrary = dateOfBirth.split('-');
    const dob = new Date([dobArrary[0], dobArrary[1], dobArrary[2]]);
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
