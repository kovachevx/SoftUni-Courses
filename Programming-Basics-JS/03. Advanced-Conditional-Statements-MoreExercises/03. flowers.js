function flowers(input) {

    let chrysCount = Number(input[0]);
    let roseCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
    let chrysPrice = 0;
    let rosePrice = 0;
    let tulipPrice = 0;
    
    let flowerCount = chrysCount + roseCount + tulipCount;

    if (season === "Spring" || season === "Summer") {
        chrysPrice = 2.00 * chrysCount;
        rosePrice = 4.10 * roseCount;
        tulipPrice = 2.50 * tulipCount;
    } else if (season === "Autumn" || season === "Winter") {
        chrysPrice = 3.75 * chrysCount;
        rosePrice = 4.50 * roseCount;
        tulipPrice = 4.15 * tulipCount;
    }

    let totalPrice = chrysPrice + rosePrice + tulipPrice;

    if (holiday === "Y") {
        totalPrice = totalPrice * 1.15;
    }

    if (season === "Spring" && tulipCount > 7) {
        totalPrice = totalPrice * 0.95;
    } else if (season === "Winter" && roseCount >= 10) {
        totalPrice = totalPrice * 0.90;
    }

    if (flowerCount > 20) {
        totalPrice = totalPrice * 0.80;
    }

    let finalPrice = totalPrice + 2;
    console.log(finalPrice.toFixed(2));

}

flowers([10, 10, 10, "Autumn", "N"])