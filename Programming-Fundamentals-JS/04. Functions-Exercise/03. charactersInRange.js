function charactersInRange(char1, char2) {

    let startChar = (char1, char2) => Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = (char1, char2) => Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let charsInBetween = [];

    for (let i = startChar(char1, char2) + 1; i < endChar(char1, char2); i++) {
        charsInBetween.push(String.fromCharCode(i));
    }

    console.log(charsInBetween.join(' '));

}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');