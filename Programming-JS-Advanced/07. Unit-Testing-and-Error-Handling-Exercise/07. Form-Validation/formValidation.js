function validate() {

    document.getElementById('company').addEventListener('change', () => {
        let companyInfo = document.getElementById('companyInfo');
        if (document.getElementById('company').checked) {
            companyInfo.style.display = 'block'
        }
        else {
            companyInfo.style.display = 'none'
        }
    });

    document.getElementById('submit').addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();
        let invalidFields = [];

        let checkbox = document.getElementById('company');
        let userName = document.getElementById('username');
        let userNamePattern = /^[A-Za-z0-9]{3,20}$/;
        if (!userNamePattern.test(userName.value)) {
            invalidFields.push(userName)
        }
        let email = document.getElementById('email');
        let emailPattern = /(.*)@(.*){1,}\.(.*){1,}/;

        if (!emailPattern.test(email.value)) {
            invalidFields.push(email);
        }
        let password = document.getElementById('password');
        let confirmPass = document.getElementById('confirm-password');
        let passlPattern = /^[\w]{5,15}$/;

        if (!passlPattern.test(password.value) ||
            confirmPass.value != password.value) {
            invalidFields.push(password);
            invalidFields.push(confirmPass);
        }

        if (checkbox.checked) {
            let companyId = document.getElementById('companyNumber');
            let companyPattern = /^[0-9]{4}$/;
            if (!companyPattern.test(companyId.value)) {
                invalidFields.push(companyId);
            }
        }

        let validBox = document.getElementById('valid');

        invalidFields.forEach(field => field.style.borderColor = 'red');
        !invalidFields.length ? validBox.style.display = 'block' : validBox.style.display = 'none';
    }
}