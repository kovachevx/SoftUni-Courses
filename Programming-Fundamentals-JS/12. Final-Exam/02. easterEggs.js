function easterEggs(text) {
    let regex = /([@|#]+)(?<color>[a-z]{3,})(@|#+)([^A-Za-z0-9]*)\/(?<amount>[0-9]+)\/+/g;
    let match = regex.exec(text);
    while (match !== null) {
        console.log(`You found ${match.groups.amount} ${match.groups.color} eggs!`);
        match = regex.exec(text);
    }
}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
console.log('-----');
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);