function suppliesForSchool(input){

    let pensPack = Number(input[0]);
    let markersPack = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let discount = Number(input[3]);

    let initialPrice = pensPack * 5.80 + markersPack * 7.20 + litersDetergent * 1.20;
    let discountedPrice = initialPrice - (initialPrice * discount / 100);

    console.log(discountedPrice);

}

suppliesForSchool([2, 3, 4, 25]);