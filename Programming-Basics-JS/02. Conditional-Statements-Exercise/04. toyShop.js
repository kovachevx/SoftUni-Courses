function toyShop(input) {

    let excursionPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let toyCount = puzzleCount + dollCount + teddyBearCount + minionCount + truckCount;
    let price = puzzleCount * 2.60 + dollCount * 3 + teddyBearCount * 4.10 + minionCount * 8.20 + truckCount * 2;

    if (toyCount >= 50) {
        price = price * 0.75;
    }

    finalPrice = price * 0.9;
    let diff = Math.abs(finalPrice - excursionPrice);

    if (finalPrice >= excursionPrice) {

        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {

        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);

    }
}

toyShop([320, 8, 2, 5, 5, 1]);