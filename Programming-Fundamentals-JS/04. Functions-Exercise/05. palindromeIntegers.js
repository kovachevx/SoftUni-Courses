function palindromeIntegers(arr) {

    function isPalindrome(num) {
        let startNum = num;
        let reversedNum = Number(num.toString().split('').reverse().join(''));
        if (startNum === reversedNum) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        console.log(isPalindrome(currentNum));
    }

}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);