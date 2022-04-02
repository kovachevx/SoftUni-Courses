function weatherForecast2(input) {

    let temp = Number(input[0]);

    if (temp > 35) {
        console.log("unknown");
    } else if (temp >= 26) {
        console.log("Hot");
    } else if (temp >= 20.1) {
        console.log("Warm");
    } else if (temp >= 15) {
        console.log("Mild");
    } else if (temp >= 12) {
        console.log("Cool");
    }
    else if (temp >= 5) {
        console.log("Cold");
    } else if (temp < 5) {
        console.log("unknown");
    }
}

weatherForecast2([20]);