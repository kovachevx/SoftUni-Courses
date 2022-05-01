function solve(numbers) {

    let sum = 0;
    let cycles = numbers;

    for (let i = 1; i <= cycles; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            cycles++;
        }
    }

    console.log(`Sum: ${sum}`);

}

solve(3);