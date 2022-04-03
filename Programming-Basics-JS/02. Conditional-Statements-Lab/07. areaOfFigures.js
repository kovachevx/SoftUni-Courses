function areaOfFigures(input) {

    let shape = input[0];
    let side1 = Number(input[1]);
    let side2 = Number(input[2]);

    if (shape === "square") {
        console.log((side1 * side1).toFixed(3));
    } else if (shape === "rectangle") {
        console.log((side1 * side2).toFixed(3));
    } else if (shape === "circle") {
        console.log((side1 * side1 * Math.PI).toFixed(3));
    } else if (shape === "triangle") {
        console.log((side1 * side2 / 2).toFixed(3))
    }

}
areaOfFigures(["square", 5, 3])