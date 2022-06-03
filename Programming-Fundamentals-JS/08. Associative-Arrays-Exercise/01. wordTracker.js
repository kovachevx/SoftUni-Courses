function wordTracker(input) {
    let soughtWords = input.shift().split(' ');
    let wordList = {};
    for (let word of soughtWords) {
        wordList[word] = 0;
    }
    for (let word of input) {
        if (soughtWords.includes(word)) {
            wordList[word]++
        }
    }
    let sorted = Object.entries(wordList);
    sorted.sort((a, b) => b[1] - a[1])
    for (let [word, count] of sorted) {
        console.log(word, '-', count)
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);