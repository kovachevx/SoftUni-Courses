function fuelTankTwo(input){

    let typeFuel = input[0];
    let quantityFuel = Number(input[1]);
    let hasCard = input[2];
    let gasPrice = 0.93;
    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let finalPrice = 0;

    if(hasCard === "Yes"){
        if(quantityFuel >=20 && quantityFuel <= 25){
            
            switch(typeFuel){
            case 'Gas': finalPrice = (((gasPrice - 0.08) * quantityFuel) * 0.92).toFixed(2); break;
            case 'Gasoline': finalPrice = (((gasolinePrice - 0.18) * quantityFuel) * 0.92).toFixed(2); break;
            case 'Diesel': finalPrice = (((dieselPrice - 0.12) * quantityFuel) * 0.92).toFixed(2); break;
        }
    } else if (quantityFuel > 25){
        switch(typeFuel){
            case 'Gas': finalPrice = (((gasPrice - 0.08) * quantityFuel) * 0.90).toFixed(2); break;
            case 'Gasoline': finalPrice = (((gasolinePrice - 0.18) * quantityFuel) * 0.90).toFixed(2); break;
            case 'Diesel': finalPrice = (((dieselPrice - 0.12) * quantityFuel) * 0.90).toFixed(2); break;
    }
 } else if(quantityFuel < 20){
     switch(typeFuel){
        case 'Gas': finalPrice = ((gasPrice - 0.08) * quantityFuel).toFixed(2); break;
        case 'Gasoline': finalPrice = ((gasolinePrice - 0.18) * quantityFuel).toFixed(2); break;
        case 'Diesel': finalPrice = ((dieselPrice - 0.12) * quantityFuel).toFixed(2); break;
 }
}
    } else if(hasCard === 'No'){
        if(quantityFuel >=20 && quantityFuel <= 25){
            switch(typeFuel){
            case 'Gas': finalPrice = ((gasPrice * quantityFuel) * 0.92).toFixed(2); break;
            case 'Gasoline': finalPrice = ((gasolinePrice * quantityFuel) * 0.92).toFixed(2); break;
            case 'Diesel': finalPrice = ((dieselPrice * quantityFuel) * 0.92).toFixed(2); break;
        }
    } else if (quantityFuel > 25){
        switch(typeFuel){
            case 'Gas': finalPrice = ((gasPrice * quantityFuel) * 0.90).toFixed(2); break;
            case 'Gasoline': finalPrice = ((gasolinePrice * quantityFuel) * 0.90).toFixed(2); break;
            case 'Diesel': finalPrice = ((dieselPrice * quantityFuel) * 0.90).toFixed(2); break;
    }
 } else if(quantityFuel < 20){
     switch(typeFuel){
        case 'Gas': finalPrice = (gasPrice * quantityFuel).toFixed(2); break;
        case 'Gasoline': finalPrice = (gasolinePrice * quantityFuel).toFixed(2); break;
        case 'Diesel': finalPrice = (dieselPrice * quantityFuel).toFixed(2); break;
    }
 }
}
    console.log(`${finalPrice} lv.`)
}
fuelTankTwo(['Diesel', 19, 'No'])