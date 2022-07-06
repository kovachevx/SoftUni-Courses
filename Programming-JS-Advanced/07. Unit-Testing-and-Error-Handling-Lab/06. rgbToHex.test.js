const { expect } = require('chai');
const { rgbToHexColor } = require('./06. rgbToHex')

describe('RGB to Hex', () => {
    it('works with valid parameters', () => {
        expect(rgbToHexColor(50, 100, 150)).to.equal('#326496');
    });
    it ('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it ('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('doesn\'t work invalid lower bound', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it('doesn\'t work invalid upper bound', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
    it('doesn\'t work with omitted parameters', () => {
        expect(rgbToHexColor(50, 100)).to.be.undefined;
        expect(rgbToHexColor(50)).to.be.undefined;
    });
    it('doesn\'t work with string parameters', () => {
        expect(rgbToHexColor(50, 12, 'hi')).to.be.undefined;
        expect(rgbToHexColor(50, 'hi', 0)).to.be.undefined;
        expect(rgbToHexColor('hi', 12, 0)).to.be.undefined;
    });
    it('doesn\'t work with parameters passed as an array', () => {
        expect(rgbToHexColor([50, 50, 50])).to.be.undefined;
    });
    it('doesn\'t work with non-numeric values', () => {
        expect(rgbToHexColor('50', '123', '200')).to.be.undefined;
    });
});