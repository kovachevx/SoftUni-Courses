function censoredWords(sentence, word) {
    let censored = sentence.replace(word, '*'.repeat(word.length));
    while (censored.includes(word)) {
        censored = censored.replace(word, '*'.repeat(word.length));
    }
    console.log(censored);
}
censoredWords('A small sentence with some small words', 'small');
censoredWords('Find the hidden word', 'hidden');
