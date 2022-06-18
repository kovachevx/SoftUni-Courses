function greatestCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    } else {
        return greatestCommonDivisor(b, a % b);
    }
}
console.log(greatestCommonDivisor(15, 5));
console.log(greatestCommonDivisor(2154, 458));

// function greatestCommonDivisor(a, b) {
//     while (a !== b) {
//         a > b ? a -= b : b -= a;
//     }
//     console.log(a);
// }
// greatestCommonDivisor(15, 5);
// greatestCommonDivisor(2154, 458);