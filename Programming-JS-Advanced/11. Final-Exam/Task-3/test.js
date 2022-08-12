const { expect } = require('chai');
const { carService } = require('./03. Car service_Resources');

describe('carService', () => {
    describe('isItExpensive', () => {
        it('Happy paths', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Mirror')).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe('discount', () => {
        it('Happy paths', () => {
            expect(carService.discount(1, 100)).to.equal("You cannot apply a discount");
            expect(carService.discount(2, 100)).to.equal("You cannot apply a discount");
            expect(carService.discount(5, 100)).to.equal("Discount applied! You saved 15$");
            expect(carService.discount(7, 100)).to.equal("Discount applied! You saved 15$");
            expect(carService.discount(8, 100)).to.equal("Discount applied! You saved 30$");
        });
        it('Throwing errors & testing invalid parameters', () => {
            expect(() => carService.discount('a', 5)).to.throw('Invalid input');
            expect(() => carService.discount(5, 'a')).to.throw('Invalid input');
            expect(() => carService.discount(5)).to.throw('Invalid input');
            expect(() => carService.discount()).to.throw('Invalid input');
        });
    });

    describe('partsToBuy', () => {
        it('Happy paths', () => {
            expect(carService.partsToBuy([{ part: "valve", price: 145 }, { part: "spring", price: 5 }], ['valve', 'spring'])).to.equal(150);
            expect(carService.partsToBuy([{ part: "valve", price: 145 }, { part: "spring", price: 5 }], ['spring'])).to.equal(5);
            expect(carService.partsToBuy([{ part: "valve", price: 145 }], ['valve', 'spring'])).to.equal(145);

        });
        it('Throwing errors & testing invalid parameters', () => {
            expect(carService.partsToBuy([], ['windshield'])).to.equal(0);
            expect(carService.partsToBuy([{ part: "valve", price: 145 }], [])).to.equal(0);
            expect(() => carService.partsToBuy('Windshield', ['Windshield'])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(['Windshield'], 'Windshield')).to.throw('Invalid input');
            expect(() => carService.partsToBuy('Windshield', 2)).to.throw('Invalid input');
            expect(() => carService.partsToBuy()).to.throw('Invalid input');
        });
    });
});