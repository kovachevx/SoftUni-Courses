function factiorialDivision(num, divisionary) {

    function factorialSum(num) {
        let sum = 1;
        for (let i = num; i >= 1; i--) {
            sum *= i
        }
        return sum;
    }

    function division(num, divisionary) {
        return (factorialSum(num) / factorialSum(divisionary)).toFixed(2);
    }

    console.log(division(num, divisionary));
}
factiorialDivision(5, 2);
factiorialDivision(6, 2);