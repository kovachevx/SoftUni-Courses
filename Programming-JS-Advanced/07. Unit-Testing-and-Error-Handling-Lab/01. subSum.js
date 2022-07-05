function subSum(arrayInput, startIndex, endIndex) {

    if (!Array.isArray(arrayInput)) {
        return NaN;
    };

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arrayInput.length - 1) {
        endIndex = arrayInput.length - 1;
    }

    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(arrayInput[i]);
    }

    return sum;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);