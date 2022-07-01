function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onChange);
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g

    function onChange() {
        if (pattern.exec(input.value) !== null) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }
}