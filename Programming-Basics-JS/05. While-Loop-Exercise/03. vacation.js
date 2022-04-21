function vacation(input) {

    let excursionPrice = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;
    let daySpent = 0;
    let dayCounter = 0;

    while (money < excursionPrice) {
        let action = input[index];
        index++;
        let sum = Number(input[index]);
        dayCounter++;
        switch (action) {
            case "spend": money -= sum;
                if (money < 0) {
                    money = 0;
                }
                daySpent++;
                break;
            case "save": money += sum;
                daySpent = 0;
                break;
        }
        if (daySpent >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${dayCounter}`);
            break;
        }
        index++;
    }
    if (money >= excursionPrice) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);