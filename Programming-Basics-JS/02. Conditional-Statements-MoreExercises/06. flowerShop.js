function flowerShop(input) {

    let magloniaCount = Number(input[0]);
    let zyumbyulCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let presentPrice = Number(input[4]);

    let moneyEarned = magloniaCount * 3.25 + zyumbyulCount * 4 + roseCount * 3.50 + cactusCount * 8;
    let profit = moneyEarned * 0.95;
    let diff = Math.abs(profit - presentPrice);

    if (profit >= presentPrice) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }

}
flowerShop([15, 7, 5, 10, 100])