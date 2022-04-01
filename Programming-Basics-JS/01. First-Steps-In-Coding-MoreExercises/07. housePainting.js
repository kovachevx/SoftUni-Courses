function housePainting(input){

    let xHouseHeight = Number(input[0]);
    let yLengthSideWall = Number(input[1]);
    let hTriangleHeight = Number(input[2]);

    let backwall = xHouseHeight * xHouseHeight;
    let frontwall = (xHouseHeight *xHouseHeight) - (1.2*2);
    let bothBackAndFrontWalls = backwall + frontwall;

    let sidewalls = (yLengthSideWall * xHouseHeight * 2) - (2 * 1.5 * 1.5);

    let houseArea = bothBackAndFrontWalls + sidewalls;
    let greenPaintNeeded = (houseArea / 3.4).toFixed(2);

    let triangleRoofArea = ((xHouseHeight * hTriangleHeight / 2) * 2);
    let sideRoofArea = (2 * xHouseHeight * yLengthSideWall);
    let roofArea = triangleRoofArea + sideRoofArea;

    let redPaintNeeded = (roofArea / 4.3).toFixed(2);

    console.log(greenPaintNeeded);
    console.log(redPaintNeeded);
}

housePainting([6, 10, 5.2]);