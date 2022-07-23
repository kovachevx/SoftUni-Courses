const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe("rentCar", () => {
    describe("searchCar", () => {
        it("Happy path", function () {
            expect(rentCar.searchCar(['BMW', "Mercedes", "BMW"], "BMW")).to.equal('There is 2 car of model BMW in the catalog!');
            expect(() => rentCar.searchCar(['BMW', "Mercedes", "BMW"], "Lada")).to.throw('There are no such models in the catalog!');
        });
        it("Doesn\'t work with invalid parameters", () => {
            expect(() => rentCar.searchCar(['BMW', 'Mercedes', "BMW"], 2)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar("Cars", 'BMW')).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(3, 'BMW')).to.throw('Invalid input!');
        })
    });

    describe("calculatePriceOfCar", () => {
        it('Hapy path', () => {
            expect(rentCar.calculatePriceOfCar('Toyota', 2)).to.equal('You choose Toyota and it will cost $80!');
            expect(() => rentCar.calculatePriceOfCar('Lada', 2)).to.throw('No such model in the catalog!');
        });
        it("Doesn\'t work with invalid parameters", () => {
            expect(() => rentCar.calculatePriceOfCar(['BMW', 'Mercedes', "BMW"], 2)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar("Cars", 'BMW')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(3, 'BMW')).to.throw('Invalid input!');
        });
    });

    describe("checkBudget", () => {
        it('Happy path', () => {
            expect(rentCar.checkBudget(50, 2, 100)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(50, 2, 150)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(50, 2, 99)).to.equal('You need a bigger budget!');
        });
        it("Doesn\'t work with invalid parameters", () => {
            expect(() => rentCar.checkBudget(1, 2, 'hi')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 'hi', 3)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('hi', 2, 3)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 2)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget()).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 2, 3.5)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 2.5, 3)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1.5, 2, 3)).to.throw('Invalid input!');
        });
    })
});
