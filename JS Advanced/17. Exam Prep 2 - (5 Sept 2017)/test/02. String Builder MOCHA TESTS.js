let expect = require('chai').expect;
let StringBuilder = require('../02. String Builder/02. String Builder');

describe('StringBuilder tests', function () {
    let sb;
    beforeEach(function () {
        sb = new StringBuilder();
    })
    describe('01. Check for existense of all funcs', function () {
        it('00. Test for array', function () {
            expect(Array.isArray(sb._stringArray)).to.be.equal(true);
        });
        it('01. Append exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.equal(true);
        });
        it('02. Prepend exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.equal(true);
        });
        it('03. InsertAt exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.equal(true);
        });
        it('04. Remove exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.equal(true);
        });
        it('05. ToString exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });
    describe('02. Initialize works', function () {
        it('01. Initialized with empty string', function () {
            expect(sb._stringArray.join('')).to.be.equal('');
        });
        it('02. Initialized with empty string', function () {
            let initParam = () => sb = new StringBuilder('hello');
            expect(initParam).to.not.throw();
        });
        it('03. Initialized with number', function () {
            expect(() => {sb = new StringBuilder(3)}).to.throw(TypeError);
        });
    });
    describe('03. Append works', function () {
        it('01. Append With string', function () {
            sb.append('test ');
            sb.append('test2');
            expect(sb._stringArray.join('')).to.be.equal('test test2');
        });
        it('02. Append string with char array', function () {
            sb.append('test ');
            expect(sb._stringArray.length).to.be.equal(5);
        });
        it('03. Append error', function () {
            expect(() => {sb.append({})}).to.throw(TypeError);
        });
    });
    describe('04. Prepend works', function () {
        it('01. Prepend With string', function () {
            sb.prepend('test ');
            sb.prepend('test2');
            expect(sb._stringArray.join('')).to.be.equal('test2test ');
        });
        it('02. Prepend string with char array', function () {
            sb.prepend('test ');
            expect(sb._stringArray.length).to.be.equal(5);
        });
        it('03. Prepend error', function () {
            expect(() => {sb.prepend({})}).to.throw(TypeError);
        });
    });
    describe('05. InsertAt works', function () {
        it('01. InsertAt With string', function () {
            sb.append('test');
            sb.insertAt('L', 1);
            expect(sb._stringArray.join('')).to.be.equal('tLest');
        });
        it('02. InsertAt string with char array', function () {
            sb.prepend('test');
            sb.insertAt('L', 1);
            expect(sb._stringArray.length).to.be.equal(5);
        });
        it('03. InsertAt error', function () {
            expect(() => {sb.insertAt({}, 1)}).to.throw(TypeError);
        });
    });
    describe('06. Remove & toString works', function () {
        it('01. Remove With string', function () {
            sb.append('teeest');
            sb.remove(1, 2);
            expect(sb.toString()).to.be.equal('test');
        });
        it('02. InsertAt string with char array', function () {
            sb.append('teeest');
            sb.remove(1, 2);
            expect(sb._stringArray.length).to.be.equal(4);
        });
    });
});