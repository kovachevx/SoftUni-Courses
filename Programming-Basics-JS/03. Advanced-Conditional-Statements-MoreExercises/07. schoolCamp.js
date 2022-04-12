function schoolCamp(input) {

    let season = input[0];
    let group = input[1];
    let studentCount = Number(input[2]);
    let nights = Number(input[3]);

    let sport = '';
    let price = 0;

    if (group === "girls") {
        switch (season) {
            case "Winter": sport = "Gymnastics"; break;
            case "Spring": sport = "Athletics"; break;
            case "Summer": sport = "Volleyball"; break;
        }
    } else if (group === "boys") {
        switch (season) {
            case "Winter": sport = "Judo"; break;
            case "Spring": sport = "Tennis"; break;
            case "Summer": sport = "Football"; break;
        }
    } else if (group === "mixed") {
        switch (season) {
            case "Winter": sport = "Ski"; break;
            case "Spring": sport = "Cycling"; break;
            case "Summer": sport = "Swimming"; break;
        }
    }
    if (season === "Winter") {
        if (group === "boys" || group === "girls") {
            price = 9.60 * studentCount * nights;
        } else if (group === "mixed") {
            price = 10 * studentCount * nights;
        }
    } else if (season === "Spring") {
        if (group === "boys" || group === "girls") {
            price = 7.20 * studentCount * nights;
        } else if (group === "mixed") {
            price = 9.50 * studentCount * nights;
        }
    } else if (season === "Summer") {
        if (group === "boys" || group === "girls") {
            price = 15 * studentCount * nights;
        } else if (group === "mixed") {
            price = 20 * studentCount * nights;
        }
    }

    if (studentCount >= 50) {
        price = price * 0.50;
    } else if (studentCount >= 20 && studentCount < 50) {
        price = price * 0.85;
    } else if (studentCount >= 10 && studentCount < 20) {
        price = price * 0.95;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);

}
schoolCamp(["Spring", "girls", 20, 7]);
