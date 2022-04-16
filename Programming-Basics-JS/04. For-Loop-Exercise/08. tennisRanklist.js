function tennisRanklist(input) {

    let index = 0;
    let tournamentCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++
    let tempPoints = 0;
    let wCounter = 0;

    for (i = 1; i <= tournamentCount; i++) {

        let rank = input[index];
        switch (rank) {
            case "W": tempPoints += 2000; wCounter++; break;
            case "F": tempPoints += 1200; break;
            case "SF": tempPoints += 720; break;
        }
        index++;
    }
    let finalPoints = startPoints + tempPoints;
    let avgPoints = tempPoints / tournamentCount;
    let wPercentage = wCounter / tournamentCount * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${wPercentage.toFixed(2)}%`);
}
tennisRanklist([5, 1400, "F", "SF", "W", "W", "SF"]);