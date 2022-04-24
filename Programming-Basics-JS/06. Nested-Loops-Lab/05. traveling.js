function traveling(input) {

    let index = 0;
    let destination = input[index];
    index++;
    let neededSum = Number(input[index]);
    let acquiredSum = 0;

    while (destination !== "End") {

        while (acquiredSum < neededSum) {
            index++;
            let currentSum = Number(input[index]);
            acquiredSum += currentSum;
            if (acquiredSum >= neededSum) {
                console.log(`Going to ${destination}!`);
                index++;
                destination = input[index];
                index++;
                acquiredSum = 0;
                neededSum = Number(input[index]);
            }
        }
    }
}

traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);
