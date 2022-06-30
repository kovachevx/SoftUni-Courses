function deleteByEmail() {
    let customerData = Array.from(document.querySelectorAll('tbody tr td'));
    let inputEmail = document.querySelector('input[name="email"]').value;
    let result = document.getElementById('result');
    for (let i = 1; i < customerData.length; i += 2) {
        if (inputEmail == customerData[i].textContent) {
            result.textContent = 'Deleted.'
            customerData[i].parentElement.remove();
            break;
        } else {
            result.textContent = 'Not found.'
        }
    }
}