function trainingLab(input){

    let h = Number(input[0]);
    let w = Number(input[1]);

    let hPlaces = Math.floor((h * 100 ) / 120);
    let wPlaces = Math.floor((w * 100 - 100) / 70);

    let totalPlaces = wPlaces * hPlaces - 3;

    console.log(totalPlaces);
}

trainingLab([8.4, 5.2]);