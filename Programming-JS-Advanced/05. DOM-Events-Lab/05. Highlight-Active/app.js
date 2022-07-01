function focused() {
    //creating event listeners for every button
    let sections = Array.from(document.querySelectorAll('input'));
    for (let i of sections) {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    }

    function onFocus(ev) {
        ev.target.parentElement.classList.add('focused');
    }
    function onBlur(ev) {
        ev.target.parentElement.classList.remove('focused');
    }
}