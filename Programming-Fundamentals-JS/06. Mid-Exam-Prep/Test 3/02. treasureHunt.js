function treasureHunt(input) {

    let chest = input.shift().split('|');
    let index = 0;
    let command = input[index];

    while (command !== 'Yohoho!') {
        let items = command.split(' ');
        let action = items.shift();

        if (action === 'Loot') {
            for (let i = 0; i < items.length; i++) {
                if (chest.indexOf(items[i]) == -1) {
                    chest.unshift(items[i]);
                }
            }
        } else if (action === 'Drop') {
            let indexToBeRemoved = Number(items.shift());
            if (chest.length > indexToBeRemoved && indexToBeRemoved >= 0) {
                let removedItem = chest.splice(indexToBeRemoved, 1).join('');
                chest.push(removedItem);
            }
        } else if (action === 'Steal') {
            let toBeRemoved = Number(items.shift());
            let stolen = chest.splice(-toBeRemoved, toBeRemoved);
            console.log(stolen.join(', '));
        }

        index++;
        command = input[index];
    }

    let wordsLength = 0;
    for (let k = 0; k < chest.length; k++) {
        wordsLength += chest[k].length;
    }

    let averageGain = (wordsLength / chest.length);

    if (chest.length <= 0) {
        console.log('Failed treasure hunt.');
    } else {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }

}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);