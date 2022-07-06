// const { expect } = require('chai');
// const { isSymmetric } = require('./05. checkForSymmetry');

// describe('isSymmetric', () => {
//     it('doesn\'t work with non-array input', () => {
//         expect(isSymmetric(1, 2, 2, 1)).to.be.false;
//     });
//     it('works with symmetric numeric arrays', () => {
//         expect(isSymmetric([1, 2, 2, 1])).to.be.true;
//     });
//     it('checks non-symmetric array inputs', () => {
//         expect(isSymmetric([1, 2, 3, 4])).to.be.false;
//     });
//     it('works with odd-length symmetric array inputs', () => {
//         expect(isSymmetric([1, 2, 1])).to.be.true;
//     });
//     it('returns false otherwise', () => {
//         expect(isSymmetric(['hi', 'hello'])).to.be.false;
//     });
//     it('works with symetric string array', () => {
//         expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
//     });
//     it('returns false for type mismatched elements', () => {
//         expect(isSymmetric([1, 2, '1'])).to.be.false;
//     });
// })


const { expect } = require('chai');
const { rgbToHexColor } = require('./06. rgbToHex');

define('RGB to Hex', () => {
    it('works with valid parameters', () => {
        expect(rgbToHexColor(50, 100, 150)).to.equal('#326496');
    })
});
