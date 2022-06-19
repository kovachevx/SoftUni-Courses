function validityChecker(x1, y1, x2, y2) {

    let firstPoint = Math.sqrt((x1 - 0) ** 2 + (0 - y1) ** 2);

    if (Number.isInteger(firstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let secondPoint = Math.sqrt((0 - x2) ** 2 + (y2 - 0) ** 2);

    if (Number.isInteger(secondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let finalPoint = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    if (Number.isInteger(finalPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);