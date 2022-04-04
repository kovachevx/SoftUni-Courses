function pipesInPool(input) {

    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);

    let fillingP1 = P1 * H;
    let fillingP2 = P2 * H;
    let totalFill = fillingP1 + fillingP2;
    let percentFilled = ((totalFill / V) * 100).toFixed(2);
    let onePercent = (totalFill / 100);

    let contributionP1 = (fillingP1 / onePercent).toFixed(2);
    let contributionP2 = (fillingP2 / onePercent).toFixed(2);

    let diff = Math.abs(totalFill - V);

    if (percentFilled <= 100) {
        console.log(`The pool is ${percentFilled}% full. Pipe 1: ${contributionP1}%. Pipe 2: ${contributionP2}%.`);
    } else {
        console.log(`For ${H.toFixed(2)} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    }

}

pipesInPool([100, 100, 100, 2.5]);

