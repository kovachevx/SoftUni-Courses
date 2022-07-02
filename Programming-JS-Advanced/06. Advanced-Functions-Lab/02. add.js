function solution(num) {
    function add(newNumber) {
        return Number(num) + Number(newNumber);
    };
    return add;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log('-----');
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));