function bikeRace(input) {

    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let trace = input[2];
    let totalJuniorFee = 0;
    let totalSeniorFee = 0;

    switch (trace) {
        case "trail":
            totalJuniorFee = juniorsCount * 5.50;
            totalSeniorFee = seniorsCount * 7;
            break;
        case "cross-country":
            totalJuniorFee = juniorsCount * 8;
            totalSeniorFee = seniorsCount * 9.50;
            break;
        case "downhill":
            totalJuniorFee = juniorsCount * 12.25;
            totalSeniorFee = seniorsCount * 13.75;
            break;
        case "road":
            totalJuniorFee = juniorsCount * 20;
            totalSeniorFee = seniorsCount * 21.50;
            break;
    }

    let total = totalSeniorFee + totalJuniorFee;

    if (trace === "cross-country" && juniorsCount + seniorsCount >= 50) {
        total = total * 0.75;
    }

    total = total * 0.95;
    console.log(total.toFixed(2));
}
bikeRace([30, 25, "cross-country"])