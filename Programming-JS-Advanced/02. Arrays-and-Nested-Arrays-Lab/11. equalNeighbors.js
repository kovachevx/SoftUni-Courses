function equalNeighbors(inputMatrix) {

    let counter = 0;

    for (let i = 0; i < inputMatrix.length; i++) {
        for (let j = 0; j < inputMatrix[0].length; j++) {

            if (i !== inputMatrix.length - 1) {
                if (inputMatrix[i][j] === inputMatrix[i + 1][j]) {
                    counter++;
                }
            }

            if (inputMatrix[i][j] === inputMatrix[i][j + 1]) {
                counter++;
            }
        }
    }

    return counter;
}

equalNeighbors([
    ['2', '3', '4', '7', '1'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
console.log('-----');
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);
console.log('-----');
equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]);