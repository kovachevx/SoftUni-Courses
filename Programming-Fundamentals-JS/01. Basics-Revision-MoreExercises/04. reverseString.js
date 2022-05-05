function reverseString(string) {

    let reverseString = string
        .split('')
        .reverse()
        .join('');

    console.log(reverseString);

}

reverseString('dok');