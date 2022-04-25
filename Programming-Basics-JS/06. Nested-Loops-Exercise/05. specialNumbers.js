function specialNumbers(input) {

    let num = Number(input[0]);
    let specialNumber = "";

    for (let i = 1; i <= 9; i++) {
        for (let x = 1; x <= 9; x++) {
            for (let y = 1; y <= 9; y++) {
                for (let z = 1; z <= 9; z++) {
                    if (num % i === 0 && num % x === 0 && num % y === 0 && num % z === 0) {
                        specialNumber += "" + i + x + y + z + " ";
                    }
                }
            }
        }
    }
    console.log(specialNumber);
}
specialNumbers([3])