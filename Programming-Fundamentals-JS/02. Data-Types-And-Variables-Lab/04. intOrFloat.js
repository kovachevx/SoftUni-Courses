function intOrFloat(a, b, c) {
    let sum = a + b + c;
    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";
    console.log(sum);
}
intOrFloat(9, 100, 1.10)
intOrFloat(100, 200, 303)

