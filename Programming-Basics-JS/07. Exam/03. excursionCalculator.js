function excursionCalculator(input) {

    let people = Number(input[0]);
    let season = input[1];
    let price = 0;

    switch (season) {
        case 'spring':
            if (people <= 5) {
                price = 50.00 * people;
            } else {
                price = 48.00 * people;
            } break;
        case 'summer':
            if (people <= 5) {
                price = (48.50 * people) * 0.85;
            } else {
                price = (45.00 * people) * 0.85;
            } break;
        case 'autumn':
            if (people <= 5) {
                price = 60.00 * people;
            } else {
                price = 49.50 * people;
            } break;
        case 'winter':
            if (people <= 5) {
                price = (86.00 * people) * 1.08;
            } else {
                price = (85.00 * people) * 1.08;
            } break;
    }
    console.log(`${price.toFixed(2)} leva.`);
}

excursionCalculator([20, "winter"]);