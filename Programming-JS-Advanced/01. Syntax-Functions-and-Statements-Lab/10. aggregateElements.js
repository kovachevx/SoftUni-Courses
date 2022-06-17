function aggregateElements(array) {
    let sum = 0;
    array.forEach(x => sum += x);
    console.log(sum);

    let invertedSum = 0;
    array.forEach(x => invertedSum += 1 / x);
    console.log(invertedSum);

    let concatenation = '';
    array.forEach(x => concatenation += String(x));
    console.log(concatenation);
}
aggregateElements([1, 2, 3]);
console.log('-----');
aggregateElements([2, 4, 8, 16]);