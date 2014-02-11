'use strict';
var expect = require('expect.js')
  , Spicy = require('../lib')
  ;

describe('Spicy', function () {

  describe("Constructor", function () {

    it('should create a new Spicy', function (dn) {
      var spicy = new Spicy();
      expect(spicy).to.be.ok();

      dn();
    });
  });
});