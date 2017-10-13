import { TimeDifference } from './../js/years-per-planet.js';
describe('TimeDifference', function() {
  var dob;
  beforeEach(function() {
    dob = new TimeDifference('1982-08-03')
  });

  it('should test whether a TimeDifference was properly initialized', function() {
    expect(dob.dateOfBirth).toEqual("1982-08-03");
  });

  // it('should test whether a Character has the right hitpoints', function() {
  //   expect(reusableCharacter.hitPoints).toEqual(9);
  // });
  // it('should test whether a Character has the right attributes', function() {
  //   expect(reusableCharacter.strength).toEqual(3);
  //   expect(reusableCharacter.intellect).toEqual(1);
  //   expect(reusableCharacter.dexterity).toEqual(1);
  //   expect(reusableCharacter.stamina).toEqual(3);
  //   expect(reusableCharacter.level).toEqual(1);
  // });
  //
  // it('should test whether a character can cast correctly on another object', function() {
  //   expect(reusableCharacter.hitPoints).toEqual(9);
  //   monster.cast(reusableCharacter)
  //   expect(reusableCharacter.hitPoints).toEqual(6);
  // });
  //
  // it('should test whether a character can strike correctly on another object', function() {
  //   expect(reusableCharacter.hitPoints).toEqual(9);
  //   monster.strike(reusableCharacter)
  //   expect(reusableCharacter.hitPoints).toEqual(8);
  // });
  //
  // it('should test whether a character can sneak correctly on another object', function() {
  //   expect(reusableCharacter.hitPoints).toEqual(9);
  //   monster.sneak(reusableCharacter)
  //   expect(reusableCharacter.hitPoints).toEqual(8);
  // });
});
