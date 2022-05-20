function passwordValidator(password) {

    let splitPassword = password.split('');

    function isLongEnough(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function isLettersAndDigitsOnly(password) {

        for (let currentCharIndex of splitPassword) {
            let currentChar = currentCharIndex.charCodeAt(0)
            if (
                !(currentChar >= 65 && currentChar <= 90) &&
                !(currentChar >= 97 && currentChar <= 122) &&
                !(currentChar >= 48 && currentChar <= 57)
            ) {
                return false;
            }
        }
        return true;
    }

    function isHavingAtLeast2Digits(password) {
        digitCounter = 0;
        for (let currentCharIndex of splitPassword) {
            let currentChar = currentCharIndex.charCodeAt(0)
            if (currentChar >= 48 && currentChar <= 57) {
                digitCounter++;
            }
        }
        return digitCounter >= 2 ? true : false;
    }

    if (isLongEnough(password) === true && isLettersAndDigitsOnly(password) === true && isHavingAtLeast2Digits(password) === true) {
        console.log('Password is valid');
    }
    if (!isLongEnough(password)) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isLettersAndDigitsOnly(password)) {
        console.log('Password must consist only of letters and digits');
    }
    if (!isHavingAtLeast2Digits(password)) {
        console.log('Password must have at least 2 digits');
    }

}
passwordValidator('m1p#d');