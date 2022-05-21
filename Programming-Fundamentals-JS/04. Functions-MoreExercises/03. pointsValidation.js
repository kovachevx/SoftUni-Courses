function pointsValidation(arrPoints) {

    let x1 = Number(arrPoints[0]);
    let y1 = Number(arrPoints[1]);
    let x2 = Number(arrPoints[2]);
    let y2 = Number(arrPoints[3]);

    function firstPointValidation(arrPoints) {
        let formula1 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
        let f1 = Number.isInteger(formula1);

        if (f1) {
            return `{${x1}, ${y1}} to {0, 0} is valid`;
        } else {
            return `{${x1}, ${y1}} to {0, 0} is invalid`;
        }
    }
    console.log(firstPointValidation(arrPoints));

    function secondPointValidation(arrPoints) {
        let formula2 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
        let f2 = Number.isInteger(formula2);

        if (f2) {
            return `{${x2}, ${y2}} to {0, 0} is valid`;
        } else {
            return `{${x2}, ${y2}} to {0, 0} is invalid`;
        }

    }

    console.log(secondPointValidation(arrPoints));

    function thirdPointValidation(arrPoints) {
        let formula3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        let f3 = Number.isInteger(formula3);

        if (f3) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }

    console.log(thirdPointValidation(arrPoints));
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);