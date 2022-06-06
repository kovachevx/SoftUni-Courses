function revealWords(words, sentence) {
    words = words.split(', ');
    for (let word of words) {
        sentence = sentence.split(' ');
        let soughtWord = '*'.repeat(word.length);
        for (let el of sentence) {
            if (el === soughtWord) {
                sentence = sentence.join(' ').replace(el, word);
            }
        }
    }
    console.log(sentence);
}
revealWords('great',
    'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');