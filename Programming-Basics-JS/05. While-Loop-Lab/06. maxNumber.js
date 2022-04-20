function maxNumber(input) {

    let index = 0;
    let command = input[index];
    let num = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        num = Number(command);
        if (num > maxNum) {
            maxNum = num;
        }
        command = input[index];
        index++;
    }
    console.log(maxNum);
}
maxNumber(input);

