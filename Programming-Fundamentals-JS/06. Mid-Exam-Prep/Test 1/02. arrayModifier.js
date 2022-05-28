function arrayModifier(inputArray) {

    let initialValues = inputArray.shift().split(' ').map(Number);
    let index = 0;
    let command = inputArray[index].split(' ');
    let action = command[0];

    while (action !== 'end') {

        let index1 = Number(command[1]);
        let index2 = Number(command[2]);
        let firstNum = initialValues[index1];
        let secondNum = initialValues[index2];

        if (action === 'swap') {
            initialValues.splice(index1, 1, secondNum);
            initialValues.splice(index2, 1, firstNum)
        } else if (action === 'multiply') {
            let thirdNum = firstNum * secondNum;
            initialValues.splice(index1, 1, thirdNum);
        } else if (action === 'decrease') {
            let decreased = initialValues.map(x => x - 1);
            initialValues = decreased;
        }

        index++;
        command = inputArray[index].split(' ');
        action = command[0];
    }

    console.log(initialValues.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);