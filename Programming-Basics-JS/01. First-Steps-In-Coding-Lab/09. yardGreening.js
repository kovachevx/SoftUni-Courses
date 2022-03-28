function yardGreening(input){

    let area = Number(input[0]);
    
    let initialPrice = area * 7.61;
    let discount = initialPrice * 0.18;
    let finalPrice = initialPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening([550]);