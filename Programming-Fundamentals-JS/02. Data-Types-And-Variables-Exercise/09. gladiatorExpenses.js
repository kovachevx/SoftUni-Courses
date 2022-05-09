function gladiatorExpenses(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;
    let shieldBreakCount = 0;

    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
        if (currentFight % 2 === 0) {
            totalExpenses += helmPrice;
        }
        if (currentFight % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (currentFight % 2 === 0 && currentFight % 3 === 0) {
            totalExpenses += shieldPrice;
            shieldBreakCount++;
        }
        if (shieldBreakCount > 0 && shieldBreakCount % 2 === 0) {
            totalExpenses += armorPrice;
            shieldBreakCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200)