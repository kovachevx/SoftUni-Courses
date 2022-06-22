function nthElement(inputArray, step) {
    return inputArray.filter((x, i) => i % step === 0);
}
nthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2);
nthElement(['dsa',
    'asd',
    'test',
    'tset'],
    2
);