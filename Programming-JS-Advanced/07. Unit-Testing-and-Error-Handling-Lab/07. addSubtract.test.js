const { expect } = require('chai');
const { createCalculator } = require('./07. addSubtract');

describe('Add & Subtract Calculator', () => {
    it('Returns an object containing functions', () => {
        expect(typeof createCalculator()).to.equal('object');
        expect(typeof createCalculator().add).to.equal('function');
        expect(typeof createCalculator().subtract).to.equal('function');
        expect(typeof createCalculator().get).to.equal('function');
    });
    it('Internal value cannot be modified from the outside', () => {
        let calc = createCalculator();
        expect(calc.value += 4).to.be.NaN;
    });
    it('The add & functions get calculate & return correct sum', () => {
        let calc = createCalculator();
        calc.add('5')
        expect(calc.get()).to.equal(5);
    });
    it('The subtract & functions get calculate & return correct sum', () => {
        let calc = createCalculator();
        calc.subtract(5)
        expect(calc.get()).to.equal(-5);
    });
    it('Checking whether functions accept only numeric parameters', () => {
        let calc = createCalculator();
        calc.add('g');
        expect(calc.get()).to.be.NaN;
    });
});