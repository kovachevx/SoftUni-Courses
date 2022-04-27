function secretDoorsLock(input) {

    let numHundreds = Number(input[0]);
    let numTens = Number(input[1]);
    let numUnits = Number(input[2]);

    let a = 0;
    let b = 0;
    let c = 0;

    for (let x = 2; x <= numHundreds; x++) {

        if (x % 2 === 0) {
            a = x;

            for (let y = 2; y <= numTens; y++) {
                if (y < 2 || y > 7) {
                    continue;
                }

                if (y !== 4 && y !== 6) {

                    b = y;

                    for (let z = 2; z <= numUnits; z++) {
                        if (z % 2 === 0) {
                            c = z;
                            console.log(`${a} ${b} ${c}`);
                        }
                    }
                }
            }
        }
    }
}
secretDoorsLock([8, 2, 8]);