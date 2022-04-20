function minNumber(input) {

    let index = 0;
    let command = input[index];
    let num = 0;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        num = Number(command);
        if (num < minNum) {
            minNum = num;
        }
        command = input[index];
        index++;
    }

    console.log(minNum);
}
minNumber([-20, -15, -10, "Stop"]);