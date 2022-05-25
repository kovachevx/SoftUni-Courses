function bombNumbers(numSequence, bombPower) {
    let specialNumber = Number(bombPower[0]);
    let power = Number(bombPower[1]);
    let indexOfBomb = numSequence.indexOf(specialNumber);

    while (indexOfBomb !== -1) {
        let startIndex = Math.max(0, (indexOfBomb - power));
        numSequence.splice(startIndex, (power * 2 + 1));
        indexOfBomb = numSequence.indexOf(specialNumber);
    }

    let remainingSum = 0;
    for (let element of numSequence) {
        remainingSum += element;
    }

    console.log(remainingSum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);