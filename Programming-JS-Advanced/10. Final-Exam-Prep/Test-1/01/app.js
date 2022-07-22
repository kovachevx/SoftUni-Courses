function solve() {

    let firstNameElement = document.querySelector('#fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthdateElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');
    let hireBtn = document.getElementById('add-worker');
    let sumElement = document.getElementById('sum')
    let sum = sumElement.textContent;
    hireBtn.addEventListener('click', onHire);

    let budget = 0;

    function onHire(ev) {
        ev.preventDefault();

        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let email = emailElement.value;
        let birthdate = birthdateElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;

        if (!firstName || !lastName || !email ||
            !birthdate || !position || !salary) {
            return;
        }

        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        birthdateElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        let tbodyElement = document.getElementById('tbody');
        let trElement = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = firstName;
        let td2 = document.createElement('td');
        td2.textContent = lastName;
        let td3 = document.createElement('td');
        td3.textContent = email;
        let td4 = document.createElement('td');
        td4.textContent = birthdate;
        let td5 = document.createElement('td');
        td5.textContent = position;
        let td6 = document.createElement('td');
        td6.textContent = salary;
        let td7 = document.createElement('td');
        let fireBtn = document.createElement('button');
        fireBtn.classList.add('fired');
        fireBtn.textContent = 'Fired';
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        td7.appendChild(fireBtn);
        td7.appendChild(editBtn);

        trElement.appendChild(td1);
        trElement.appendChild(td2);
        trElement.appendChild(td3);
        trElement.appendChild(td4);
        trElement.appendChild(td5);
        trElement.appendChild(td6);
        trElement.appendChild(td7);
        tbodyElement.appendChild(trElement);

        fireBtn.addEventListener('click', onFire);
        editBtn.addEventListener('click', onEdit);

        budget += Number(salary);
        sumElement.textContent = budget.toFixed(2);

        function onFire(ev) {
            budget -= Number(salary);
            sumElement.textContent = budget.toFixed(2);
            ev.target.parentElement.parentElement.remove();
        }

        function onEdit(ev) {
            budget -= Number(salary);
            sumElement.textContent = budget.toFixed(2);

            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            emailElement.value = email;
            birthdateElement.value = birthdate;
            positionElement.value = position;
            salaryElement.value = salary;

            ev.target.parentElement.parentElement.remove();
        }
    }

}
solve()