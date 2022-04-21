function coins(input) {

    let sum = Number(input[0]);
    let coinCounter = 0;
    let alteredSum = Math.floor(sum * 100);

    while (alteredSum > 0) {
        if (alteredSum >= 200) {
            alteredSum -= 200;
            coinCounter++;
        } else if (alteredSum >= 100) {
            alteredSum -= 100;
            coinCounter++;
        } else if (alteredSum >= 50) {
            alteredSum -= 50;
            coinCounter++;
        } else if (alteredSum >= 20) {
            alteredSum -= 20;
            coinCounter++;
        } else if (alteredSum >= 10) {
            alteredSum -= 10;
            coinCounter++;
        } else if (alteredSum >= 5) {
            alteredSum -= 5;
            coinCounter++;
        } else if (alteredSum >= 2) {
            alteredSum -= 2;
            coinCounter++;
        } else if (alteredSum === 1) {
            alteredSum -= 1;
            coinCounter++;
        }
    }
    console.log(coinCounter);
}
coins(["0.56"]);