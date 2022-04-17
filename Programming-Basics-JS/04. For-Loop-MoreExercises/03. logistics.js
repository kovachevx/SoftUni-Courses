function logistics(input) {

    let index = 0;
    let loadCount = Number(input[index]);
    index++;
    let totalWeight = 0;
    let busMoney = 0;
    let truckMoney = 0;
    let trainMoney = 0;
    let busTons = 0;
    let truckTons = 0;
    let trainTons = 0;

    for (let i = 1; i <= loadCount; i++) {
        let tons = Number(input[index]);
        index++;
        if (tons <= 3) {
            busMoney += tons * 200;
            totalWeight += tons;
            busTons += tons;
        } else if (tons >= 4 && tons <= 11) {
            truckMoney += tons * 175;
            totalWeight += tons;
            truckTons += tons;
        } else if (tons >= 12) {
            trainMoney += tons * 120;
            totalWeight += tons;
            trainTons += tons;
        }
    }

    let avgPrice = (busMoney + truckMoney + trainMoney) / totalWeight;
    let busPercentage = busTons / totalWeight * 100;
    let truckPercentage = truckTons / totalWeight * 100;
    let trainPercentage = trainTons / totalWeight * 100;
    ;
    console.log(avgPrice.toFixed(2))
    console.log(busPercentage.toFixed(2) + "%");
    console.log(truckPercentage.toFixed(2) + "%");
    console.log(trainPercentage.toFixed(2) + "%");
}
logistics([5, 2, 10, 20, 1, 7]);