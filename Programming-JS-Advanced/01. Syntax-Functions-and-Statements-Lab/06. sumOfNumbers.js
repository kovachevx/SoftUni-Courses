function sumOfNumbers(m, n) {
    let sum = 0;
    for (let i = Number(m); i <= Number(n); i++) {
        sum += i;
    }
    console.log(sum);
}
sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');