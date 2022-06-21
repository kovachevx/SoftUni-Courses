function biggestElement(inputMatrix) {
    let newArray = [];
    for (let array of inputMatrix) {
        for (let el of array) {
            newArray.push(el);
        }
    }
    newArray.sort((a, b) => b - a);
    return newArray[0];
}
biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
