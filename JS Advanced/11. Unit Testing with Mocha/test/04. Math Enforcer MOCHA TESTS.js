let expect = require('chai').expect
let mathEnforcer = require('../04. Math Enforcer');

// SUBMIT FOLLOWING >>>
describe('Math Enforcer', function () {
    describe('Add five', function () {
        it('01. String input test', function () {
            let result = mathEnforcer.addFive('test');
            expect(result).to.be.undefined;
        });
        it('02. Positive number input test', function () {
            let result = mathEnforcer.addFive(4);
            expect(result).to.be.equal(9, 'Add five function did not worked correctly!');
        });
        it('03. Negative number input test', function () {
            let result = mathEnforcer.addFive(-4);
            expect(result).to.be.equal(1, 'Add five function did not worked correctly!');
        });
        it('04. Floating-Point number input test', function () {
            let result = mathEnforcer.addFive(2.5);
            expect(result).to.be.closeTo(7.5, 0.01);
        });
    });
    describe('Subtract ten', function () {
        it('01. String input test', function () {
            let result = mathEnforcer.subtractTen('test');
            expect(result).to.be.undefined;
        });
        it('02. Positive number input test', function () {
            let result = mathEnforcer.subtractTen(15);
            expect(result).to.be.equal(5, 'Subtract function did not worked correctly!');
        });
        it('03. Negative number input test', function () {
            let result = mathEnforcer.subtractTen(-4);
            expect(result).to.be.equal(-14, 'Subtract function did not worked correctly!');
        });
        it('04. Floating-Point number input test', function () {
            let result = mathEnforcer.subtractTen(15.15);
            expect(result).to.be.closeTo(5.15, 0.01);
        });
    });
    describe('Sum', function () {
        it('01. String input test', function () {
            let result = mathEnforcer.sum('test', 'hello');
            expect(result).to.be.undefined;
        });
        it('01.1 String input test', function () {
            let result = mathEnforcer.sum(10, 'hello');
            expect(result).to.be.undefined;
        });
        it('01.2 String input test', function () {
            let result = mathEnforcer.sum('test', 10);
            expect(result).to.be.undefined;
        });
        it('02. Positive number input test', function () {
            let result = mathEnforcer.sum(15, 10);
            expect(result).to.be.equal(25, 'Sum function did not worked correctly!');
        });
        it('03. Negative number input test', function () {
            let result = mathEnforcer.sum(-4, -6);
            expect(result).to.be.equal(-10, 'Sum function did not worked correctly!');
        });
        it('04. Floating-Point number input test', function () {
            let result = mathEnforcer.sum(3.15, 6.95);
            expect(result).to.be.closeTo(10.10, 0.01);
        });
    });
});