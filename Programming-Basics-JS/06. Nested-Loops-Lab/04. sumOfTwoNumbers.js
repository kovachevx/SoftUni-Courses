function sumOfTwoNumbers(input) {

    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let targetNumber = Number(input[2]);
    let combinationsCounter = 0;
    let isFound = false;

    for (let i = startNumber; i <= endNumber; i++) {
        for (let j = startNumber; j <= endNumber; j++) {
            combinationsCounter++;
            if (i + j === targetNumber) {
                console.log(`Combination N:${combinationsCounter} (${i} + ${j} = ${targetNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinationsCounter} combinations - neither equals ${targetNumber}`);
    }
}
sumOfTwoNumbers(["1", "10", "5"]);