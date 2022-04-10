function operationsBetweenNumber(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let sum = 0;

    switch (operator) {
        case "+": sum = n1 + n2; break;
        case "-": sum = n1 - n2; break;
        case "*": sum = n1 * n2; break;
        case "/": sum = n1 / n2; break;
        case "%": sum = n1 % n2; break;
    }
    if (operator === "+" || operator === "-" || operator === "*") {
        if (sum % 2 === 0) {
            console.log(`${n1} ${operator} ${n2} = ${sum} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${sum} - odd`);
        }
    }
    if ((operator === "/" || operator === "%") && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operator === "/" && n2 !== 0) {
        console.log(`${n1} ${operator} ${n2} = ${sum.toFixed(2)}`);
    } else if (operator === "%" && n2 !== 0) {
        console.log(`${n1} ${operator} ${n2} = ${sum}`);
    }

}

operationsBetweenNumber([10, 0, "/"])