const { expect } = require('chai');
const { testNumbers } = require('./testNumbers');

describe("Test Numbers", () => {
    describe("sumNumber(num1, num2)", () => {
        it("happy path", () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00');
        });
        it("Ivalid paramaters", () => {
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers('1', '2')).to.be.undefined;
            expect(testNumbers.sumNumbers(1)).to.be.undefined;
            expect(testNumbers.sumNumbers()).to.be.undefined;
        });
    });
    describe('numberChecker(input)', () => {
        it('Happy path', () => {
            expect(testNumbers.numberChecker(2)).to.equal("The number is even!");
            expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
            expect(testNumbers.numberChecker('1')).to.equal("The number is odd!");
            expect(testNumbers.numberChecker(-1)).to.equal("The number is odd!");

        });
        it('Invalid parameters ', () => {
            expect(() => testNumbers.numberChecker('asd')).to.throw('The input is not a number!');
        });
    })
    describe('averageSumArray', () => {
        it('Happy path', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
        it('Invalid parameters ', () => {
            expect(testNumbers.averageSumArray([1, 'a', 3])).to.be.NaN
        });
    });

});
