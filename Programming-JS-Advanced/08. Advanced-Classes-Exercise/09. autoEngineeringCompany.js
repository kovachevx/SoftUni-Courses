function autoEngineeringCompany(inputArray) {
    let cars = {};
    for (let line of inputArray) {
        let [brand, model, qty] = line.split(' | ');
        qty = Number(qty);
        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = {};
        }

        if (!cars[brand].hasOwnProperty(model)) {
            cars[brand][model] = qty;
        } else {
            cars[brand][model] += qty;
        }
    }

    for (let car in cars) {
        console.log(car);
        for (let model in cars[car]) {
            console.log(`###${model} -> ${cars[car][model]}`)
        }
    }

}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);