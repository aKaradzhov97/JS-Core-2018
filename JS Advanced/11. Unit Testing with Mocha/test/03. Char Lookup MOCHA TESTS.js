let expect = require('chai').expect;
let lookupChar = require('../03. Char Lookup');

// SUBMIT FOLLOWING >>>
describe('Lookup Char', function () {
    it('01. Not string input', function () {
        expect(lookupChar(10, 0)).to.equal(undefined, `Invalid input string!`);
    })
    it('02. Not valid number input', function () {
        expect(lookupChar('Pesho', 'pa')).to.equal(undefined, `Invalid input index!`);
    })
    it('03. Invalid index', function () {
        expect(lookupChar('Pesho', 10)).to.equal('Incorrect index');
    })
    it('04. Invalid index 2', function () {
        expect(lookupChar('Pesho', -5)).to.equal('Incorrect index');
    })
    it('05. Floating point number', function () {
        expect(lookupChar('Pesho', 2.5)).to.equal(undefined, `Incorrect index`);
    })
    it('06. Index = string.length', function () {
        expect(lookupChar('Pesho', 5)).to.equal('Incorrect index');
    })
    it('07. Correct values', function () {
        expect(lookupChar('Pesho', 2)).to.equal('s');
    })
    it('08. Correct values 2', function () {
        expect(lookupChar('vollmilch', 4)).to.equal('m');
    })
})