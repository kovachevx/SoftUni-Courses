function rotateArray(inputArray, rotations) {
    for (let i = 0; i < rotations; i++) {
        inputArray.unshift(inputArray.pop());
    }
    console.log(inputArray.join(' '));
}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2);
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);