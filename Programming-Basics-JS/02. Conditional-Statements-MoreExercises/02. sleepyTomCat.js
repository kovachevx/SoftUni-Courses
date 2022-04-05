function sleeptTomCat(input){

    let daysOff = Number(input[0]);

    let workDays = 365 - daysOff;
    let totalPlayTime = workDays * 63 + daysOff * 127;
    let hoursDifference = Math.abs((30000 - totalPlayTime) / 60);
    let minutesDifference = Math.abs((30000 - totalPlayTime) % 60).toFixed(0);

    if (totalPlayTime > 30000){
        console.log("Tom will run away");
        console.log(`${Math.floor(hoursDifference)} hours and ${Math.floor(minutesDifference)} minutes more for play`);
    } else {

        console.log("Tom sleeps well");
        console.log(`${Math.floor(hoursDifference)} hours and ${Math.floor(minutesDifference)} minutes less for play`);
}
}
sleeptTomCat([113]);