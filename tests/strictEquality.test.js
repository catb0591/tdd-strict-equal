const expect = require('chai').expect

// Import the function for testing
const strictEquals = require('../strictEquality')

// const describe = require('mocha').describe
// const it = require('chai').it

describe('strictEquality', () => {
  describe('strictEquals', () => {
    it('return true if the values are strictly equal to each other', () => {
      // setting up the data
      const value1 = (5)
      const value2 = (5)

      // running test
      const result = strictEquals(value1, value2)

      // stating assertions
      expect(result).to.equal('true')
    })
    it('return true if the strings are strictly equal to eachother', () => {
      // setting up the data
      const value1 = ('These are the same')
      const value2 = ('These are the same')

      // running test
      const result = strictEquals(value1, value2)

      // stating assertions
      expect(result).to.equal('true')
    })
    it('return false if the type of values are not strictly equal to each other', () => {
      // setting up the data
      const value1 = (5)
      const value2 = ('5')

      // running test
      const result = strictEquals(value1, value2)

      // stating assertions
      expect(result).to.equal('false')
    })
    it('return false is the values are not strictly equal', () => {
      // setting up the data
      const value1 = (5)
      const value2 = (10)

      // running test
      const result = strictEquals(value1, value2)

      // stating assertions
      expect(result).to.equal('false')
    })
    it('return false is the strings are not strictly equal', () => {
      // setting up the data
      const value1 = ('These are not equal')
      const value2 = ('These are equal')

      // running test
      const result = strictEquals(value1, value2)

      // stating assertions
      expect(result).to.equal('false')
    })
  })
})
