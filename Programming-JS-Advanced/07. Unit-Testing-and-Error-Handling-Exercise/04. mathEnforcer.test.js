let { expect } = require('chai');
let { mathEnforcer } = require('./04. mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('works with positive numbers', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('works with negative numbers', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('works with floating-point numbers', () => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
        it('doesn\'t work with invalid parameters', () => {
            expect(mathEnforcer.addFive('hi')).to.be.undefined;
        });
    });
    describe('subtractTen', () => {
        it('works with positive numbers', () => {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
        });
        it('works with negative numbers', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
        it('works with floating-point numbers', () => {
            expect(mathEnforcer.subtractTen(12.55)).to.be.closeTo(2.55, 0.01);
        });
        it('doesn\'t work with invalid parameters', () => {
            expect(mathEnforcer.subtractTen('hi')).to.be.undefined;
        });
    });
    describe('sum', () => {
        it('works with positive numbers', () => {
            expect(mathEnforcer.sum(5, 3)).to.equal(8);
        });
        it('works with negative numbers', () => {
            expect(mathEnforcer.sum(-5, -3)).to.equal(-8);
        });
        it('works with floating-point numbers', () => {
            expect(mathEnforcer.sum(3.14, 2.11)).to.be.closeTo(5.25, 0.01);
        });
        it('doesn\'t work with invalid first parameter', () => {
            expect(mathEnforcer.sum('hi', 2)).to.be.undefined;
        });
        it('doesn\'t work with invalid second parameter', () => {
            expect(mathEnforcer.sum(1, 'hi')).to.be.undefined;
        });
        it('doesn\'t work with omitted parameter', () => {
            expect(mathEnforcer.sum(1)).to.be.undefined;
        });
    });
});