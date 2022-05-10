function spiceMustFlow(startingYield) {

    let dayCounter = 0;
    let currentYield = 0;

    while (startingYield >= 100) {
        dayCounter++;
        currentYield += startingYield
        startingYield -= 10;
        currentYield -= 26;
    }

    console.log(dayCounter);

    if (dayCounter != 0) {
        console.log(currentYield - 26);
    } else {
        console.log(currentYield);
    }

}
spiceMustFlow(450);