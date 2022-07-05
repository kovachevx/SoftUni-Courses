function calculator() {
    let num1 = null;
    let num2 = null;
    let result = null;

    return {
        init,
        add,
        subtract
    }

    function init(s1, s2, resultSelector) {
        num1 = document.querySelector(s1);
        num2 = document.querySelector(s2);
        result = document.querySelector(resultSelector);
    }

    function add() {
        result.value = Number(num1.value) + Number(num2.value);
    }

    function subtract() {
        result.value = Number(num1.value) - Number(num2.value);

    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');

