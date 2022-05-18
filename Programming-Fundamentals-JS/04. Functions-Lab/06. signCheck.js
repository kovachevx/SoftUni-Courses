function signCheck(a, b, c) {

    let negativeCounter = 0;

    if (a < 0) negativeCounter++;
    if (b < 0) negativeCounter++;
    if (c < 0) negativeCounter++;

    if (negativeCounter % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);