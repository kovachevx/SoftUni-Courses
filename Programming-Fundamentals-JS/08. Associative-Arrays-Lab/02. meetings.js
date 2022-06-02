function meetings(input) {
    let schedule = {};
    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(' ');
        let day = info[0];
        let person = info[1];
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);