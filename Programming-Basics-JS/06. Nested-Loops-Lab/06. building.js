function building(input) {

    let floors = Number(input[0]);
    let aptPerFloor = Number(input[1]);

    for (let i = floors; i > 0; i--) {
        let buffLastFloor = "";
        for (let j = 0; j < aptPerFloor; j++) {
            if (i === floors) {
                buffLastFloor += "" + "L" + i + j + " ";
            } else if (i % 2 === 0) {
                buffLastFloor += "" + "O" + i + j + " ";
            } else if (i % 2 !== 0) {
                buffLastFloor += "" + "A" + i + j + " ";
            }
        }
        console.log(buffLastFloor);
    }
}
building(["9", "5"]);