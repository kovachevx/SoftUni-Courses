function challengeTheWedding(input) {

    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let dates = ``;
    let dateCounter = 0;
    let dateCounter2 = 0;

    for (let x = 1; x <= men; x++) {
        dateCounter2++;
        if (dateCounter2 >= tables) {
            break;
        }
        for (let y = 1; y <= women; y++) {
            if (dateCounter >= tables) {
                break;
            }
            dateCounter++;
            dates += `(${x} <-> ${y}) `;
        }
    }
    console.log(dates);
}
challengeTheWedding([6, 2, 5])