let expect = require('chai').expect;
let Sumator = require('../02. Sumator Class/02. Sumator Class');

describe('Sumator Class Unit Tests', function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    })
    describe('00. If class contains all functions', function () {
        it('01. Test check data prop existence', function () {
            expect(sumator.data !== undefined).to.equal(true);
        });
        it('02. Test func add in proto', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        });
        it('03. Test func sumNums in proto', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });
        it('04. Test func removeByFilter in proto', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });
        it('05. Test func toString in proto', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });

    });
    it('01. Test for data length is empty', function () {
        expect(sumator.data.length).to.be.equal(0);
    });
    describe('01. Sumator add() tests', function () {
        it('01. Add only numbers', function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            expect(sumator.toString()).to.be.equal('5, 4, 3');
        });
        it('02. Add only strings', function () {
            sumator.add('Kiro');
            sumator.add('Pesho');
            sumator.add('Gosho');
            expect(sumator.data.join(', ')).to.be.equal('Kiro, Pesho, Gosho');
        });
        it('03. Add only objects', function () {
            sumator.add({name: 'Kiro'});
            sumator.add({});
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object]');
        });
        it('04. Add number, string & object', function () {
            sumator.add(5);
            sumator.add('Pesho');
            sumator.add({name: 'Tosho'});
            expect(sumator.data.join(', ')).to.be.equal('5, Pesho, [object Object]');
        });
    });
    describe('02. Sumator sumNums() tests', function () {
        it('01. Add only numbers', function () {
            sumator.add(5);
            sumator.add(10);
            sumator.add(15);
            expect(sumator.sumNums()).to.be.equal(30);
        });
        it('02. Add only strings', function () {
            sumator.add("p");
            sumator.add("esh");
            sumator.add("o");
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it('03. Add only objects', function () {
            sumator.add({name: 'Kiro'});
            sumator.add({name: 'Pesho'});
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it('04. Add number, string, object', function () {
            sumator.add(5);
            sumator.add('Kiro');
            sumator.add({name: 'Pesho'});
            expect(sumator.sumNums()).to.be.equal(5);
        });
    });
    describe('03. Sumator removeByFilter()', function () {
        it('01. Removes items', function () {
            for (var i = 0; i <= 10; i++) {
                sumator.add(i);
            }
            sumator.removeByFilter((x) => x % 2 !== 0);
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10');
        });
        it('02. Doesnt removes items', function () {
            for (var i = 1; i <= 5; i++) {
                sumator.add(i);
            }
            sumator.removeByFilter((x) => x > 5);
            expect(sumator.data.join(', ')).to.be.equal('1, 2, 3, 4, 5');
        });
        it('03. Throws exception', function () {
            for (var i = 1; i <= 5; i++) {
                sumator.add(i);
            }
            expect(() => sumator.removeByFilter(undefined)).to.throw();
        });
    });
    describe('04. Sumator toString()', function () {
        it('01. With items in array', function () {
            sumator.add(4);
            sumator.add('Gosho');
            expect(sumator.toString()).to.be.equal('4, Gosho');
        });
        it('02. Without items in array', function () {
            expect(sumator.toString()).to.be.equal('(empty)');
        });
    });
});