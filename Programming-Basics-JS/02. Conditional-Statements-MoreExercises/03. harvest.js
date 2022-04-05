function harvest(input){

    let vineArea = Number(input[0]);
    let grapePerSqM = Number(input[1]);
    let neededLitersWine = Number(input[2]);
    let workersNum = Number(input[3]);

    let grapeForWine = vineArea * 0.4;
    let kgsGrape = grapeForWine * grapePerSqM;
    let producedWine = kgsGrape / 2.5;
    let wineDiff = Math.abs(producedWine - neededLitersWine);
    let winePerWorker = wineDiff / workersNum;

    if (producedWine >= neededLitersWine){
        console.log(`Good harvest this year! Total wine: ${Math.floor(producedWine)} liters.`)
        console.log(`${Math.ceil(wineDiff)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`)
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(wineDiff)} liters wine needed.`)

    }
}

harvest([1020, 1.5, 425, 4])