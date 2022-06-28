function lockedProfile() {

    let unlockBtns = document.querySelectorAll('.profile button');

    for (let btn of unlockBtns) {
        btn.addEventListener('click', onClick);
    }

    function onClick(ev) {
        let profile = ev.target.parentElement;
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            let hiddenFields = ev.target.parentElement.querySelector('div');
            if (ev.target.textContent == 'Show more') {
                hiddenFields.style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else {
                hiddenFields.style.display = 'none';
                ev.target.textContent = 'Show more';
            }
        }
    }
}