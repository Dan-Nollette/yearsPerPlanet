import { TimeDifference } from './../js/years-per-planet.js';
describe('TimeDifference', function() {
  let dob;
  beforeEach(function() {
    dob = new TimeDifference('1982-08-03')
  });

  it('should test whether a TimeDifference was properly initialized', function() {
    expect(dob.differenceInSeconds).toEqual(dob.present - Math.floor(new Date([1982, 8, 3])));
  });

  it('should test whether a TimeDifference returns the correct number of Earth years', function() {
    expect(dob.earthYears() > 35 && dob.earthYears() < 35.2).toEqual(true);
  });

});
