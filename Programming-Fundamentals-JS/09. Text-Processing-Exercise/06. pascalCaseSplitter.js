function pascalCaseSplitter(str) {
    let newStr = str;
    let res = [];
    let newWord = '';
    for (let i = 1; i < str.length; i++) {
        if (newWord.length === 0) {
            newWord += str[0];
        }
        if (newStr[i].toUpperCase() === str[i]) {
            res.push(newWord);
            newWord = '';
            newWord += newStr[i];
        } else {
            newWord += newStr[i];
        }
    }
    res.push(newWord);
    console.log(res.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');