function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    let rent = 0;

    if (season === "Spring") {
        if (fishermanCount <= 6) {
            rent = 3000 * 0.90;
        } else if (fishermanCount > 6 && fishermanCount <= 11) {
            rent = 3000 * 0.85;
        } else if (fishermanCount > 11) {
            rent = 3000 * 0.75;
        }
    } else if (season === "Summer" || season === "Autumn") {
        if (fishermanCount <= 6) {
            rent = 4200 * 0.90;
        } else if (fishermanCount > 6 && fishermanCount <= 11) {
            rent = 4200 * 0.85;
        } else if (fishermanCount > 11) {
            rent = 4200 * 0.75;
        }
    } else if (season === "Winter") {
        if (fishermanCount <= 6) {
            rent = 2600 * 0.90;
        } else if (fishermanCount > 6 && fishermanCount <= 11) {
            rent = 2600 * 0.85;
        } else if (fishermanCount > 11) {
            rent = 2600 * 0.75;
        }
    }

    if (fishermanCount % 2 === 0 && season !== "Autumn") {
        rent = rent * 0.95;
    }

    let diff = Math.abs(budget - rent);

    if (budget >= rent) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}
fishingBoat([2000, "Winter", 13]);