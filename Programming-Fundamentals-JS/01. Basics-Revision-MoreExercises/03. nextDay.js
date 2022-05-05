function nextDay(year, month, day) {

    let newDate = new Date(year, month, day);
    year = newDate.getFullYear();
    month = newDate.getMonth();
    day = newDate.getDate() + 1;
    console.log(year);
    console.log(month);
    console.log(day);

    if (day > 30) {
        month = newDate.getMonth() + 1;
        day = 1;
    }
    if (month === 0) {
        month = 12;
        year = newDate.getFullYear() - 1;
    }
    if (month > 12) {
        year = newDate.getFullYear + 1;
        month = 1;
    }
    console.log(`${year}-${month}-${day}`);
}
nextDay(2016, 12, 31);