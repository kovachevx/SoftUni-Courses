function printNthElement(arr) {
    let step = arr[arr.length - 1]
    let res = '';

    for (let i = 0; i < arr.length - 1; i += Number(step)) {
        res += arr[i] + ' ';
    }

    console.log(res);
}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
