function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let carClass;
    let carType;
    let price = 0;

    if (budget <= 100) {
        carClass = "Economy class";
        if (season === "Summer") {
            price = budget * 0.35;
            carType = "Cabrio";
        } else if (season === "Winter") {
            price = budget * 0.65;
            carType = "Jeep";
        }
    } else if (budget > 100 && budget <= 500) {
        carClass = "Compact class"
        if (season === "Summer") {
            price = budget * 0.45;
            carType = "Cabrio";
        } else if (season === "Winter") {
            price = budget * 0.80;
            carType = "Jeep";
        }
    } else if (budget > 500) {
        carClass = "Luxury class";
        price = budget * 0.90;
        carType = "Jeep";
    }
    console.log(`${carClass}`);
    console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo([1010, "Summer"])