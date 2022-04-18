function gameOfIntervals(input) {

    let index = 0;
    let moves = Number(input[index]);
    index++;

    let from0to9 = 0;
    let from10to19 = 0;
    let from20to29 = 0;
    let from30to39 = 0;
    let from40to50 = 0;
    let invalidNumbers = 0;
    let totalNumbers = 0;
    let score = 0;

    for (let i = 1; i <= moves; i++) {
        let num = Number(input[index]);
        index++;
        totalNumbers++;
        if (num >= 0 && num <= 9) {
            from0to9++;
            score += (num * 0.20);
        } else if (num >= 10 && num <= 19) {
            from10to19++;
            score += (num * 0.30);
        } else if (num >= 20 && num <= 29) {
            from20to29++;
            score += (num * 0.40);
        } else if (num >= 30 && num <= 39) {
            from30to39++;
            score += 50;
        } else if (num >= 40 && num <= 50) {
            from40to50++;
            score += 100;
        } else if (num < 0 || num > 50) {
            invalidNumbers++;
            score /= 2;
        }
    }
    let from0to9Percentage = from0to9 / totalNumbers * 100;
    let from10to19Percentage = from10to19 / totalNumbers * 100;
    let from20to29Percentage = from20to29 / totalNumbers * 100;
    let from30to39Pecentage = from30to39 / totalNumbers * 100;
    let from40to50Pecentage = from40to50 / totalNumbers * 100;
    let invalidNumbersPercentage = invalidNumbers / totalNumbers * 100;

    console.log(score.toFixed(2));
    console.log(`From 0 to 9: ${from0to9Percentage.toFixed(2)}%`);
    console.log(`From 10 to 19: ${from10to19Percentage.toFixed(2)}%`);
    console.log(`From 20 to 29: ${from20to29Percentage.toFixed(2)}%`);
    console.log(`From 30 to 39: ${from30to39Pecentage.toFixed(2)}%`);
    console.log(`From 40 to 50: ${from40to50Pecentage.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumbersPercentage.toFixed(2)}%`);
}
gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);