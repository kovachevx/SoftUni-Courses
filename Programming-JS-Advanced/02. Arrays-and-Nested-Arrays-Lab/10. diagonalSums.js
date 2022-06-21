function diagonalSums(inputMatrix) {

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < inputMatrix.length; i++) {
        for (let j = i; j < inputMatrix.length; j++) {
            mainDiagonalSum += inputMatrix[i][j];
            break;
        }
    }

    for (let i = 0; i < inputMatrix.length; i++) {
        for (let j = (inputMatrix.length - 1 - i); j >= 0; j--) {
            secondaryDiagonalSum += inputMatrix[i][j];
            break;
        }
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

diagonalSums([
    [20, 40],
    [10, 60]]);
console.log('-----');
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);