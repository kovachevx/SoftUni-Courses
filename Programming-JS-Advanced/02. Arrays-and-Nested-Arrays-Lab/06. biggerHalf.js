function biggerHalf(inputArray) {

    let finalArray = [];
    inputArray.sort((a, b) => a - b);

    if (inputArray.length % 2 === 0) {
        for (let i = inputArray.length / 2; i < inputArray.length; i++) {
            finalArray.push(inputArray[i]);
        }
    } else {
        for (let j = (inputArray.length - 1) / 2; j <= inputArray.length; j++) {
            finalArray.push(inputArray[j]);
        }
    }

    return finalArray;

}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);