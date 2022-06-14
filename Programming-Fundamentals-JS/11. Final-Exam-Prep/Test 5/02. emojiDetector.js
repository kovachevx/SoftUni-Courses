function emojiDetector(text) {
    let coolRegex = /(?<cool>\d)/g;
    let coolMatch = coolRegex.exec(text);
    let coolThreshold = 1;
    while (coolMatch !== null) {
        let digit = Number(coolMatch.groups.cool);
        coolThreshold *= digit;
        coolMatch = coolRegex.exec(text);
    }
    let emojiRegex = /(::|\*\*)(?<emojiName>[A-Z][a-z]{2,})\1/g;
    let emojiMatch = emojiRegex.exec(text);
    let emojis = {};
    let counter = 0;
    while (emojiMatch !== null) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch[2];
        counter++;
        let totalSum = 0;
        for (let char of emojiName) {
            let num = Number(char.charCodeAt());
            totalSum += num;
        }
        emojis[emoji] = totalSum;
        emojiMatch = emojiRegex.exec(text);
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    for (let emoji in emojis) {
        if (emojis[emoji] > coolThreshold) {
            console.log(emoji);
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('-----');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log('-----');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);

// function emojiDetector(text) {
//     let coolRegex = /(?<cool>\d)/g;
//     let coolMatch = coolRegex.exec(text);
//     let coolThreshold = 1;
//     while(coolMatch !== null) {
//         let digit = Number(coolMatch.groups.cool);
//         coolThreshold *= digit;
//         coolMatch = coolRegex.exec(text);
//     }
//     console.log(`Cool threshold: ${coolThreshold}`);
//     let validEmojis = [];
//     let emojiRegex = /(::|\*\*)(?<emojiName>[A-Z][a-z]{2,})\1/g;
//     let emojiMatch = emojiRegex.exec(text);
//     let uncutEmojis = [];
//     while(emojiMatch !== null) {
//         uncutEmojis.push(emojiMatch[0]);
//         validEmojis.push(emojiMatch.groups.emojiName);
//         emojiMatch = emojiRegex.exec(text);
//     }
//     console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);
//     for (let emoji of uncutEmojis) {
//         emoji.split("::").join('');
//         emoji.split('**').join('');
//         let totalSum = 0;
//         for (let char of emoji) {
//             let asciiValue = Number(char.charCodeAt());
//             totalSum += asciiValue;
//         }
//         if (totalSum > coolThreshold) {
//             console.log(emoji);
//         }
//     }
// }
// emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
// console.log('-----');
// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
// console.log('-----');
// emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);