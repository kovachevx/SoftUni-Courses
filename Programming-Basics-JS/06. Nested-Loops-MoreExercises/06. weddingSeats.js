function weddingSeats(input) {

    let lastSector = input[0];
    let firstRow = Number(input[1]);
    let oddRowSeats = Number(input[2]);
    let evenRowSeats = oddRowSeats + 2;

    let sectors = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let seats = "abcdefghijklmnopqrstuvwxyz";
    let totalSeats = 0;
    let isBreak = false;
    let disp = 1;

    for (let i = 0; i <= sectors.length; i++) {
        if (isBreak) {
            break;
        }
        let currentRow = sectors.charAt(i);

        for (let x = 1; x <= firstRow; x++) {
            if (x % 2 !== 0) {
                totalSeats += oddRowSeats;
            } else {
                totalSeats += evenRowSeats;
            }

            if (x % 2 !== 0) {
                for (let xSeats = 0; xSeats <= oddRowSeats - 1; xSeats++) {
                    let currentSeatX = seats.charAt(xSeats);
                    console.log(`${currentRow}${x}${currentSeatX}`);
                }
            } else {
                for (let ySeats = 0; ySeats <= evenRowSeats - 1; ySeats++) {
                    let currentSeatY = seats.charAt(ySeats);
                    console.log(`${currentRow}${x}${currentSeatY}`);
                }
            }
        }
        firstRow++;
        disp++;
        if (currentRow === lastSector) {
            isBreak = true;
        }
    }
    console.log(totalSeats);
}
weddingSeats(["C", 4, 2]);