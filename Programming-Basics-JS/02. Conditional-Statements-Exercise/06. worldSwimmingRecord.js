function swimmingRecord(input){

    let record = Number(input[0]);
    let distanceInM = Number(input[1]);
    let mPerSec = Number(input[2]);

    let delayCount = Math.floor(distanceInM / 15);
    let delayTime = delayCount * 12.5;

    let timeNeeded = distanceInM * mPerSec + delayTime;

    let diff = Math.abs(timeNeeded - record);

if (timeNeeded < record){
console.log(`Yes, he succeeded! The new world record is ${timeNeeded.toFixed(2)} seconds.`)
} else {
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
}

}

swimmingRecord([55555.67, 3017, 5.03]);