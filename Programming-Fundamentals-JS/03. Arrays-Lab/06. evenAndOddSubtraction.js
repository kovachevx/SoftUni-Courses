function subtraction(arr) {

    let oddSum = 0;
    let evenSum = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += Number(num);
        } else {
            oddSum += Number(num);
        }
    }
    console.log(evenSum - oddSum);
}
subtraction([1, 2, 3, 4, 5, 6]);
subtraction([3, 5, 7, 9]);
subtraction([2, 4, 6, 8, 10]);