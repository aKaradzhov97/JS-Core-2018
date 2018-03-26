let expect = require('chai').expect;
let createList = require('../02. Add Swap Shift Left Right in List/02. Add Swap Shift Left Right in List');

describe('Function tests', function () {
    let list;
    beforeEach(() => {
        list = createList();
    })
    describe('00. Funcs exist', function () {
        it('01. add()', function () {
            expect(list.hasOwnProperty('add')).to.be.equal(true);
        });
        it('02. shiftLeft()', function () {
            expect(list.hasOwnProperty('shiftLeft')).to.be.equal(true);
        });
        it('03. shiftRight()', function () {
            expect(list.hasOwnProperty('shiftRight')).to.be.equal(true);
        });
        it('04. swap()', function () {
            expect(list.hasOwnProperty('swap')).to.be.equal(true);
        });
        it('05. toString()', function () {
            expect(list.hasOwnProperty('toString')).to.be.equal(true);
        });
    });
    describe('01. add works correctly', function () {
        it('01. With string & empty string', function () {
            list.add('');
            list.add('Pesho');
            let result = list.toString();
            expect(result).to.be.equal(', Pesho');
        });
        it('02. With string & number', function () {
            list.add(3);
            list.add(5);
            list.add('Pesho');
            let result = list.toString();
            expect(result).to.be.equal('3, 5, Pesho');
        });
        it('03. With object', function () {
            list.add({});
            list.add(5.5);
            list.add('Pesho');
            let result = list.toString();
            expect(result).to.be.equal('[object Object], 5.5, Pesho');
        });
        it('04. With undefined', function () {
            list.add('Pesho');
            list.add(undefined);
            let result = list.toString();
            expect(result).to.be.equal('Pesho, ');
        });
    });
    describe('02. shiftLeft works correctly', function () {
        it('01. Valid rotation', function () {
            list.add(3);
            list.add(5);
            list.add('Pesho');
            list.shiftLeft();
            let result = list.toString();
            expect(result).to.be.equal(`5, Pesho, 3`);
        });
        it('02. Valid rotation with check', function () {
            list.add(3);
            list.add(5);
            list.add('Pesho');
            let listBeforeRotation = list.toString();
            list.shiftLeft();
            let result = list.toString();
            expect(listBeforeRotation).to.be.equal(`3, 5, Pesho`);
            expect(result).to.be.equal(`5, Pesho, 3`);
        });
    });
    describe('03. shiftRight works correctly', function () {
        it('01. Valid rotation', function () {
            list.add(3);
            list.add(5);
            list.add('Pesho');
            list.shiftRight();
            let result = list.toString();
            expect(result).to.be.equal(`Pesho, 3, 5`);
        });
        it('02. Valid rotation with check', function () {
            list.add(3);
            list.add(5);
            list.add('Pesho');
            let listBeforeRotation = list.toString();
            list.shiftRight();
            let result = list.toString();
            expect(listBeforeRotation).to.be.equal(`3, 5, Pesho`);
            expect(result).to.be.equal(`Pesho, 3, 5`);
        });
    });
    describe('04. swap works correctly', function () {
        it('01. Working case', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.add(5);
            list.add(6);
            list.swap(0, 3);
            let result = list.toString();
            expect(result).to.be.equal(`4, 2, 3, 1, 5, 6`);
        });
        it('02. Returning correct result - true', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.add(5);
            list.add(6);
            expect(list.swap(0, 3)).to.be.equal(true);
            expect(list.swap(3, 0)).to.be.equal(true);
        });
        it('03. Returning correct result - false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.add(5);
            list.add(6);
            expect(list.swap(-1, 3)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3, 4, 5, 6');

            expect(list.swap(1, 10)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3, 4, 5, 6');

            expect(list.swap(0, 6)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3, 4, 5, 6');

            expect(list.swap(6, 0)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3, 4, 5, 6');

            expect(list.swap(3, 3)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3, 4, 5, 6');

            expect(list.swap(3)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3, 4, 5, 6');

            expect(list.swap("one", "two")).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3, 4, 5, 6');

            expect(list.swap(1, 2.5)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3, 4, 5, 6');

            expect(list.swap(2.9, 1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3, 4, 5, 6');
        });
    });
    describe('05. toString', function () {
        it('01. Test toString', function () {
            list.add('5');
            list.add('pesho');
            expect(list.toString()).to.be.equal('5, pesho');
        });
    });
});