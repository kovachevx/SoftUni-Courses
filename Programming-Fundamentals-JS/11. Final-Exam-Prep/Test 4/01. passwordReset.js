function passwordReset(input) {
    let password = input.shift();

    while (input[0] !== 'Done') {
        let [command, p1, p2] = input.shift().split(' ');

        if (command === 'TakeOdd') {
            let text = '';
            for (let i = 1; i < password.length; i += 2) {
                text += password[i];
            }
            password = text;
            console.log(password);
        } else if (command === 'Cut') {
            let cutString = password.substr(p1, p2);
            password = password.replace(cutString, '');
            console.log(password);
        } else if (command === 'Substitute') {
            if (!password.includes(p1)) {
                console.log('Nothing to replace!');
            } else {
                while (password.includes(p1)) {
                    password = password.replace(p1, p2);
                }
                console.log(password);
            }
        }
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'])
// passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"]);
// console.log('-----');
// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"]);