function activationKeys(input) {
    let text = input.shift();
    while (input[0] !== 'Generate') {
        let tokens = input.shift().split('>>>');
        let command = tokens[0];
        if (command === 'Contains') {
            let substring = tokens[1];
            if (text.includes(substring)) {
                console.log(`${text} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command === 'Flip') {
            let cases = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);
            let leftSide = text.substring(0, startIndex);
            let rightSide = text.substring(endIndex);
            let substring = text.substring(startIndex, endIndex);
            if (cases === 'Upper') {
                substring = substring.toUpperCase();
            } else if (cases === 'Lower') {
                substring = substring.toLowerCase();
            }
            text = leftSide + substring + rightSide;
            console.log(text);
        } else if (command === 'Slice') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let leftSide = text.substring(0, startIndex);
            let rightSide = text.substring(endIndex);
            text = leftSide + rightSide;
            console.log(text);
        }
    }
    console.log(`Your activation key is: ${text}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log('--------------');
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);