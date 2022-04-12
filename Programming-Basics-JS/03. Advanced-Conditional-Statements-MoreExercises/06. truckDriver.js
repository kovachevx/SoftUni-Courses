function truckDriver(input) {

    let season = input[0];
    let kmPerMonth = Number(input[1]);
    let sum = 0;

    if (kmPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn": sum = (0.75 * kmPerMonth) * 4; break;
            case "Summer": sum = (0.90 * kmPerMonth) * 4; break;
            case "Winter": sum = (1.05 * kmPerMonth) * 4; break;
        }
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn": sum = (0.95 * kmPerMonth) * 4; break;
            case "Summer": sum = (1.10 * kmPerMonth) * 4; break;
            case "Winter": sum = (1.25 * kmPerMonth) * 4; break;
        }
    } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
        switch (season) {
            default: sum = (1.45 * kmPerMonth) * 4; break;
        }
    }
    sum = sum * 0.90;
    console.log(sum.toFixed(2));
}
truckDriver(["Winter", 16042]);