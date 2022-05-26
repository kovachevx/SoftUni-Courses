function theBiscuitFactory(input) {

    let dailyBiscuitsPerWorker = Number(input[0]);
    let workers = Number(input[1]);
    let compFactoryProduction = Number(input[2]);
    let biscuitsPerDay = dailyBiscuitsPerWorker * workers;
    let biscuitCount = 0;

    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            biscuitCount += Math.trunc(biscuitsPerDay * 0.75);
        } else {
            biscuitCount += biscuitsPerDay;
        }
    }

    console.log(`You have produced ${biscuitCount} biscuits for the past month.`);
    let percentage = biscuitCount / compFactoryProduction * 100;
    let finalPercentage = Math.abs(percentage - 100).toFixed(2);

    if (percentage < 100) {
        console.log(`You produce ${finalPercentage} percent less biscuits.`);
    } else {
        console.log(`You produce ${finalPercentage} percent more biscuits.`);
    }

}
theBiscuitFactory(["78", "8", "16000"]);
theBiscuitFactory(["65", "12", "26000"]);
theBiscuitFactory(["163", "16", "67020"]);