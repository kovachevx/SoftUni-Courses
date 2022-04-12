function vacation(input){

    let budget = Number(input[0]);
    let season = input[1];
    let accomocationType;
    let location;
    let price = 0;

    if(budget <= 1000){
        accomocationType = "Camp";
        if(season === "Summer"){
            location = "Alaska";
            price = budget * 0.65;
        } else if (season === "Winter"){
            location = "Morocco";
            price = budget * 0.45;
        }
    } else if (budget > 1000 && budget <= 3000){
        accomocationType = "Hut";
        if(season === "Summer"){
            location = "Alaska";
            price = budget * 0.80;
        } else if (season === "Winter"){
            location = "Morocco";
            price = budget * 0.60;
        }
    } else if (budget > 3000){
        accomocationType = "Hotel";
        price = budget * 0.90;
        if(season === "Summer"){
            location = "Alaska";
        } else if (season === "Winter"){
            location = "Morocco";
        }
    }
console.log(`${location} - ${accomocationType} - ${price.toFixed(2)}`);
}
vacation([800, 'Summer']);