let { expect } = require('chai');
let { lookupChar } = require('./03. charLookup');

describe('charLookup', () => {
    it('works with correct parameters', () => {
        expect(lookupChar('hello', 1)).to.equal('e');
    });
    it('doesn\'t work with invalid first parameter', () => {
        expect(lookupChar(2, 3)).to.be.undefined;
    });
    it('doesn\'t work with invalid second parameter', () => {
        expect(lookupChar('hello', 'two')).to.be.undefined;
    });
    it('doesn\'t work with floating-point indexes', () => {
        expect(lookupChar('hello', 3.14)).to.be.undefined;
    });
    it('doesn\'t work with indexes out of upper bound', () => {
        expect(lookupChar('hello', 25)).to.equal('Incorrect index');
    });
    it('doesn\'t work with negative indexes', () => {
        expect(lookupChar('hello', -1)).to.equal('Incorrect index');
    });
});