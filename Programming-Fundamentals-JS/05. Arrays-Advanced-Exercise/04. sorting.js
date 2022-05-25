function sorting(inputArray) {
    let newArr = [];
    let sortedArr = inputArray.sort((a, b) => a - b);
    let necessaryLength = sortedArr.length;

    for (let i = 0; i < necessaryLength; i++) {
        let bigNum = sortedArr.pop();
        newArr.push(bigNum);
        let smallNum = sortedArr.shift();
        newArr.push(smallNum);
    }

    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);