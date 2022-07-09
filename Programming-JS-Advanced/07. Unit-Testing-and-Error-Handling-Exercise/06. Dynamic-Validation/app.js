function validate() {
    let inputField = document.getElementById('email');
    let validPattern = /[a-z]+@[a-z]+.[a-z]+/
    inputField.addEventListener('change', () => {
        if (!validPattern.test(inputField.value)) {
            inputField.classList.add('error');
        } else {
            inputField.classList.remove('error');
        }
    });
}