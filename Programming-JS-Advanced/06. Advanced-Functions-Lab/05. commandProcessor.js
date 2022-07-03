function commandProcessor() {
    let myString = '';
    return {
        append: (inputString) => myString += inputString,
        removeStart: (n) => myString = myString.slice(n),
        removeEnd: (n) => myString = myString.slice(0, -n),
        print: () => console.log(myString),
    }
}
commandProcessor();


let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();