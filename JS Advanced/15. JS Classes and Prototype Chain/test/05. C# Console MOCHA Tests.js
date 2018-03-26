const expect = require('chai').expect;
const Console = require('../05. C# Console');

//SUBMIT The following:
describe('Console Tests', function () {
    it('01. WriteLine String input', function () {
        expect(Console.writeLine('test')).to.be.equal('test');
    });
    it('02. WriteLine Object input', function () {
        let obj = {
            name: 'Pesho'
        }
        expect(Console.writeLine(obj)).to.be.equal(JSON.stringify(obj));
    });
    it('03. WriteLine String input', function () {
        expect(Console.writeLine(`{0}, {1}, {2}`, 1, 2, 3)).to.be.equal(`1, 2, 3`);
    });
    it('04. WriteLine should throw TypeError', function () {
        expect(() => {Console.writeLine([], 1, 2)}).to.throw(TypeError);
    });
    it('05. WriteLine should throw RangeError', function () {
        expect(() => {Console.writeLine(`{0}`, 1, 2)}).to.throw(RangeError);
    });
    it('06. WriteLine should throw RangeError', function () {
        expect(() => {Console.writeLine(`{10}`, 1, 2)}).to.throw(RangeError);
    });
});