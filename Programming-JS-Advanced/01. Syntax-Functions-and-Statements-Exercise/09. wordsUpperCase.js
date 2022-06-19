function wordsUpperCase(input) {
    let regex = /(\w+)/g;
    let match = regex.exec(input);
    let wordList = [];
    while (match !== null) {
        let currentWord = match[0].toUpperCase();
        wordList.push(currentWord);
        match = regex.exec(input);
    }
    console.log(wordList.join(', '));
}
wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello'); 