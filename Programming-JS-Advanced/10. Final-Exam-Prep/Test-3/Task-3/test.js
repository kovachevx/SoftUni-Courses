const { expect } = require('chai');
const { library } = require('./library');

describe('Library', () => {
    describe('calcPriceOfBook', () => {
        it('Happy paths', () => {
            expect(library.calcPriceOfBook('Le Book', 2004)).to.equal(`Price of Le Book is 20.00`);
            expect(library.calcPriceOfBook('Le Book', 1980)).to.equal(`Price of Le Book is 10.00`);
            expect(library.calcPriceOfBook('Le Book', 1975)).to.equal(`Price of Le Book is 10.00`);
            expect(library.calcPriceOfBook('Le Book', -1)).to.equal(`Price of Le Book is 10.00`);
        });

        it('Throws error for invalid inputs', () => {
            expect(() => library.calcPriceOfBook('Le Book', 2004.2)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Le Book', 'Two thousand and two')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(40, 2004)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(40, 1970)).to.throw('Invalid input');
        });
    });


    describe('findBook', () => {
        it('Happy paths', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Le Book')).to.equal('The book you are looking for is not here!');
        });
        it('Throws errors', () => {
            expect(() => library.findBook([], 'Le Book')).to.throw('No books currently available');
        });
    });

    describe('arrangeTheBooks', () => {
        it('Happy paths', () => {
            expect(library.arrangeTheBooks(38)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
        it('Throwing errors', () => {
            expect(() => library.arrangeTheBooks(2.3)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('hi')).to.throw('Invalid input');
        });
    });
});