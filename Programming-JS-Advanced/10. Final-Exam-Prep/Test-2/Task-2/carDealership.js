class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || !Number.isInteger(horsepower) || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        let car = {
            model,
            horsepower,
            price,
            mileage
        }
        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(c => c.model === model);

        if (car === undefined) {
            throw new Error(`${model} was not found!`);
        }

        let soldPrice = 0;

        if (car.mileage <= desiredMileage) {
            soldPrice = car.price;
            car.soldPrice = soldPrice;
        } else if (car.mileage - desiredMileage <= 40000) {
            soldPrice = car.price * 0.95;
            car.soldPrice = soldPrice;
        } else if (car.mileage - desiredMileage > 40000) {
            soldPrice = car.price * 0.90;
            car.soldPrice = soldPrice;
        }

        let indexOfCar = this.availableCars.indexOf(car);
        this.availableCars.splice(indexOfCar, 1);
        delete car.mileage;
        delete car.price;
        this.totalIncome += Number(soldPrice.toFixed(2));
        this.soldCars.push(car);
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }
        let message = ['-Available cars:'];
        for (let car of this.availableCars) {
            message.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        }
        return message.join('\n');
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let message = [];
        message.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        message.push(`-${this.soldCars.length} cars sold:`);

        for (let car of this.soldCars) {
            message.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        }
        return message.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
