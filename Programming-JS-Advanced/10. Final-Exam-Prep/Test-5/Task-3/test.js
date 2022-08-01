const { expect } = require('chai');
const { numberOperations } = require('./03. Number Operations_Resources');

describe("Tests …", function () {
    describe("powNumber", function () {
        it("Happy path", function () {
            expect(numberOperations.powNumber(3)).to.equal(9);
        });
        it("Doesn\'t work with strings", function () {
            expect(numberOperations.powNumber('a')).to.be.NaN;
        });
    });

    describe("numberChecker", function () {
        it("Happy path", function () {
            expect(numberOperations.numberChecker(3)).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker('3')).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(0)).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(-1)).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(123)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('142')).to.equal('The number is greater or equal to 100!');
        });
        it("Throwing errors", function () {
            expect(() => numberOperations.numberChecker('asd')).to.throw('The input is not a number!');
        });
    });

    describe("sumArrays", function () {
        it("Happy path", function () {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.deep.equal([2, 4, 6]);
            expect(numberOperations.sumArrays([1, 2], [1, 2, 3])).to.deep.equal([2, 4, 3]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2])).to.deep.equal([2, 4, 3]);
        });
    });
});