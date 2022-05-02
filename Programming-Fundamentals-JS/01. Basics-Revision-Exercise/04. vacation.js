function vacation(countPeople, typePeople, day) {

    let price = 0;
    let studentsChargeFriday = 8.45;
    let studentsChargeSaturday = 9.80;
    let studentsChargeSunday = 10.46;
    let businessChargeFriday = 10.90;
    let businessChargeSaturday = 15.60;
    let businessChargeSunday = 16;
    let regularChargeFriday = 15;
    let regularChargeSaturday = 20;
    let regularChargeSunday = 22.50;

    if (typePeople === 'Business' && countPeople >= 100) {
        countPeople -= 10;
    }
    switch (typePeople) {
        case 'Students':
            if (day === 'Friday') {
                price = studentsChargeFriday * countPeople;
            } else if (day === 'Saturday') {
                price = studentsChargeSaturday * countPeople;
            } else if (day === 'Sunday') {
                price = studentsChargeSunday * countPeople;
            } break;
        case 'Business':
            if (day === 'Friday') {
                price = businessChargeFriday * countPeople;
            } else if (day === 'Saturday') {
                price = businessChargeSaturday * countPeople;
            } else if (day === 'Sunday') {
                price = businessChargeSunday * countPeople;
            } break;
        case 'Regular':
            if (day === 'Friday') {
                price = regularChargeFriday * countPeople;
            } else if (day === 'Saturday') {
                price = regularChargeSaturday * countPeople;
            } else if (day === 'Sunday') {
                price = regularChargeSunday * countPeople;
            } break;
    }

    if (countPeople >= 30 && typePeople === 'Students') {
        price = price * 0.85;
    }

    if (typePeople === 'Regular' && countPeople >= 10 && countPeople <= 20) {
        price = price * 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}
vacation(40, 'Regular', 'Saturday');