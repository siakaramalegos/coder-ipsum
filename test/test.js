const expect = require('chai').expect
const phrase = require('../index').phrase
const sentence = require('../index').sentence
const paragraph = require('../index').paragraph

describe('coder-ipsum', function () {
  describe('#phrase() with no input', function () {
    it('should return a string', function () {
      expect(phrase()).to.be.a('string');
    });
    it('should have a length greater than 3', function () {
      expect(phrase()).to.have.lengthOf.above(3);
    });
  });
  describe('#phrase() with integer input', function () {
    it('should return a string', function () {
      expect(phrase(3)).to.be.a('string');
    });
    it('should have a length greater than 3', function () {
      expect(phrase(3)).to.have.lengthOf.above(3);
    });
  });
  describe('#sentence() with no input', function () {
    it('should return a string', function () {
      expect(sentence()).to.be.a('string');
    });
    it('should have a length greater than 4', function () {
      expect(sentence()).to.have.lengthOf.above(4);
    });
  });
  describe('#sentence() with integer input', function () {
    it('should return a string', function () {
      expect(sentence(3)).to.be.a('string');
    });
    it('should have a length greater than 4', function () {
      expect(sentence(3)).to.have.lengthOf.above(4);
    });
    it('should have a period at the end', function () {
      const testSentence = sentence(3)
      const lastCharacter = testSentence[testSentence.length - 1]
      const numPeriods = (lastCharacter.match(/\./g) || []).length
      expect(numPeriods).to.equal(1);
    });
  });
  describe('#paragraph() with no input', function () {
    it('should return a string', function () {
      expect(paragraph()).to.be.a('string');
    });
    it('should have a length greater than 12', function () {
      expect(paragraph()).to.have.lengthOf.above(12);
    });
  });
  describe('#paragraph() with integer input', function () {
    it('should return a string', function () {
      expect(paragraph(3)).to.be.a('string');
    });
    it('should have a length greater than 12', function () {
      expect(paragraph(3)).to.have.lengthOf.above(12);
    });
    it('should have at least three periods for three sentences', function () {
      // Some words have a period.
      const numPeriods = (paragraph(3).match(/\./g) || []).length
      expect(numPeriods).to.be.at.least(3);
    });
  });
});
