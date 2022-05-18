function printCertificate(grade, nameArr) {

    if (pass(grade)) {
        printHeader();
        printName(nameArr);
        formatGrade(grade);
    } else {
        console.log(`${nameArr[0]} ${nameArr[1]} does not qualify`);
    }

    function printHeader() {
        console.log('~~~- {@} -~~~');
        console.log('~- Certificate -~');
        console.log('~~~- ~---~ -~~~');
    }

    function printName() {
        console.log(nameArr[0] + ' ' + nameArr[1]);
    }

    function pass() {
        return grade >= 3;
    }

    function formatGrade() {
        if (grade < 3) {
            console.log('Fail (2)');
        } else if (grade < 3.50) {
            console.log(`Poor (${grade.toFixed(2)})`);
        } else if (grade < 4.50) {
            console.log(`Good (${grade.toFixed(2)})`);
        } else if (grade < 5.50) {
            console.log(`Very good (${grade.toFixed(2)})`);
        } else {
            console.log(`Excellent (${grade.toFixed(2)})`);
        }
    }
}

printCertificate(5.25, ['Peter', 'Carter']);