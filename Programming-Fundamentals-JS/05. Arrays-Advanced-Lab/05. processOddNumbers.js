function processOddNumbers(arrayInput) {
        return arrayInput
                .filter((x, i) => i % 2)
                .map(x => x * 2)
                .reverse()
                .join(' ');
}
console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));