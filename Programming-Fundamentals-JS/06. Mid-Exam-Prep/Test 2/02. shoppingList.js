function shoppingList(arrayInput) {
    let list = arrayInput.shift().split('!');
    let index = 0;
    let command = arrayInput[index];

    while (command !== 'Go Shopping!') {
        let splitCommand = command.split(' ');
        let action = splitCommand[0];
        let product = splitCommand[1];
        let toBeRemoved = list.indexOf(product);

        if (action === 'Urgent') {
            if (list.includes(product)) {
            } else {
                list.unshift(product);
            }
        }

        if (action === 'Unnecessary') {
            if (toBeRemoved !== -1) {
                list.splice(toBeRemoved, 1);
            }
        }

        if (action === 'Correct') {
            let newItem = splitCommand[2];
            if (toBeRemoved !== -1) {
                list.splice(toBeRemoved, 1, newItem);
            }
        }

        if (action === 'Rearrange') {
            if (toBeRemoved !== -1) {
                let toBeReplaced = list.splice(toBeRemoved, 1).join('');
                list.push(toBeReplaced);
            }
        }

        index++;
        command = arrayInput[index];
    }
    console.log(list.join(', '));
}
shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
