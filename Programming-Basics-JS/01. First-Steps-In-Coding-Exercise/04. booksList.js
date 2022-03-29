function bookList(input) {

    let pages = Number(input[0]);
    let readPagesForOneHour = Number(input[1]);
    let daysNeededToRead = Number(input[2]);

    let totalHoursNeeded = pages / readPagesForOneHour;
    let hoursPerDay = totalHoursNeeded / daysNeededToRead;
    
    console.log(hoursPerDay);

}

bookList([212, 20, 2]);