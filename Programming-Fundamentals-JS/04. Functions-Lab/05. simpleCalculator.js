function simpleCalculator(a, b, operator) {

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operator) {
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
    }

}
console.log(simpleCalculator(5, 5, 'multiply'));
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');