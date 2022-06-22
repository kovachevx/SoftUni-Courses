function extractIncreasingSubsequence(inputArray) {
    let biggestNum = Number(inputArray[0]);
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= biggestNum) {
            result.push(inputArray[i]);
            biggestNum = inputArray[i];
        }
    }
    return result;
}
extractIncreasingSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
extractIncreasingSubsequence([1,
    2,
    3,
    4]);