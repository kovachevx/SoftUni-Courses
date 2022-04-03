function timePlusAddMins(input){

    let hour = Number(input[0]);
    let mins = Number(input[1]);

    let totalTimeInMins = hour * 60 + mins + 15;

    let hours = Math.floor(totalTimeInMins / 60);
    let minutes = totalTimeInMins % 60;

    if(hours > 23){
        hours = 0;
    }

    if(minutes < 10){
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}

timePlusAddMins([21, 44])