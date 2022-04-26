function luckyNumbers(input) {

    let num = Number(input[0]);
    let luckyNum = "";

    for (let i = 1; i <= 9; i++) {
        for (let x = 1; x <= 9; x++) {
            for (let y = 1; y <= 9; y++) {
                for (let z = 1; z <= 9; z++) {
                    if ((i + x) === (y + z) && num % (i + x) === 0) {
                        luckyNum += "" + i + x + y + z + " ";
                    }
                }
            }
        }
    }
    console.log(luckyNum);
}
luckyNumbers([7]);