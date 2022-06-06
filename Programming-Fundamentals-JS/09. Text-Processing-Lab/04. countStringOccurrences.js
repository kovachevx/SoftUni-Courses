function countStringOccurrences(text, searchedWord) {
    console.log(text.split(' ').filter((x) => x === searchedWord).length);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');

// function countStringOccurrences(text, searchedWord) {
//     let words = text.split(' ');
//     let count = 0;
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === searchedWord) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countStringOccurrences('This is a word and it also is a sentence', 'is');
// countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');