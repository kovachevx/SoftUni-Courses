function theImitationGame(input) {
    let message = input.shift();
    while (input[0] !== 'Decode') {
        let [command, p1, p2] = input.shift().split('|')
        if (command === 'ChangeAll') {
            message = message.split(p1).join(p2);
        } else if (command === 'Move') {
            let firstHalf = message.substring(0, p1);
            let secondHalf = message.substring(p1);
            message = secondHalf + firstHalf;
        } else if (command === 'Insert') {
            let arrayMessage = message.split('');
            arrayMessage.splice(p1, 0, p2);
            message = arrayMessage.join('');
        }
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
console.log('-----');
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);