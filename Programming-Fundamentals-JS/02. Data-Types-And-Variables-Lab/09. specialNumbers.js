function specialNumbers(n) {
    for (let num = 1; num <= n; num++) {
        let sum = 0;
        let numAsString = String(num);

        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${num} -> True`);
        } else {
            console.log(`${num} -> False`);
        }

    }
}
specialNumbers(15);