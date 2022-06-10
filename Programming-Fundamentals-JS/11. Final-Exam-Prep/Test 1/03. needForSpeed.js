function needForSpeed(input) {
    let n = Number(input.shift());
    let cars = {};
    let commands = {
        Drive,
        Refuel,
        Revert
    };

    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split('|');
        let model = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);
        let car = {
            mileage,
            fuel
        }
        cars[model] = car;
    }

    while (input[0] !== 'Stop') {
        let [command, model, distance, neededFuel] = input.shift().split(' : ');
        commands[command](model, distance, neededFuel);
    }

    function Drive(model, distance, neededFuel) {
        if (cars[model].fuel >= neededFuel) {
            cars[model].mileage += Number(distance);
            cars[model].fuel -= Number(neededFuel);
            console.log(`${model} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);
        } else {
            console.log("Not enough fuel to make that ride");
        }

        if (cars[model].mileage >= 100000) {
            delete cars[model];
            console.log(`Time to sell the ${model}!`);
        }

        return;
    }

    function Refuel(model, refillAmount) {
        let maxFuel = 75 - cars[model].fuel;
        let currentFuel = cars[model].fuel;
        cars[model].fuel += Number(refillAmount);
        if ((currentFuel + Number(refillAmount)) <= 75) {
            console.log(`${model} refueled with ${refillAmount} liters`);
        }

        if (cars[model].fuel > 75) {
            console.log(`${model} refueled with ${maxFuel} liters`);
            cars[model].fuel = 75;
        }
    }

    function Revert(model, distance) {
        cars[model].mileage -= Number(distance);
        if (cars[model].mileage < 10000) {
            cars[model].mileage = 10000;
        } else {
            console.log(`${model} mileage decreased by ${distance} kilometers`);
        }
        return;
    }

    for (let obj in cars) {
        console.log(`${obj} -> Mileage: ${cars[obj].mileage} kms, Fuel in the tank: ${cars[obj].fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
console.log('------');
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);
