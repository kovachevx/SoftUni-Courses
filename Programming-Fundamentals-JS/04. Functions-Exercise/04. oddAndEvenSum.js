function oddAndEvenSum(num) {

    let finalOddSum = 0;
    let finalEvenSum = 0;
    let numAsString = String(num);
    console.log(`Odd sum = ${oddSum(num)}, Even sum = ${evenSum(num)}`);

    function oddSum(num) {
        for (let i = 0; i < numAsString.length; i++) {
            if (numAsString[i] % 2 != 0) {
                finalOddSum += Number(numAsString[i]);
            }
        }
        return finalOddSum;
    }

    function evenSum(num) {
        for (let i = 0; i < numAsString.length; i++) {
            if (numAsString[i] % 2 == 0) {
                finalEvenSum += Number(numAsString[i]);
            }
        }
        return finalEvenSum;
    }
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);