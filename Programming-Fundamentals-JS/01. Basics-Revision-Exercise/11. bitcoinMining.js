function bitcoin(input) {

    let dayCounter = 0;
    let currentMoney = 0;
    let bitcoinPrice = 11949.16;
    let bitcoinCounter = 0;
    let goldPricerPerGram = 67.51;
    let firstBitcoinDay = 0;
    let index = 0;
    let goldThisDay = Number(input[index]);

    while (dayCounter < input.length) {

        dayCounter++;
        let minedToday = goldThisDay * goldPricerPerGram;

        if (dayCounter % 3 === 0) {
            minedToday *= 0.7;
            currentMoney += minedToday;
        } else {
            currentMoney += minedToday;
        }

        while (currentMoney >= bitcoinPrice) {
            if (currentMoney >= bitcoinPrice) {
                bitcoinCounter++;
                currentMoney -= bitcoinPrice;

                if (bitcoinCounter === 1) {
                    firstBitcoinDay = dayCounter;
                }
            }
        }
        index++;
        goldThisDay = Number(input[index]);
    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);

    if (bitcoinCounter >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }

    console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);

}

bitcoin([3124.15, 504.212, 2511.124]);