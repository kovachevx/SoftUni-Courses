function circleAreaAndPerimeter(r) {
    let area = Math.PI * Math.pow(r, 2);
    let P = 2 * Math.PI * r;
    console.log(area.toFixed(2));
    console.log(P.toFixed(2));
}
circleAreaAndPerimeter(35.875);