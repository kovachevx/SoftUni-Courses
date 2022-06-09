function starEnigma(input) {
    let totalMessages = Number(input.shift());
    let attackedPlanets = [];
    let attackedCount = 0;
    let destroyedPlanets = [];
    let destroyedCount = 0;
    let regex = /@(?<planet>[A-Z][a-z]+)([^@\-!:>]*):(?<population>\d+)([^@\-!:>]*)!(?<attackType>[A|D])!([^@\-!:>]*)->(?<soldiers>\d+)/g;
    for (let line of input) {
        let charCount = 0;
        for (let char of line) {
            let loweredChar = char.toLowerCase()
            if (loweredChar === 's' || loweredChar === 't' || loweredChar === 'a' || loweredChar === 'r') {
                charCount++;
            }
        }
        let decryptedMessage = '';
        for (let char of line) {
            let midChar = char.charCodeAt(0) - charCount;
            let newChar = String.fromCharCode(midChar)
            decryptedMessage += newChar;
        }
        let match = regex.exec(decryptedMessage);
        if (match == null) {
            continue;
        }
        if (match.groups.attackType === 'A') {
            attackedPlanets.push(match.groups.planet);
            attackedCount++;
        } else if (match.groups.attackType === 'D') {
            destroyedPlanets.push(match.groups.planet);
            destroyedCount++;
        }
        match = regex.exec(decryptedMessage)
    }
    console.log(`Attacked planets: ${attackedCount}`);
    attackedPlanets = attackedPlanets.sort();
    for (let planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${destroyedCount}`);
    destroyedPlanets = destroyedPlanets.sort();
    for (let planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
    }
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);
console.log('--')
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);