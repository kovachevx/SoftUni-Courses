function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let sum = 0;
    let place;
    let accomodation;

    if (budget <= 100) {
        place = "Bulgaria"
        if (season === "summer") {
            sum = budget * 0.30;
            accomodation = "Camp"
        } else if (season === "winter") {
            sum = budget * 0.70;
            accomodation = "Hotel"
        }

    } else if (budget <= 1000) {
        place = "Balkans"
        if (season === "summer") {
            sum = budget * 0.40;
            accomodation = "Camp"
        } else if (season === "winter") {
            sum = budget * 0.80;
            accomodation = "Hotel"
        }
    } else if (budget > 1000) {

        place = "Europe"
        sum = budget * 0.90;
        accomodation = "Hotel"
    }

    console.log(`Somewhere in ${place}`)
    console.log(`${accomodation} - ${sum.toFixed(2)}`)
}

journey([1500, "summer"])