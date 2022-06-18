function fruit(fruitType, weightInGrams, pricePerKG) {
    let weightInKG = weightInGrams / 1000;
    let finalPrice = weightInKG * pricePerKG;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruitType}.`);
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35);