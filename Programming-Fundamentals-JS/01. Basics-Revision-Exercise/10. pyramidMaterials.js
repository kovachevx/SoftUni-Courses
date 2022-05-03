function pyramidMaterials(base, increment) {

    let requiredStone = 0;
    let requiredMarble = 0;
    let requiredLapisLazuli = 0;
    let gold = 0;
    let steps = 0;
    let stepCounter = 0;

    while (base >= 1) {
        stepCounter++;
        steps++;
        if (base > 2) {

            let innerLayer = (base - 2) * (base - 2) * increment;

            if (steps % 10 === 5) {
                let lapisLazuli = increment * (base * base) - innerLayer;
                requiredLapisLazuli += lapisLazuli
                steps = 0;
            } else {
                let marble = increment * (base * base) - innerLayer;
                requiredMarble += marble;
            }
            requiredStone += innerLayer;
        }
        if (base === 1 || base === 2) {
            gold = base * increment * base;
            break;
        }
        base -= 2;
    }

    let height = stepCounter * increment;

    console.log(`Stone required: ${Math.ceil(requiredStone)}`);
    console.log(`Marble required: ${Math.ceil(requiredMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(requiredLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}

pyramidMaterials(12, 1);