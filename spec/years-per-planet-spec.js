import { TimeDifference } from './../js/years-per-planet.js';
describe('TimeDifference', function() {
  let dob;
  beforeEach(function() {
    dob = new TimeDifference('1982-08-03')
  });
  // Note: This app is designed to give the age of a person in the years of various planets. Due to the fact that the ages will change over time, the test will eventually fail. They should be flexible enough for initial testing and evaluation of the project.
  it('should test whether a TimeDifference was properly initialized', function() {
    expect(dob.differenceInSeconds).toEqual(dob.present - Math.floor(new Date([1982, 8, 3])));
  });

  it('should test whether a TimeDifference returns the correct number of Mercury years', function() {
    expect(dob.mercuryYears() > 146.6 && dob.mercuryYears() < 148).toEqual(true);
  });

  it('should test whether a TimeDifference returns the correct number of Venus years', function() {
    expect(dob.venusYears() > 56.7 && dob.venusYears() < 57).toEqual(true);
  });

  it('should test whether a TimeDifference returns the correct number of Earth years', function() {
    expect(dob.earthYears() > 35 && dob.earthYears() < 35.2).toEqual(true);
  });

  it('should test whether a TimeDifference returns the correct number of Mars years', function() {
    expect(dob.marsYears() > 18.7 && dob.marsYears() < 19).toEqual(true);
  });

  it('should test whether a TimeDifference returns the correct number of Jupiter years', function() {
    expect(dob.jupiterYears() > 2.95 && dob.jupiterYears() < 3).toEqual(true);
  });
});
