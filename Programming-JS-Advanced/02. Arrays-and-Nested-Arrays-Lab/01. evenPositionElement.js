function evenPositionElement(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i += 2) {
        result.push(inputArray[i]);
    }
    console.log(result.join(' '))
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);