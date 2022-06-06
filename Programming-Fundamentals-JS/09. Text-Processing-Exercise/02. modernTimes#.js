function modernTimes(input) {
    let text = input.split(' ');
    for (let word of text) {
        if (word.length > 1 && word.startsWith('#')) {
            let isValid = true;
            for (let char of word) {
                if (!isNaN(char)) {
                    isValid = false;
                }
            }
            if (isValid) {
                console.log(word.substring(1));
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');