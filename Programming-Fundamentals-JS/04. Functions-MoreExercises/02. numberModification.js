function numberModification(num) {

    function numberCheck(num) {
        let sum = 0;
        let numAsString = String(num);

        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);
        }

        let finalResult = sum / numAsString.length;

        return finalResult;
    }

    function finalModification(num) {
        while (numberCheck(num) < 5) {
            num += "9";
            numberCheck(num);
        }

        return num;
    }

    console.log(finalModification(num));
}
numberModification(101);
numberModification(5835);
