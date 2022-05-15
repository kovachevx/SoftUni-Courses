function equalSums(arr) {
    let leftSide = 0;
    let rightSide = 0;
    let isEqual = false;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        leftSide = 0;
        rightSide = 0;
        for (let y = 0; y < i; y++) {
            leftSide += arr[y];
        }
        for (let x = i + 1; x < arr.length; x++) {
            rightSide += arr[x];
        }
        if (leftSide === rightSide) {
            isEqual = true;
            index = i;
        }
    }

    if (isEqual) {
        console.log(index);
    } else {
        console.log('no');
    }

}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
