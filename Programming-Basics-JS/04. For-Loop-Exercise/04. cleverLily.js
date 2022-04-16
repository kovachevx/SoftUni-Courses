function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let tempMoney = 0;
    let toyCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            tempMoney += 10;
            money += tempMoney;
            money -= 1;
        } else {
            toyCount++;
        }
    }
    let budget = toyCount * toyPrice + money;
    let diff = Math.abs(budget - washingMachinePrice);

    if (budget >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily([21, 1570.98, 3]);