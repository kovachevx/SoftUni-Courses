function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = width * length * height;
    let index = 3;
    let action = input[index];

    while (action !== "Done") {
        let boxes = Number(action);
        freeSpace -= boxes;
        if (freeSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        index++;
        action = input[index];
    }

    if (action === "Done") {
        console.log(`${freeSpace} Cubic meters left.`);
    }

}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);