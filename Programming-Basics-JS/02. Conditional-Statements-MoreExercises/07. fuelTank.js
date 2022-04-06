function fuelTank(input){

    let typeFuel = input[0];
    let currentLiters = input[1];

    if (currentLiters < 25){
        switch(typeFuel){
            case 'Diesel': console.log('Fill your tank with diesel!'); break;
            case 'Gasoline': console.log('Fill your tank with gasoline!'); break;
            case 'Gas': console.log('Fill your tank with gas!'); break;
            default: console.log('Invalid fuel!'); break;
        }
    
    } else {
        switch(typeFuel){
            case 'Diesel': console.log('You have enough diesel.'); break;
            case 'Gasoline': console.log('You have enough gasoline.'); break;
            case 'Gas': console.log('You have enough gas.'); break;
            default: console.log('Invalid fuel!'); break;

    }
}

}
fuelTank(["Gasoline", 24])