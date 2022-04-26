function lettersCombinations(input) {

    let startLetter = input[0];
    let endLetter = input[1];
    let omittedLetter = input[2];

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let counter = 0;
    let firstNumber = -1;
    let lastNumber = -1;
    let skipNumber = -1;
    let finalString = "";

    for (let i = 0; i <= alphabet.length; i++) {
        if (startLetter === alphabet.charAt(i)) {
            firstNumber = i;
        }
        if (endLetter === alphabet.charAt(i)) {
            lastNumber = i;
        }
        if (omittedLetter === alphabet.charAt(i)) {
            skipNumber = i;
        }
        if (firstNumber !== -1 && lastNumber !== -1 && skipNumber !== -1) {
            break;
        }
    }

    for (let i = firstNumber; i <= lastNumber; i++) {
        if (i === skipNumber) {
            continue;
        }
        for (let j = firstNumber; j <= lastNumber; j++) {
            if (j === skipNumber) {
                continue;
            }
            for (let k = firstNumber; k <= lastNumber; k++) {
                if (k === skipNumber) {
                    continue;
                }
                counter++;
                finalString += alphabet.charAt(i) + alphabet.charAt(j) + alphabet.charAt(k) + " ";
            }
        }
    }
    console.log(finalString + counter);
}
lettersCombinations(["a", "c", "b"]);