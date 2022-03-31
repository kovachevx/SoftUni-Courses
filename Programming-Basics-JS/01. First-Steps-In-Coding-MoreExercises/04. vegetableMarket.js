function vegetableMarket(input){

    let vegetablePricePerKg = Number(input[0]);
    let fruitPricePerKg = Number(input[1]);
    let totalVegetableKgs = Number(input[2]);
    let totalFruitKgs = Number(input[3]);

    let vegetablesTotalPrice = vegetablePricePerKg * totalVegetableKgs;
    let fruitsTotalPrice = fruitPricePerKg * totalFruitKgs;

    let totalPriceInBGN = vegetablesTotalPrice + fruitsTotalPrice;
    let totalPriceInEUR = (totalPriceInBGN / 1.94).toFixed(2);

    console.log(totalPriceInEUR);

}

vegetableMarket([0.194, 19.4, 10, 10]);