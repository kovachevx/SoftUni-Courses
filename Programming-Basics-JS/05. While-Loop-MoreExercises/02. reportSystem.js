function reportSystem(input) {

    let index = 0;
    let neededSum = Number(input[index]);
    let acquiredSum = 0;
    index++;
    let currentTransaction = input[index];
    let cashCycle = 0;
    let ccCycle = 0;
    let cycle = 0;
    let cash = 0;
    let CC = 0;

    while (currentTransaction !== "End") {
        cycle++;
        let transfer = Number(currentTransaction);
        if (acquiredSum >= neededSum) {
            console.log(`Average CS: ${(cash / cashCycle).toFixed(2)}`);
            console.log(`Average CC: ${(CC / ccCycle).toFixed(2)}`);
            break;
        }
        if (cycle % 2 !== 0) {
            if (transfer > 100) {
                console.log("Error in transaction!")
            } else {
                cashCycle++;
                acquiredSum += transfer;
                cash += transfer;
                console.log("Product sold!");
            }
        }
        else if (cycle % 2 === 0) {
            if (transfer < 10) {
                console.log("Error in transaction!");
            } else {
                ccCycle++;
                acquiredSum += transfer;
                CC += transfer;
                console.log("Product sold!");
            }
        }
        index++;
        currentTransaction = input[index];
    }
    if (currentTransaction === "End") {
        console.log("Failed to collect required money for charity.");
    }
}
reportSystem([500,
    120,
    8,
    63,
    256,
    78,
    317
]);