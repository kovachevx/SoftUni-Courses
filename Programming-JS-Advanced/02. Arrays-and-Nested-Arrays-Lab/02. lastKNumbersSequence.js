function lastKNumbersSequence(sequenceLength, k) {

    let sequence = [1];

    for (let i = 0; i < sequenceLength - 1; i++) {
        let sum = 0;
        let kStepElements = sequence.slice(-k);

        for (let element of kStepElements) {
            sum += element;
        }
        sequence.push(sum);
    }

    return sequence;
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);