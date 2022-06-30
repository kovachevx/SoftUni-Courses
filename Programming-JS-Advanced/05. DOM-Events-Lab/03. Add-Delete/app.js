function addItem() {
    //fetching necessary elements
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    //creating a deletion button
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete)

    //Associating elements
    liElement.appendChild(deleteBtn);
    document.getElementById('items').appendChild(liElement);

    //clearing the input field.
    input.value = '';

    function onDelete(ev) {
        ev.target.parentElement.remove();
    }
}