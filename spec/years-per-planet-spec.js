import { TimeDifference } from './../js/years-per-planet.js';
describe('TimeDifference', function() {
  let dob;
  beforeEach(function() {
    dob = new TimeDifference('1982-08-03')
  });

  it('should test whether a TimeDifference was properly initialized', function() {
    expect(dob.dateOfBirth).toEqual("1982-08-03");
  });

});
