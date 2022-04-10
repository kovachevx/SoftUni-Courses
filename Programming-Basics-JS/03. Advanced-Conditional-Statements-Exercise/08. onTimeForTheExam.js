function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let examTime = examHour * 60 + examMin;
    let arrivalTime = arrivalHour * 60 + arrivalMin;
    let diff = Math.abs(examTime - arrivalTime);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (examTime < arrivalTime) {
        console.log("Late");

        if (h >= 1) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    } else if (examTime === arrivalTime || examTime - arrivalTime <= 30) {
        console.log("On time");

        if (m !== 0) {
            console.log(`${m} minutes before the start`);
        }
    } else if (examTime > arrivalTime) {
        console.log("Early");

        if (h < 1) {
            console.log(`${m} minutes before the start`);
        } else {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    }
}
onTimeForTheExam([9, 30, 7, 45])