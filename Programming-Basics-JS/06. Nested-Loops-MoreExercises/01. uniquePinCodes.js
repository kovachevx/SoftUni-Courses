function uniquePinCodes(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    for (let x = 2; x <= num1; x += 2) {
        for (let y = 2; y <= num2; y++) {
            if (y < 2 || y > 7) {
                continue;
            }
            if (y === 4 || y === 6) {
                continue;
            }
            for (let z = 2; z <= num3; z += 2) {
                console.log(`${x} ${y} ${z}`);
            }
        }
    }
}
uniquePinCodes(["3", "5", "5"])