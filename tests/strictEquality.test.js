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
    it('return false if the values are not strictly equal to each other', () => {
      // setting up the data
      const value1 = (5)
      const value2 = ('5')

      // running test
      const result = strictEquals(value1, value2)

      // stating assertions
      expect(result).to.equal('false')
    })
  })
})
