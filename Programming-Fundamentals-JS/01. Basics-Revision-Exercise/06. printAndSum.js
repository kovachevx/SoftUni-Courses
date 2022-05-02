function printAndSum(startNum, endNum) {

    let sum = 0;
    let leString = "";

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        leString += i + " ";
    }

    console.log(leString);
    console.log(`Sum: ${sum}`);

}
printAndSum(50, 60);