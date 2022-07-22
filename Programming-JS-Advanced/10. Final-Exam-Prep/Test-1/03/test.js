const { expect } = require('chai');
const { flowerShop } = require('./flowerShop');

describe('Flowershop', () => {
    describe('calcPriceOfFlowers', () => {
        it('happy path', () => {
            expect(flowerShop.calcPriceOfFlowers('Lily', 2, 5)).to.equal('You need $10.00 to buy Lily!')
        });
        it('Throwing errors for invalid inputs', () => {
            expect(() => flowerShop.calcPriceOfFlowers(123, 2, 5)).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('Lily', 'hi', 5)).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('Lily', 2, 'hi')).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers()).to.throw("Invalid input!");
            expect(() => flowerShop.calcPriceOfFlowers('Lily', 2)).to.throw("Invalid input!");
        });
    });

    describe('checkFlowersAvailable', () => {
        it('Checking functionality', () => {
            expect(flowerShop.checkFlowersAvailable('Lily', ['Lily', 'Rose', 'Orchid'])).to.equal('The Lily are available!');
            expect(flowerShop.checkFlowersAvailable('Lily', ['Rose', 'Orchid'])).to.equal('The Lily are sold! You need to purchase more!');
        });
    });

    describe('sellFlowers', () => {
        it('Testing with invalid parameters', () => {
            expect(() => flowerShop.sellFlowers('hi', 2)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(2, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['Lily', 'Rose', 'Orchid'], 'Lily')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers()).to.throw('Invalid input!');
        });
        it('Testing with valid parameters', () => {
            expect(flowerShop.sellFlowers(['Lily', 'Rose', 'Orchid'], 1)).to.equal('Lily / Orchid');
        });
    });
});