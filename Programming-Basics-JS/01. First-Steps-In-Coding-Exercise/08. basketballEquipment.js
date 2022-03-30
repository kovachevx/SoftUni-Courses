function basketballEquipment(input){

    let annualFee = Number(input[0]);
    let sneakers = annualFee * 0.60;
    let jersey = sneakers * 0.80;
    let ball = jersey / 4;
    let accessories = ball /5;

    let totalPrice = annualFee + sneakers + jersey + ball + accessories;
    
    console.log(totalPrice);
}

basketballEquipment([365]);