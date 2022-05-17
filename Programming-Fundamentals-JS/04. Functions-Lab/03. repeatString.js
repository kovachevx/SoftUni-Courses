function repeatString(string, repetitions) {
    let text = '';
    for (let i = 1; i <= repetitions; i++) {
        text += string;
    }

    console.log(text);
}
repeatString("abc", 3);
repeatString("String", 2);