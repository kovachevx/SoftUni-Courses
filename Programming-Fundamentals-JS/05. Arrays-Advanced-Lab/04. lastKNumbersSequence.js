function lastKNumbersSequence(seqLength, k) {

    let newArr = [1];

    for (let i = 0; i < seqLength - 1; i++) {
        let sum = 0;
        let sliced = newArr.slice(-k);

        for (let element of sliced) {
            sum += element;
        }
        newArr.push(sum);
    }

    console.log(newArr.join(' '));
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);