function stringSubstring(soughtWord, text) {
    text = text.split(' ');
    for (let word of text) {
        word = word.toLowerCase();
        soughtWord = soughtWord.toLowerCase();
        if (word === soughtWord) {
            return console.log(soughtWord);
        }
    }
    console.log(`${soughtWord} not found!`);
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');