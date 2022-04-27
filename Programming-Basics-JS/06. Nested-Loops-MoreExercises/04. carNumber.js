function carNumber(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let eligibleNums = "";

    for (let i = startNum; i <= endNum; i++) {
        for (let x = startNum; x <= endNum; x++) {
            for (let y = startNum; y <= endNum; y++) {
                for (let z = startNum; z <= endNum; z++) {
                    if (i % 2 === 0 && z % 2 !== 0 || i % 2 !== 0 && z % 2 === 0) {
                        if (i > z) {
                            if ((x + y) % 2 === 0) {
                                eligibleNums += "" + i + x + y + z + " ";
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(eligibleNums);
}
carNumber([5, 8])