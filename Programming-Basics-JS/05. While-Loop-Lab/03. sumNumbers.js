function sumNumbers(input) {

    let initialNumber = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < initialNumber) {
        let num = Number(input[index]);
        sum += num;
        index++;
        num = Number(input[index]);
    }

    console.log(sum);

}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])