function stringGame(input) {
    let heroes = {};
    while (input[0] !== 'End') {
        let [command, hero, spell] = input.shift().split(' ');
        if (command === 'Enroll') {
            if (heroes.hasOwnProperty(hero)) {
                console.log(`${hero} is already enrolled.`);
            } else {
                heroes[hero] = [];
            }
        } else if (command === 'Learn') {
            if (!heroes.hasOwnProperty(hero)) {
                console.log(`${hero} doesn't exist.`);
            } else if (heroes[hero].includes(spell)) {
                console.log(`${hero} has already learnt ${spell}.`);
            } else {
                heroes[hero].push(spell);
            }
        } else if (command === 'Unlearn') {
            if (!heroes.hasOwnProperty(hero)) {
                console.log(`${hero} doesn't exist.`);
            } else if (heroes[hero].indexOf(spell) === -1) {
                console.log(`${hero} doesn't know ${spell}.`);
            } else {
                let indexToRemove = heroes[hero].indexOf(spell);
                heroes[hero].splice(indexToRemove, 1);
            }
        }
    }

    console.log('Heroes:');
    for (let hero in heroes) {
        console.log(`== ${hero}: ${heroes[hero].join(', ')}`);
    }
}
stringGame(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Learn Stefan bob",
    "Unlearn George Dispel",
    "End"]);
console.log('-----');
stringGame(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"]);
console.log('-----');
stringGame(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"]);