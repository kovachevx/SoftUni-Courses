function triangleOfNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let line = "";
        for (let y = 1; y <= i; y++) {
            line += i;
            if (y !== i) {
                line += " ";
            }
        }
        console.log(line);
    }

}
triangleOfNumbers(3);