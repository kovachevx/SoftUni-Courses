function sortingNumbers(inputArray) {
    inputArray.sort((a, b) => a - b);
    let result = [];
    while (inputArray.length !== 0) {
        result.push(inputArray.shift());
        result.push(inputArray.pop());
    }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);