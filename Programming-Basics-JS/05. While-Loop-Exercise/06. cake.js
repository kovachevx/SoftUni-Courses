function cake(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let totalPieces = width * length;
    let command = input[index];

    while (command !== "STOP") {
        let currentPieces = Number(command);
        totalPieces -= currentPieces;
        if (totalPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }

    if (command === "STOP") {
        console.log(`${totalPieces} pieces are left.`);
    }

}
cake(["10", "2", "2", "4", "6", "STOP"]);