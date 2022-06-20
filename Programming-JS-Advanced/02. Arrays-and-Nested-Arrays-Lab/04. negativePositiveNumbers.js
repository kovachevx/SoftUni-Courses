function negativePositiveNumbers(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < 0) {
            result.unshift(inputArray[i]);
        } else {
            result.push(inputArray[i])
        }
    }
    console.log(result.join('\n'));
}
negativePositiveNumbers(['7', '-2', '8', '9']);
negativePositiveNumbers(['3', '-2', '0', '-1']);