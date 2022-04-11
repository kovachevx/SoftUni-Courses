function matchTickets(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);

    let sum = 0;
    let transportFee = 0;

    if (category === "VIP") {
        sum = 499.99 * peopleCount;
    } else if (category === "Normal") {
        sum = 249.99 * peopleCount;
    }

    if (peopleCount <= 4) {
        transportFee = budget * 0.75;
    } else if (peopleCount <= 9) {
        transportFee = budget * 0.60;
    } else if (peopleCount <= 24) {
        transportFee = budget * 0.50;
    } else if (peopleCount <= 49) {
        transportFee = budget * 0.40;
    } else if (peopleCount >= 50) {
        transportFee = budget * 0.25;
    }

    let totalCost = transportFee + sum;
    let diff = Math.abs(budget - (transportFee + sum));

    if (budget >= totalCost) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

matchTickets([30000, "VIP", 49]);