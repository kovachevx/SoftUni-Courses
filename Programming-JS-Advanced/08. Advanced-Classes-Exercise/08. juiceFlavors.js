function juiceFlavors(inputArray) {
    let juices = new Map;
    let bottles = new Map;
    for (let line of inputArray) {
        let [flavor, qty] = line.split(' => ');
        qty = Number(qty);
        if (!juices.has(flavor)) {
            juices.set(flavor, 0);
        }

        let currentAmount = juices.get(flavor);
        currentAmount += qty;

        if (currentAmount >= 1000) {
            if (!bottles.has(flavor)) {
                bottles.set(flavor, 0)
            }
            let currentValue = bottles.get(flavor);
            currentValue += Math.floor(currentAmount / 1000)
            bottles.set(flavor, currentValue);
            currentAmount -= Math.floor(currentAmount / 1000) * 1000;
        }

        juices.set(flavor, currentAmount);
    }
    for (let [flavor, qty] of bottles) {
        console.log(`${flavor} => ${qty}`);
    }
}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
console.log('-----');
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);