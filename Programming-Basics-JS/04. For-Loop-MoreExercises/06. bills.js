function bills(input) {

    let index = 0;
    let months = Number(input[index])
    index++;
    let monthlyWaterBill = 20.00;
    let monthlyInternetBill = 15.00;
    let otherBills = 0;
    let totalElectricityBill = 0;

    for (let i = 1; i <= months; i++) {
        let electricityBill = Number(input[index]);
        index++
        otherMonthlyExpenses = (electricityBill + monthlyInternetBill + monthlyWaterBill) * 1.20;
        otherBills += otherMonthlyExpenses
        totalElectricityBill += electricityBill;
    }

    let avg = ((totalElectricityBill + monthlyWaterBill * months + monthlyInternetBill * months + otherBills) / months);

    console.log(`Electricity: ${totalElectricityBill.toFixed(2)} lv`);
    console.log(`Water: ${(monthlyWaterBill * months).toFixed(2)} lv`);
    console.log(`Internet: ${(monthlyInternetBill * months).toFixed(2)} lv`);
    console.log(`Other: ${otherBills.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);

}
bills([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2])