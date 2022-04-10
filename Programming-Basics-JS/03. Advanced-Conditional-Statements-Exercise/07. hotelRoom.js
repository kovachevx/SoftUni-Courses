function hotelRoom(input) {

    let month = input[0];
    let stayCount = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    if (month === "May" || month === "October") {

        priceStudio = stayCount * 50;
        priceApartment = stayCount * 65;

        if (stayCount > 7 && stayCount <= 14) {
            priceStudio = priceStudio * 0.95;
        } else if (stayCount > 14) {
            priceStudio = priceStudio * 0.70;
        }

    } else if (month === "June" || month === "September") {

        priceStudio = stayCount * 75.20;
        priceApartment = stayCount * 68.70;

        if (stayCount > 14) {
            priceStudio = priceStudio * 0.80;
        }

    } else if (month === "July" || month === "August") {

        priceStudio = stayCount * 76;
        priceApartment = stayCount * 77;
    }

    if (stayCount > 14) {
        priceApartment = priceApartment * 0.90;
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}

hotelRoom(["August", 20])