function coffeeLover(input) {

    let coffeeList = input.shift().split(' ');
    let cycle = Number(input.shift());

    for (let i = 0; i < cycle; i++) {
        let splitCommand = input[i].split(' ');
        let action = splitCommand[0];

        if (action === 'Include') {
            let newCoffee = splitCommand[1];
            coffeeList.push(newCoffee);
        } else if (action === 'Remove') {
            let firstLast = splitCommand[1];
            let numberToRemove = Number(splitCommand[2]);

            if (numberToRemove > coffeeList.length) {
                continue;
            } else {
                if (firstLast === 'first') {
                    coffeeList.splice(0, numberToRemove);
                } else if (firstLast === 'last') {
                    coffeeList.splice(-numberToRemove, numberToRemove);
                }
            }

        } else if (action === 'Prefer') {
            let coffeeIndex1 = splitCommand[1];
            let coffeeIndex2 = splitCommand[2];
            let coffee1 = coffeeList[coffeeIndex1];
            let coffee2 = coffeeList[coffeeIndex2];

            if (coffeeList[coffeeIndex1] !== 'undefined' && coffeeList[coffeeIndex2] !== 'undefined') {
                coffeeList.splice(coffeeIndex1, 1, coffee2);
                coffeeList.splice(coffeeIndex2, 1, coffee1);
            } else {
                continue;
            }

        } else if (action === 'Reverse') {
            coffeeList.reverse();
        }
    }

    console.log(`Coffees:\n${coffeeList.join(' ')}`);
}
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"]);