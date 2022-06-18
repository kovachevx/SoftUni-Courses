function timeToWalk(steps, footprintInMeters, speedKMH) {

    let distanceInMeters = steps * footprintInMeters;
    let restTime = Math.floor(distanceInMeters / 500);
    let speedMS = speedKMH / 3.6;
    let neededTimeInSeconds = distanceInMeters / speedMS + restTime * 60;
    let minutes = Math.trunc(neededTimeInSeconds / 60);
    let hours = Math.trunc(minutes / 60);
    let seconds = Math.round(neededTimeInSeconds % 60);

    if (hours < 10 && minutes < 10) {
        console.log(`0${hours}:0${minutes}:${seconds}`);
    } else if (hours < 10 && minutes >= 10) {
        console.log(`0${hours}:${minutes}:${seconds}`);
    } else if (hours >= 10 && minutes < 10) {
        console.log(`${hours}:0${minutes}:${seconds}`);
    } else {
        console.log(`${hours}:${minutes}:${seconds}`);
    }

}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);