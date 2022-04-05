function pets(input) {

    let daysGone = Number(input[0]);
    let foodLeft = Number(input[1]);
    let KGDogFoodPerDay = Number(input[2]);
    let KGCatFoodPerDay = Number(input[3]);
    let GTurtleFoodPerDay = Number(input[4]);

    let neededFood = (daysGone * (KGCatFoodPerDay + KGDogFoodPerDay + GTurtleFoodPerDay / 1000));
    let diff = Math.abs(foodLeft - neededFood);

    if (foodLeft >= neededFood) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }

}
pets([5, 10, 2.1, 0.8, 321]);