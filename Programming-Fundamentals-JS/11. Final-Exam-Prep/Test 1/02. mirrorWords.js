function mirrorWords(input) {
    let regex = /([@|#])[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;
    let counter = 0;
    let mirrorCounter = 0;
    let mirrorWords = [];
    let match = regex.exec(input);
    while (match !== null) {
        counter++;
        let words = match[0].split(match[1]).join('');
        let word1 = words.slice(0, words.length / 2);
        let word2 = words.slice(words.length / 2);
        let reversedWord2 = word2.split('').reverse().join('');
        if (word1 === reversedWord2) {
            mirrorCounter++;
            mirrorWords.push(`${word1} <=> ${word2}`);
        }
        match = regex.exec(input);
    }

    if (counter > 0) {
        console.log(`${counter} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }

    if (mirrorCounter > 0) {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(', '));
    } else {
        console.log('No mirror words!');
    }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log('-----');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('-----');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);