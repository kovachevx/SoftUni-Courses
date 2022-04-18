function readText(input) {

    let index = 0;
    let word = input[index];

    while (word !== "Stop") {
        if (word === "Stop") {
            break;
        }
        console.log(word);
        index++;
        word = input[index];
    }
}
readText(["bab", "lag", "cab", "Stop", "dog"]);