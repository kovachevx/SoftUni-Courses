function petShop(input){

    let dogFoodAmount = Number(input[0]);
    let catFoodAmount = Number(input[1]);

    let totalPrice = (dogFoodAmount * 2.50) + (catFoodAmount * 4);

    console.log(totalPrice)
}

petShop([10, 5]);