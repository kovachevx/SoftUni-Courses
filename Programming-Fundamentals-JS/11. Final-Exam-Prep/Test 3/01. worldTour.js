function worldTour(input) {
    let text = input.shift();
    while (input[0] !== 'Travel') {
        let [command, p1, p2] = input.shift().split(':');
        if (command === 'Add Stop') {
            if (p1 >= 0 && p1 < text.length) {
                let leftSide = text.substring(0, p1);
                let rightSide = text.substring(p1);
                text = leftSide + p2 + rightSide;
            }
            console.log(text);
        } else if (command === 'Remove Stop') {
            if ((p1 >= 0 && p1 < text.length) && (p2 >= 0 && p2 < text.length)) {
                let leftSide = text.substring(0, p1);
                let rightSide = text.substring(Number(p2) + 1);
                text = leftSide + rightSide;
            }
            console.log(text);
        } else if (command === 'Switch') {
            if (text.includes(p1)) {
                text = text.split(p1).join(p2);
            }
            console.log(text);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${text}`);
}
worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]);
console.log('-----');
worldTour(['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'
]);