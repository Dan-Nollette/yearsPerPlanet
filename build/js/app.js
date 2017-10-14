(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {
  $('#years-per-planet-form').submit(function (event) {
    event.preventDefault();
    var dateOfBirth = $('#dateOfBirth').val();
    var lifeExpectancy = $('#lifeExpectancy').val();
    var timePeriod = new TimeDifference(dateOfBirth, lifeExpectancy);
    var ar = dateOfBirth.split("-");
    var earthAge = timePeriod.earthYears();
    $('#result').append('<p>You entered ' + dateOfBirth + '. That\'s ' + earthAge + ' Earth years, ' + timePeriod.mercuryYears(earthAge) + ' years on Mercury, ' + timePeriod.venusYears(earthAge) + ' years on Venus, ' + timePeriod.marsYears(earthAge) + ' years on Mars, ' + timePeriod.jupiterYears(earthAge) + ' years on Jupiter.</p><p>Given your life expectancy you can expectancy you can expect to live ' + (lifeExpectancy - earthAge) + ' Earth years, ' + timePeriod.mercuryYears(lifeExpectancy - earthAge) + ' Mercury years, ' + timePeriod.venusYears(lifeExpectancy - earthAge) + ' Venus years, ' + timePeriod.marsYears(lifeExpectancy - earthAge) + ' Mars years, ' + timePeriod.jupiterYears(lifeExpectancy - earthAge) + ' Jupiter years.</p>');
    if (earthAge > lifeExpectancy) {
      $('#result').append("<p>Negative life expectancy? Uh-oh... Don't worry about it too much. I ate some expired cream corn the other day, and it was almost palatable</p>");
    }
  });
});

var TimeDifference = exports.TimeDifference = function () {
  function TimeDifference(dateOfBirth, lifeExpectancy) {
    _classCallCheck(this, TimeDifference);

    this.lifeExpectancy = lifeExpectancy;
    var dobArrary = dateOfBirth.split('-');
    var dob = new Date([dobArrary[0], dobArrary[1], dobArrary[2]]);
    var dobNum = Math.floor(dob);
    this.present = Math.floor(Date.now());
    this.differenceInSeconds = this.present - dobNum;
  }

  _createClass(TimeDifference, [{
    key: 'earthYears',
    value: function earthYears() {
      return this.differenceInSeconds / 31557600000;
    }
  }, {
    key: 'mercuryYears',
    value: function mercuryYears(earthYears) {
      return earthYears / .24;
    }
  }, {
    key: 'venusYears',
    value: function venusYears(earthYears) {
      return earthYears / .62;
    }
  }, {
    key: 'marsYears',
    value: function marsYears(earthYears) {
      return earthYears / 1.88;
    }
  }, {
    key: 'jupiterYears',
    value: function jupiterYears(earthYears) {
      return earthYears / 11.86;
    }
  }]);

  return TimeDifference;
}();

},{}]},{},[1]);
