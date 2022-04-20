function oldBooks(input) {

    let index = 0;
    let book = input[index];
    index++;
    let currentBook = input[index];
    let bookCounter = 0;

    while (currentBook !== "No More Books") {
        if (currentBook === book) {
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }
        index++;
        currentBook = input[index];
        bookCounter++;
    }

    if (currentBook === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }

}
oldBooks(["Troy", "Stronger", "Dog", "No More Books"]);