function lunchBreak(input) {

    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let restTime = breakDuration / 4;

    let timeLeft = (breakDuration - lunchTime - restTime);
    let difference = Math.abs(timeLeft - episodeDuration);

    if (timeLeft >= episodeDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(difference)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(difference)} more minutes.`)
    }
}

lunchBreak(["GOT", 48, 60]);