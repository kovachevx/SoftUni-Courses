function magicMatrices(inputMatrix) {
    let isMagical = true;

    for (let i = 0; i < inputMatrix.length - 1; i++) {
        let firstRowSum = inputMatrix[i].reduce((a, b) => a + b, 0);
        let secondRowSum = inputMatrix[i + 1].reduce((c, d) => c + d, 0);
        let firstColSum = 0;
        let secondColSum = 0;
        if (firstRowSum !== secondRowSum) {
            isMagical = false;
        }
        for (let j = 0; j < inputMatrix.length; j++) {
            firstColSum += inputMatrix[i][j];
            secondColSum += inputMatrix[i + 1][j];
        }
        if (firstColSum !== secondColSum) {
            isMagical = false;
        }
    }
    console.log(isMagical);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0]]);