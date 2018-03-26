let expect = require('chai').expect
const SUM = require('../04. Sum of Numbers');

describe('Sum of Numbers', function () {
    it('01. Sum two numbers test', function () {
        expect(SUM([1, 2])).to.be.equal(3)
    })
    it('02. Sum one number test', function () {
        expect(SUM([10])).to.be.equal(10)
    })
    it('03. Empty array test', function () {
        expect(SUM([])).to.be.equal(0)
    })
    it('04. Floating point & negative numbers test', function () {
        expect(SUM([2.5, 3.5, -1])).to.be.equal(5)
    })
    it('05. Invalid input', function () {
        expect(SUM('invalid data input')).to.be.NaN
    })
})