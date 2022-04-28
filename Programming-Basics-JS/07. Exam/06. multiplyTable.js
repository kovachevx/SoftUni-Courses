function multiplyTable(input) {

    let num = input[0];

    for (let x = 1; x <= Number(num.charAt(2)); x++) {
        for (let y = 1; y <= Number(num.charAt(1)); y++) {
            for (let z = 1; z <= Number(num.charAt(0)); z++) {
                console.log(`${x} * ${y} * ${z} = ${x * y * z};`);
            }
        }
    }
}
multiplyTable(["222"]);