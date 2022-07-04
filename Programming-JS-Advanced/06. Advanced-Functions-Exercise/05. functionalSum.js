function functionalSum(n) {
    const innerFunction = function (a) {
        n += a;
        return innerFunction;
    };
    innerFunction.toString = function () {
        return n;
    }

    return innerFunction;
}

console.log(functionalSum(1).toString());
console.log(functionalSum(1)(6)(-3).toString());