function carFactory(wantedCar) {

    const engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    const carriages = [{ type: 'hatchback', color: wantedCar.color }, { type: 'coupe', color: wantedCar.color }];
    const wheelsize = wantedCar.wheelsize % 2 === 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;

    const car = {
        model: wantedCar.model,
        engine: engines.filter(e => e.power >= wantedCar.power)[0],
        carriage: carriages.filter(c => c.type === wantedCar.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }

    return car;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});


// function carFactory(wantedCar) {

//     const car = { model: wantedCar.model };

//     const engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
//     const carriages = [{ type: 'hatchback', color: wantedCar.color }, { type: 'coupe', color: wantedCar.color }];
//     const wheelsize = wantedCar.wheelsize % 2 === 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;

//     for (let i = 0; i < engines.length; i++) {
//         if (engines[i].power >= wantedCar.power) {
//             car.engine = engines[i];
//             break;
//         }
//     }

//     for (let i = 0; i < carriages.length; i++) {
//         if (wantedCar.carriage === 'hatchback') {
//             car.carriage = carriages[0];
//         } else {
//             car.carriage = carriages[1];
//         }
//     }

//     car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

//     return car;
// }
// carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// });
// carFactory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// });