function streamOfLetters(input) {

    let index = 0;
    let letter = input[index];
    let cCounter = 0;
    let nCounter = 0;
    let oCounter = 0;
    let finalText = "";
    let lastText = "";

    while (letter !== "End") {
        letter = input[index];
        index++;
        if (!(("A" <= letter && letter <= "Z") || ("a" <= letter && letter <= "z"))) {
            continue;
        }
        if (cCounter >= 1 && letter === "c") {
            finalText += letter;
        } else if (nCounter >= 1 && letter === "n") {
            finalText += letter;
        } else if (oCounter >= 1 && letter === "o") {
            finalText += letter;
        }

        if (letter !== "c" && letter !== "n" && letter !== "o") {
            finalText += letter;
        }
        if (letter === "c") {
            cCounter++;
        } else if (letter === "n") {
            nCounter++;
        } else if (letter === "o") {
            oCounter++;
        }
        if (cCounter >= 1 && nCounter >= 1 && oCounter >= 1) {
            lastText += `${finalText} `;
            cCounter = 0;
            nCounter = 0;
            oCounter = 0;
            finalText = "";
        }
    }
    console.log(lastText);
}
streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);