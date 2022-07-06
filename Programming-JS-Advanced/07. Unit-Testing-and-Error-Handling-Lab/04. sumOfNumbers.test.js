const { expect } = require('chai');
const { sum } = require('./04. sumOfNumbers');

describe('sumOfNumbers', () => {
    it('works with array of numbers', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
    it('works with negative numbers', () => {
        expect(sum([-1, -2, -3])).to.equal(-6);
    });
    it('doesn\'t work with string input', () => {
        expect(sum(['hello', 'hi'])).to.be.NaN;
    })
});