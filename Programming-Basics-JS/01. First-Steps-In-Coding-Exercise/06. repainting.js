function repainting(input){

    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let hoursWork = Number(input[3]);

    let materialsPrice = (nylonQuantity + 2) * 1.50 + (paintQuantity + (paintQuantity * 0.1)) * 14.50 + thinnerQuantity * 5 + 0.40;
    let workCost = hoursWork * ((materialsPrice * 0.3));

    let finalPrice = materialsPrice + workCost;

    console.log(finalPrice);


}

repainting([10, 11, 4, 8]);