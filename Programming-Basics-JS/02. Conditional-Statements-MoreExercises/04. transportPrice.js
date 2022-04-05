function transportPrice(input) {

    let distance = Number(input[0]);
    let when = input[1];

    let dayTaxiFare = (0.70 + 0.79 * distance).toFixed(2);
    let nightTaxiFare = (0.70 + 0.90 * distance).toFixed(2);
    let busFare = (0.09 * distance).toFixed(2);
    let trainFare = (0.06 * distance).toFixed(2);

    if (distance < 20) {
        if (when === "day") {
            console.log(dayTaxiFare);
        } else if (when === "night") {
            console.log(nightTaxiFare);

        }
    } else if (distance < 100) {
        console.log(busFare);

    } else if (distance >= 100) {
        console.log(trainFare);
    }

}

transportPrice([180, "day"]);