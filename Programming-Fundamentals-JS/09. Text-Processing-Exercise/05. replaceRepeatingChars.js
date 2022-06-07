function replaceRepeatingChars(str) {
    let newText = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            newText += str[i];
        }
    }
    console.log(newText);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');