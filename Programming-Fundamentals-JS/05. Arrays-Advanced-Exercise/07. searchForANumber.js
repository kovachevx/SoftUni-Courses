function searchForANumber(numbers, specialNumbers) {
    let numsToTake = Number(specialNumbers[0]);
    let numsToDelete = Number(specialNumbers[1]);
    let soughtNum = Number(specialNumbers[2]);

    let splicedArray = numbers.splice(0, numsToTake);
    splicedArray.splice(0, numsToDelete);
    let matchCount = 0;

    for (let element of splicedArray) {
        if (element === soughtNum) {
            matchCount++;
        }
    }

    console.log(`Number ${soughtNum} occurs ${matchCount} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
