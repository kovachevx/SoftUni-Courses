function sameNumbers(num) {
    let numToString = String(num);
    let sum = 0;
    let isSame = true;
    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
        if (numToString[0] !== numToString[i]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);