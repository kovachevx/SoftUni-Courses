function godzillaVSKong(input) {

    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let clothingPricePerExtra = Number(input[2]);

    let decor = budget * 0.1;
    let totalClothingPrice = extrasCount * clothingPricePerExtra;

    if (extrasCount > 150) {
        totalClothingPrice = totalClothingPrice * 0.9;
    }

    let neededFunds = totalClothingPrice + decor;
    let diff = Math.abs(budget - neededFunds);

    if (budget < neededFunds) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else if (budget >= neededFunds) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}

godzillaVSKong([9587.88, 222, 55.68])