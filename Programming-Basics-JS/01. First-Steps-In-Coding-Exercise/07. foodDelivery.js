function foodDelivery(input){

    let chickenMenus =  Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);

    let menus = chickenMenus * 10.35 + fishMenus * 12.40 + vegetarianMenus * 8.15;
    
    let dessert = menus * 0.2;
    let totalPrice = menus + dessert + 2.50;

    console.log(totalPrice);

}

foodDelivery([2, 4, 3]);