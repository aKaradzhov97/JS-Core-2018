let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

let sharedObject = require('../05. Shared Object');

//SUBMIT ONLY THE FOLLOWING >>>
describe('Shared Object', function () {
    // if says $ is not defined >>>
    before(() => global.$ = $);
    // :)
    describe('01. Initial Value tests', function () {
        it('01. Test name initial value', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('02. Test income initial value', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('02. Change name tests', function () {
        it('01. Empty string test', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('02. Non-Empty string test', function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho', 'Change name test 2 failed!');
        });
        describe('02.1 Name input tests', function () {
            it('02.1.1 Empty string test', function () {
                sharedObject.changeName('Gosho');
                sharedObject.changeName('');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Gosho', 'Change name test 1 failed!');
            });
            it('02.1.1 Non-Empty string test', function () {
                sharedObject.changeName('Pesho');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Pesho', 'Change name test 2 failed!');
            });
        });
    });
    describe('03. Change income tests', function () {
        it('01. String input test', function () {
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });
        it('02. Floating-point number input test', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);
            expect(sharedObject.income).to.be.equal(5, 'Change income test 2');
        });
        it('03. Negative number input test', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-4);
            expect(sharedObject.income).to.be.equal(5, 'Change income test 3');
        });
        it('04. Zero number input test', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5, 'Change income test 4');
        });
        it('05. Positive number input test', function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5, 'Change income test 5');
        });
        describe('03.1 Income input tests', function () {
            it('03.1.1 String input test', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', '03.1.1 String input income test failed!');
            });
            it('03.1.2 Positive number input test', function () {
                sharedObject.changeIncome(5);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', '03.1.2 String input income test failed!');
            });
            it('03.1.3 Floating point number input test', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(2.11);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', '03.1.3 Floating point Number input income test failed!');
            });
            it('03.1.4 Floating point number input test', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-5);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', '03.1.4 Negative Number input income test failed!');
            });
        });
    });
    describe('04. Update name tests', function () {
        it('04.1 Empty string test', function () {
            sharedObject.changeName('Viktor');
            let element = $('#name');
            element.val('');
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('Viktor', '04.1 Empty string test failed!')
        });
        it('04.2 Correct string test', function () {
            sharedObject.changeName('Viktor');
            let element = $('#name');
            element.val('Kiro');
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('Kiro', '04.2 Correct string test failed!')
        });
    });
    describe('05. Update Income tests', function () {
        it('05.1 String input test', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3, '05.1 String input test failed!')
        });
        it('05.2 Floating-point number input test', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val(3.11);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3, '05.2 Floating point number input test failed!')
        });
        it('05.3 Negative number input test', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('-3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3, '05.2 String input test failed!')
        });
        it('05.4 Zero number input test', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3, '05.4 Zero test failed!')
        });
        it('05.5 Positive number input test', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val(5);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5, '05.5 Positive number test failed!')
        });
    });
});