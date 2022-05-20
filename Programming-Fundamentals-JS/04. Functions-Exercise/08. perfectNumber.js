function perfectNumber(num) {

    let sum = 0;

    function completeDivision(num) {
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }

    function isPerfect(num) {
        if (completeDivision(num) === num) {
            return "We have a perfect number!";
        } else {
            return "It's not so perfect.";
        }
    }

    console.log(isPerfect(num));
}
perfectNumber(28);
perfectNumber(6);
perfectNumber(1236498);