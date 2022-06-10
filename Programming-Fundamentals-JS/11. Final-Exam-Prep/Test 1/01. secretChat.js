function secretChat(input) {
    let text = input.shift();
    for (let line of input) {
        if (line === 'Reveal') {
            break;
        }

        let tokens = line.split(':|:');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === 'InsertSpace') {
            let leftHalf = text.substring(0, p1);
            let rightHalf = text.substring(p1);
            text = leftHalf + ' ' + rightHalf;
            console.log(text);
        } else if (command === 'Reverse') {
            let reverseIndexStart = text.indexOf(p1);
            if (reverseIndexStart !== -1) {
                let leftHalf = text.slice(0, reverseIndexStart);
                let rightHalf = text.slice(reverseIndexStart + p1.length);
                let reversedLine = p1.split('').reverse().join('');
                text = leftHalf + rightHalf + reversedLine;
                console.log(text)
            } else {
                console.log('error');
            }
        } else if (command === 'ChangeAll') {
            text = text.split(p1).join(p2);
            console.log(text);
        }
    }
    console.log(`You have a new text message: ${text}`);
}
secretChat(['heVVodar!gniV', 'ChangeAll:|:V:|:l', 'Reverse:|:!gnil', 'InsertSpace:|:5', 'Reveal']);
console.log("-----");
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);