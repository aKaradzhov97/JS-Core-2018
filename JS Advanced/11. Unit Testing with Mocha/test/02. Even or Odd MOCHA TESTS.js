let expect = require('chai').expect;
let isOddOrEven = require('../02. Even or Odd');

// SUBMIT FOLLOWING >>>
describe('Even Or Odd', function () {
    it('01. Number test', function () {
        expect(isOddOrEven(13)).to.equal(undefined, 'Function did not return the correct result!');
    })
    it('02. Object test', function () {
        expect(isOddOrEven({name: "Pesho"})).to.equal(undefined, 'Function did not return the correct result!');
    })
    it('03. Empty String test', function () {
        expect(isOddOrEven('')).to.equal('even', 'Function did not return the correct result!');
    })
    it('04. Odd test', function () {
        expect(isOddOrEven('Pesho')).to.equal('odd', 'Function did not return the correct result!');
    })
    it('05. Odd test 2', function () {
        expect(isOddOrEven('Pesho 2')).to.equal('odd', 'Function did not return the correct result!');
    })
    it('06. Even test', function () {
        expect(isOddOrEven('haha')).to.equal('even', 'Function did not return the correct result!');
    })
    it('07. Even test 2', function () {
        expect(isOddOrEven('heh woww')).to.equal('even', 'Function did not return the correct result!');
    })
})