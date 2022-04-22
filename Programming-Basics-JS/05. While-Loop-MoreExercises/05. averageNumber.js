function averageNumber(input) {

    let index = 0;
    let totalNumbers = Number(input[index]);
    let totalSum = 0;

    for (let i = 1; i <= totalNumbers; i++) {
        index++;
        let currentNumber = Number(input[index]);
        totalSum += currentNumber;
    }

    let averageNumber = totalSum / totalNumbers;
    console.log(averageNumber.toFixed(2));
}
averageNumber([3, 82, 43, 22])