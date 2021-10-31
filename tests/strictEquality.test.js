const expect = require('chai').expect

const strictEquals = require('../strictEquality')

// const describe = require('mocha').describe
// const it = require('chai').it

describe('strictEquality', () => {
  describe('strictEquals', () => {
    it('return true if the values are strictly equal to each other', () => {
      const value1 = (5)
      const value2 = (5)

      const result = strictEquals(value1, value2)

      expect(result).to.equal('true')
    })
    it('return true if the strings are strictly equal to eachother', () => {
      const value1 = ('These are the same')
      const value2 = ('These are the same')

      const result = strictEquals(value1, value2)

      expect(result).to.equal('true')
    })
    it('return false if the type of values are not strictly equal to each other', () => {
      const value1 = (5)
      const value2 = ('5')

      const result = strictEquals(value1, value2)

      expect(result).to.equal('false')
    })
    it('return false if the values are not strictly equal', () => {
      const value1 = (5)
      const value2 = (10)

      const result = strictEquals(value1, value2)

      expect(result).to.equal('false')
    })
    it('return false is the strings are not strictly equal', () => {
      const value1 = ('These are not equal')
      const value2 = ('These are equal')

      const result = strictEquals(value1, value2)

      expect(result).to.equal('false')
    })
  })
})
