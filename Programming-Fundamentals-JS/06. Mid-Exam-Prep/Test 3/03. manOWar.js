function manOWar(inputArray) {

    let pirateShipStatus = inputArray.shift().split('>').map(Number);
    let warShipStatus = inputArray.shift().split('>').map(Number);
    let maxHealth = Number(inputArray.shift());
    let count = 0;
    let index = 0;
    let command = inputArray[index];
    let isSinking = false;
    let isStalemate = true;

    while (command !== 'Retire') {
        let splitCommand = command.split(' ');
        let action = splitCommand[0];

        if (action === 'Fire') {
            let attackedIndex = Number(splitCommand[1]);
            let damage = Number(splitCommand[2]);
            if (attackedIndex >= 0 && attackedIndex < warShipStatus.length) {
                let currentSectionHealth = warShipStatus.splice(attackedIndex, 1);
                let healthLeft = currentSectionHealth - damage;
                warShipStatus.splice(attackedIndex, 0, healthLeft)
                if (healthLeft <= 0) {
                    isStalemate = false;
                    console.log('You won! The enemy ship has sunken.');
                    break;
                }
            }
        } else if (action === 'Defend') {
            let defendedIndexStart = Number(splitCommand[1]);
            let defendedIndexEnd = Number(splitCommand[2]);
            let damageReceived = Number(splitCommand[3]);

            if ((defendedIndexStart >= 0 && defendedIndexStart < pirateShipStatus.length) &&
                (defendedIndexEnd >= 0 && defendedIndexEnd < pirateShipStatus.length)) {

                for (let i = defendedIndexStart; i <= defendedIndexEnd; i++) {
                    let sectionHealth = Number(pirateShipStatus[i]);
                    sectionHealth -= damageReceived;
                    pirateShipStatus.splice(i, 1, sectionHealth);
                    if (sectionHealth <= 0) {
                        isSinking = true;
                        isStalemate = false;
                    }
                }
                if (isSinking) {
                    console.log('You lost! The pirate ship has sunken.')
                    break;
                }
            }
        } else if (action === 'Repair') {
            let fixIndex = Number(splitCommand[1]);
            let healAmount = Number(splitCommand[2]);
            let sectionToHeal = Number(pirateShipStatus.splice(fixIndex, 1));
            sectionToHeal += healAmount;
            if (sectionToHeal > maxHealth) {
                sectionToHeal = maxHealth;
            }
            pirateShipStatus.splice(fixIndex, 0, sectionToHeal);
        } else if (action === 'Status') {
            count = 0;
            let fifthHealth = maxHealth * 0.20;
            for (let element of pirateShipStatus) {
                if (element < fifthHealth) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`)
        }
        index++;
        command = inputArray[index];
    }
    let pirateSum = 0;
    let warshipSum = 0;

    for (let element of pirateShipStatus) {
        pirateSum += element;
    }

    for (let element of warShipStatus) {
        warshipSum += element;
    }

    if (isStalemate) {
        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }

}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
console.log('------------')
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])