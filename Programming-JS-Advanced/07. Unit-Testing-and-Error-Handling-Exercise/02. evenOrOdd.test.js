let { expect } = require('chai');
let { isOddOrEven } = require('./02. evenOrOdd');

describe('Even or Odd', () => {
    it('doesn\'t work with invalid parameters', () => {
        expect(isOddOrEven(5)).to.be.undefined
        expect(isOddOrEven(['hello'])).to.be.undefined
    });
    it('works with odd length strings', () => {
        expect(isOddOrEven('hello')).to.equal('odd');
    });
    it('works with even length strings', () => {
        expect(isOddOrEven('hi')).to.equal('even');
    });
    it('work with multiple strings passed in a row', () => {
        expect(isOddOrEven('hi')).to.equal('even');
        expect(isOddOrEven('bye')).to.equal('odd');
        expect(isOddOrEven('ciao')).to.equal('even');
        expect(isOddOrEven('hello')).to.equal('odd');
    })
});