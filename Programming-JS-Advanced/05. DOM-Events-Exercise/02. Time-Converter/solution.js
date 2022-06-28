function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds');

    daysBtn.addEventListener('click', onClick);
    hoursBtn.addEventListener('click', onClick);
    minutesBtn.addEventListener('click', onClick);
    secondsBtn.addEventListener('click', onClick);

    let units = {
        day: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function converter(value, unit) {
        let days = value / units[unit];
        return {
            days: days,
            hours: days * units.hours,
            minutes: days * units.minutes,
            seconds: days * units.seconds
        }
    }

    function onClick(ev) {
        let input = ev.target.parentElement.querySelector('input[type="text"]');
        let time = converter(Number(input.value), input.id);

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}