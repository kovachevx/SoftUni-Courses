function dishwasher(input) {

    let index = 0;
    let bottles = Number(input[index]);
    let mlDetergent = bottles * 750;
    index++;
    let cycle = 0;
    let dishCounter = 0;
    let potCounter = 0;
    let toBeWashed = input[index];

    while (toBeWashed !== "End") {
        cycle++;
        let utensils = Number(toBeWashed);
        if (cycle <= 2) {
            dishCounter += utensils;
            mlDetergent -= (5 * utensils);
        }
        if (cycle > 2) {
            potCounter += utensils;
            mlDetergent -= (15 * utensils);
            cycle = 0;
        }
        if (mlDetergent < 0) {
            break;
        }
        index++
        toBeWashed = input[index];
    }

    if (mlDetergent >= 0) {
        console.log("Detergent was enough!");
        console.log(`${dishCounter} dishes and ${potCounter} pots were washed.`);
        console.log(`Leftover detergent ${mlDetergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(mlDetergent)} ml. more necessary!`);
    }
}
dishwasher([1, 10, 15, 10, 12, 13, 30]);