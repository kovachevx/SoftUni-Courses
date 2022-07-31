window.addEventListener('load', solution);

function solution() {
  let fullNameEl = document.getElementById('fname');
  let emailEl = document.getElementById('email');
  let phoneEl = document.getElementById('phone');
  let addressEl = document.getElementById('address');
  let codeEl = document.getElementById('code');

  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', onSubmit);

  function onSubmit() {
    let fullName = fullNameEl.value;
    let email = emailEl.value;
    let phone = phoneEl.value;
    let address = addressEl.value;
    let code = codeEl.value;

    if (!fullName || !email) {
      return;
    }

    fullNameEl.value = '';
    emailEl.value = '';
    phoneEl.value = '';
    addressEl.value = '';
    codeEl.value = '';

    let infoPreviewSection = document.getElementById('infoPreview');

    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');

    li1.textContent = 'Full Name: ' + fullName;
    li2.textContent = 'Email: ' + email;
    li3.textContent = 'Phone Number: ' + phone;
    li4.textContent = 'Address: ' + address;
    li5.textContent = 'Postal Code: ' + code;

    infoPreviewSection.appendChild(li1);
    infoPreviewSection.appendChild(li2);
    infoPreviewSection.appendChild(li3);
    infoPreviewSection.appendChild(li4);
    infoPreviewSection.appendChild(li5);

    let editBtn = document.getElementById('editBTN');
    editBtn.disabled = false;
    editBtn.addEventListener('click', onEdit);
    let continueBtn = document.getElementById('continueBTN');
    continueBtn.disabled = false;
    continueBtn.addEventListener('click', onContinue);

    submitBtn.disabled = true;

    function onEdit() {
      fullNameEl.value = fullName;
      emailEl.value = email;
      phoneEl.value = phone;
      addressEl.value = address;
      codeEl.value = code;

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
      infoPreviewSection.innerHTML = '';
    }

    function onContinue() {
      let div = document.getElementById('block');
      div.innerHTML = '';
      let h3 = document.createElement('h3');
      h3.textContent = 'Thank you for your reservation!';
      div.appendChild(h3);
    }
  }
}