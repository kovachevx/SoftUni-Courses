function stringGame(input) {
    let text = input.shift();
    while (input[0] !== 'Done') {
        let [command, p1, p2] = input.shift().split(' ');
        if (command === 'Change') {
            text = text.split(p1).join(p2);
            console.log(text);
        } else if (command === 'Includes') {
            if (text.includes(p1)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'End') {
            if (text.endsWith(p1)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Uppercase') {
            text = text.toUpperCase();
            console.log(text);
        } else if (command === 'FindIndex') {
            console.log(text.indexOf(p1));
        } else if (command === 'Cut') {
            let sub = text.substr(p1, p2);
            console.log(sub);
        }
    }
}
stringGame(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);
console.log('-----');
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]);